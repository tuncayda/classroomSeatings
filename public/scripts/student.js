 class Student {
  constructor(firstName, lastName, x, y, h = 1, w = 1) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.content = firstName;
  }

  getFirstName() { return this.firstName }
  getLastName()  { return this.lastName }
  getX() { return this.x }
  getY() { return this.y }
  getContent()   { return this.content }
}

function fillClass(studentList, seatsTemplateList) {
  let index = 0;
  let classList = [];

  studentList.forEach(student => {
    student.x = seatsTemplateList[index][0];
    student.y = seatsTemplateList[index][1];
    classList.push(student);
    index++;
  });

  return classList;
}

export { Student, fillClass };