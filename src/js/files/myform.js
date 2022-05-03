


document.addEventListener('submit', formSend)
const form = document.getElementById('form')
async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll('._req')

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      }
    } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
      formAddError(input);
      error++;
    } else {
      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }

  }
}

function formAddError(input) {
  input.parentElemennt.classlist.add('_error');
  input.classlist.add('_error')

}
function formRemoveError(input) {
  input.parentElemennt.classlist.remove('_error');
  input.classlist.remove('_error')

}


// Функция теста имаил
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}