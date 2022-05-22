/**
 * x coordinate and y coordinate
 * h is heigt
 * w is width
 */
module.exports = class Student {
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
    getLastName() { return this.lastName }
    getX() { return this.x }
    getY() { return this.y }
    getContent() { return this.content }
  }