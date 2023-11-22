
const today = new Date();


const year = today.getFullYear();
const month = today.getMonth(); // 月は0から始まるため、+1をする
const day = today.getDate();

console.log(year + "年" + month + "月" + day + "日");



