import XLSX from "xlsx-populate";
import type { IQuiz } from "$lib/types/quiz";
import { dateFormatter, pipe } from "../common";
import { convertQuizTypeLang, convertQuizAttribute } from "./convertLanguage";

const downloadKey = [
  "vendor",
  "type",
  "title",
  "beginDate",
  "totalPoint",
  "usedPoint",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TDownLoadObj = { [key in (typeof downloadKey)[number]]: any };

const downloadCSV = async (
  data: IQuiz[],
  password = "",
  fileName = "퀴즈 리스트"
) => {
  const workbook = await XLSX.fromBlankAsync();
  const sheet = workbook.sheet(0);

  const dataToDownload = data.map((quiz: TDownLoadObj) => {
    const obj: TDownLoadObj = {};

    for (const key of downloadKey) {
      if (key in quiz) {
        if (key === "beginDate") obj[key] = dateFormatter(quiz[key]);
        else if (key === "type")
          obj[key] = convertQuizTypeLang(quiz[key]).join(",");
        else if (key.includes("Point") && Number.isInteger(Number(quiz[key])))
          obj[key] = Number(quiz[key]).toLocaleString();
        else obj[key] = quiz[key];
      }
    }
    return obj;
  });

  const headers = pipe(
    Object.keys(dataToDownload[0]).filter((key) => downloadKey.includes(key)),
    convertQuizAttribute
  );

  headers.forEach((header, idx) => sheet.cell(1, idx + 1).value(header));

  dataToDownload.forEach((obj, rowIdx) =>
    Object.values(obj).forEach((val, colIdx) =>
      sheet.cell(rowIdx + 2, colIdx + 1).value(val)
    )
  );

  const buffer = await workbook.outputAsync(password ? { password } : {});

  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.xlsx`;
  a.click();

  URL.revokeObjectURL(url);
};

export { downloadCSV };
