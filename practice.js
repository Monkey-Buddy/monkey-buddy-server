
const userId = 1;
const fields = {
  email: "bobo@gmail.com",
  username: "bobo"
}
const setClause = Object.keys(fields).map((key, i) => {
  return `${key} = $${i + 2}`;
}).join(", ");

const values = [userId, ...Object.values(fields)];

console.log(setClause);
// console.log(Object.keys(fields).map((key, i) => {
//   return key + "!";
// }));