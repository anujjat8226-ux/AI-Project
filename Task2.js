const studentMarks = [85, 92, 78, 95, 88];
let highestMark = studentMarks[0];

for (let i = 1; i < studentMarks.length; i++) {
  if (studentMarks[i] > highestMark) {
    highestMark = studentMarks[i];
  }
}

console.log('Final marks check: The highest mark is ' + highestMark);
