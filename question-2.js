const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let highScore50 = students.filter((students) => students.score > 50);
console.log(highScore50);

let up10per = highScore50.map(
  (highScore50) => highScore50.score + highScore50.score * 0.1,
);
console.log(up10per);

let totalScore = up10per.reduce((acc, cur) => acc + cur, 0);
console.log(totalScore);

console.log(`"Total score is ${totalScore.toFixed(1)}"`);
