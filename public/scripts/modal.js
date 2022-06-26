import { SchoolClass, addToClass, addClassroom } from './schoolClass.js';

function updateSchoolClasses() {
  let db = JSON.parse(localStorage.getItem('db'));
  let schoolClass = db[db.length - 1];
  const parent = document.querySelector('.modal-content-top');

  let button = document.createElement('button');
  button.innerHTML = schoolClass.name;
  button.setAttribute('data-schoolClass-id', schoolClass.id);
  button.classList.add('modal-content-schoolClass');
  parent.append(button);
}

function populateModalContent() {
  let db = JSON.parse(localStorage.getItem('db'));
  const parent = document.querySelector('.modal-content-top');

  for (let i = 0; i < db.length; i++) {
    parent.insertAdjacentHTML('afterbegin', `
    <div class="modal-content-schoolClass" data-schoolclass-id="${db[i].id}">${db[i].name}</div>
    <div class="modal-content-schoolClass-students">
      <button class="modal-content-schoolClass-students-actions-addButton">+ Elev</button>
      <div class="modal-content-schoolClass-students-actions">
        <input class="modal-content-schoolClass-students-actions-addStudent inputFirstname" type="text" value="Förnamn"/>
        <input class="modal-content-schoolClass-students-actions-addStudent inputLastname" type="text" value="Efternamn"/>
        <button class="modal-content-schoolClass-students-actions-cancel">Avbryt </button>
        <button class="modal-content-schoolClass-students-actions-submit">Spara</button>
      </div>
    </div>
    `)
  }
}
// function populateModalContent() {
//   let db = JSON.parse(localStorage.getItem('db'));
//   const parent = document.querySelector('.modal-content-top');

//   for (let i = 0; i < db.length; i++) {
//     let button = document.createElement('button');
//     button.innerHTML = db[i].name;
//     button.setAttribute('data-schoolClass-id', db[i].id);
//     button.classList.add('modal-content-schoolClass');
//     parent.append(button);
//   }
// }

function clearModalContent() {
  const parent = document.querySelector('.modal-content-top');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addModalButtons() {
  // Adding class FE
  let addClassButton = document.querySelector('.modal-content-addClassButton');
  addClassButton.addEventListener('click', () => {

    // Show input field and action buttons
    let inputField = document.querySelector('.modal-content-actions');
    addClassButton.style.display = 'none';
    inputField.style.display = 'block';

    // Clear input field
    let input = document.querySelector('.modal-content-actions-inputSchoolClassName');
    input.addEventListener('focusin', () => {
      input.value = '';
    });

    // Cancel
    document.querySelector('.modal-content-actions-cancel').addEventListener('click', () => {
      addClassButton.style.display = 'block';
      input.value = 'Klassnamn';
      inputField.style.display = 'none';
    });
  });

  // Submit schoolClass
  let submitButton = document.querySelector('.modal-content-actions-submit');
  submitButton.addEventListener('click', () => {
    let schooClassName = document.querySelector('.modal-content-actions-inputSchoolClassName').value;
    if (schooClassName.length < 1 || schooClassName === 'Klassnamn') {
      alert('Class name must be longer than 1 character');
    } else {
      addClassroom(schooClassName.toLocaleUpperCase());
      updateSchoolClasses();
    }
  });
}

/**
 * Add student
 */

let addStudentButton = document.querySelector('.modal-content-schoolClass-students-actions-addButton');
addStudentButton.addEventListener('click', () => {
  let studentActions = document.querySelector('.modal-content-schoolClass-students-actions');
  studentActions.style = 'display: block';
  addStudentButton.style = 'display: none';

  // Cancel button
  let studentCancelButton = document.querySelector('.modal-content-schoolClass-students-actions-cancel');
  studentCancelButton.addEventListener('click', () => {
    studentActions.style = 'display: none';
    addStudentButton.style = 'display: block';
  });

  // Submit button
  let submitStudent = document.querySelector('.modal-content-schoolClass-students-actions-submit');
  submitStudent.addEventListener('click', () => {
    let firstname = document.querySelector('.inputFirstname').value;
    let lastname = document.querySelector('.inputLastname').value;

    if (firstname.length < 1 || firstname == 'Förnamn'|| lastname.length < 1 || lastname == 'Efternamn') {
      alert('Please enter a name');
    } else {
      let schoolClassID = submitStudent.closest('.modal-content-schoolClass').getAttribute('data-schoolClass-id');
      addToClass(firstname, lastname, schoolClassID);
    }
  });
});








AOS.init({
  duration: 550,
  easing: 'ease-out-back'
});
export { updateSchoolClasses, populateModalContent, clearModalContent, addModalButtons }