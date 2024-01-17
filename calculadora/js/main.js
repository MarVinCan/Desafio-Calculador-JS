//Entrada Numero 1
const inputNumber1 = document.querySelector('[id="number1"]');

inputNumber1.addEventListener('change', handleInputNumberChange);

//Entrada Numero 2
const inputNumber2 = document.querySelector('[id="number2"]');

inputNumber2.addEventListener('change', handleInputNumberChange);

//Caixa de Resultado 
const resultBox = document.querySelector('[id="result-box"]');


//Botão mais 
const inputBtnPlus = document.querySelector('[id="btn-plus"]');

inputBtnPlus.addEventListener('click', handleInputBtnPlusClick);

//Botão vezes
const inputBtnTimes = document.querySelector('[id="btn-times"]');

inputBtnTimes.addEventListener('click', handleInputBtnTimesClick);

//Botão limpar
const inputBtnClear = document.querySelector('[id="btn-clear"]');

inputBtnClear.addEventListener('click', handleInputBtnClearClick);


//Funções 
function handleInputNumberChange(event) {
    if (validateNumber(event.target.value)) {
      event.target.classList.remove("input-error");
    } else {
      event.target.classList.add("input-error");
    }
  }


function validateNumber(value) {
    const res = Number(value);
    return !isNaN(res);       
 }

function handleInputBtnPlusClick(event){
    event.preventDefault();
    const result = Number(inputNumber1.value) +
    Number(inputNumber2.value);
    if(!isNaN(result)){

        return resultBox.innerHTML = result;
    } 
}

function handleInputBtnTimesClick(event){
    event.preventDefault();
    const result = Number(inputNumber1.value) *
    Number(inputNumber2.value);
    if(!isNaN(result)){

        return resultBox.innerHTML = result;
    } 

}

function handleInputBtnClearClick(event){
    event.preventDefault();
    return inputNumber1.value = '',
    inputNumber2.value =  '', 
    resultBox.innerHTML = 0;
}

