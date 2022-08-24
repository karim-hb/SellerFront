export function emailValidation(value: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value.toLowerCase());
}

export function urlValidation(value: string) {
  const re =
    /[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  return re.test(value);
}

const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/* for checking int number */
export function checkingNumber(e: any) {
  e.target.value = e.target.value
    .toString()
    .replace(/\d/g, (x: any) => farsiDigits[x])
    .replace(/[^"۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]/g, "");
}

/* for checking float  number */

export function checkingFloat(e: any) {
  e.target.value = e.target.value
    .toString()
    .replace(/\d/g, (x: any) => farsiDigits[x])
    .replace(/[^"۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹".]/g, "");
}

/* for checking noSpace  */

export function noSpace(e: any) {
  e.target.value = e.target.value.toString().replace(/\s+/g, "");
}

/* for separate numbers  */

export function separate(Number: string) {
  Number += "";
  Number = Number.replace(",", "");
  let x = Number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}

/* for translate numbers to persian */

export function fNom(str: string) {
  str = str.toString();
  const persDigit = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const enDigit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < persDigit.length; i++) {
    str = str.replace(new RegExp(persDigit[i], "g"), enDigit[i]);
  }
  return str;
}

/* K and m formater for large numbers*/
var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
export function kFormatter(number: number) {
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled + suffix;
}
/* conver persian number to english */
export function toEnglishDigits(str: any) {
  // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
  var e = "۰".charCodeAt(0);
  str = str.replace(/[۰-۹]/g, function (t: any) {
    return t.charCodeAt(0) - e;
  });

  // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
  e = "٠".charCodeAt(0);
  str = str.replace(/[٠-٩]/g, function (t: any) {
    return t.charCodeAt(0) - e;
  });
  return str;
}

