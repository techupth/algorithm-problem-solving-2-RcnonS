function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      result = i;
    }
  }
  return result;
}

console.log(
  findStudentIndex(
    [
      "Andrew",
      "Bobby",
      "Diana",
      "George",
      "Hannah",
      "Isaac",
      "Jasmine",
      "John",
    ],
    "John"
  )
);
console.log(
  findStudentIndex(
    ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"],
    "Andrew"
  )
);

// ตอบคำถามตรงนี้จ้า
// Binary Search มี Big O เป็น log n เพราะการวนลูปหาค่าตามเงื่อนไข 1 ครั้งจะทำให้การทำงานของการค้นหาข้อมูลลดลงไปครึ่งหนึ่ง
