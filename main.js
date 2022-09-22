// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
let ansList = document.querySelectorAll('.head');
let marksList = document.querySelectorAll('.marksPrint');
const btn = document.querySelector('.btn');



const totalMarks = 720;
let totalCorrect = 0;
let totalIncorrect = 0;



// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  const inputField = document.querySelectorAll('.inputField');
  e.preventDefault();
  let check = false;
  for (let input of inputField) {
    if (input.value === '') {
      check = true;
    }
  }

  if (check) {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    inputField.forEach(function (input) {
      input.style.display = 'none';
    })
    btn.style.display = 'none';

    for (let i = 0; i < ansList.length; i++) {
      const correctAns = inputField[2 * i].value;
      const incorrectAns = inputField[2 * i + 1].value;

      totalCorrect += 4 * parseInt(correctAns);
      totalIncorrect -= parseInt(incorrectAns);

      const str = `${4*correctAns} - ${incorrectAns} = ${4*correctAns - incorrectAns}`;

      ansList[i].classList.add('makeInlineLeft');
      marksList[i].classList.add('makeInlineRight');

      marksList[i].textContent = str;
    }
    if (totalCorrect > totalMarks) {
      msg.innerHTML = `<h2>Enter Marks Correctly (${totalCorrect} / ${totalMarks})</h2>`;
      msg.classList.add('error');
    } else {
      msg.innerHTML = `<h2>You have scored ${totalCorrect} out of ${totalMarks}</h2>`;
      msg.classList.add('success');
    }

  }
}