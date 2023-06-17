export const acceptableExt = ".jpg, .jpeg, .png";

export const fileToBase64 = async (file: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  await new Promise(
    (resolve: (value?: undefined) => void) => (reader.onload = () => resolve())
  );

  return reader.result;
};

export const urlToFile = async (url: string) => {
  const res = await fetch(url);
  const blob = await res.blob();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fileName = url.split("/").pop()!.split(".")[0];
  const ext = url.split(".").pop()?.split("?")[0];

  const file = new File([blob], `${fileName}.${ext}`, { type: `image/${ext}` });

  return file;
};
