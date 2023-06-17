export const convertQuizTypeLang = (type: string[]) =>
  type.reduce((acc: string[], cur) => {
    let str = "";

    switch (cur) {
      case "캐시닥":
        str = "cashdoc";
        break;
      case "캐시워크":
        str = "cashwalk";
        break;
      case "타임스프레드":
        str = "timespread";
        break;
      case "지니어트":
        str = "geniet";
        break;
      case "cashdoc":
        str = "캐시닥";
        break;
      case "cashwalk":
        str = "캐시워크";
        break;
      case "timespread":
        str = "타임스프레드";
        break;
      case "geniet":
        str = "지니어트";
        break;
      default:
        str = cur;
        break;
    }
    return [...acc, str];
  }, []);

export const convertQuizAttribute = (keyArr: string[]) =>
  keyArr.reduce((acc: string[], cur) => {
    let str = "";

    switch (cur) {
      case "vendor":
        str = "광고주";
        break;
      case "type":
        str = "노출 서비스";
        break;
      case "title":
        str = "제목";
        break;
      case "beginDate":
        str = "시작일";
        break;
      case "totalPoint":
        str = "총 포인트";
        break;
      case "usedPoint":
        str = "사용된 포인트";
        break;
      default:
        str = cur;
        break;
    }
    return [...acc, str];
  }, []);
