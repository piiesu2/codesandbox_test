// const name = "富田";

// const message1 = `私の名前は${name}です。`;
// console.debug(message1);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.debug(func1("func1です"));

// const func2 = (str) => str;
// console.debug(func2("func2です"));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "富田",
//   age: 42
// };

// const messageProfile = `私は${myProfile.name}です。${myProfile.age}です`;
// console.debug(messageProfile);

// const { name, age } = myProfile;

// const messageProfile2 = `私は${name}ですよ。${age}です`;
// console.debug(messageProfile2);

/**
 * デフォルト値など
 */
// const sayHello = (name = "馬鹿野郎") => console.debug(`こんにちは${name}さん`);

// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [5, 2, 3];
// console.debug(arr1);
// console.debug(...arr1);

// const sumfunc = (num1, num2) => console.debug(num1 + num2);
// sumfunc(...arr1);
// // 余計な引数は無視されるのか…

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.debug(num1);
// console.debug(num2);
// console.debug(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];

// console.debug(arr6);
// const arr7 = [...arr4,...arr5];
// console.debug(arr7);
// const arr8 = arr4;
// arr8[0] = 100;
// console.debug(`arr8=${arr8}`);
// console.debug(arr4);
// console.debug(arr7);

const nameArr = ["たなか", "やまだ", "かわさき"];

// const nameArr2 = nameArr.map((name) => {
//   return name + "はやられた";
// });

// console.debug(nameArr2);

// nameArr.map((name, index) => console.debug(`${index}番、${name}`));

// const numArr = [1, 2, 3, 4, 5];

// const numArr2 = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.debug(numArr2);
// const newNameArr = nameArr.map((name) => {
//   if (name === "かわさき") {
//     return name;
//   } else {
//     return `${name}はやられた`;
//   }
// });
// console.debug(newNameArr);

/**
 * 参考演算子
 */
// const num = "1300";

// console.debug(num === 1 ? "a" : "b");

// console.debug(typeof num === "number" ? num.toLocaleString() : "ばぐ");
