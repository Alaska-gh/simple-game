
// getting the value from local storage on page load
let calculation = JSON.parse(localStorage.getItem('calculation')) || ''

// displaying the value 
 document.querySelector('.js-display-result').innerHTML = calculation;


//  function to update the calculator value
function updateCalculator(value){
  result = document.querySelector('.js-display-result')

  if(value === 'clear'){
    calculation = ''
    result.innerHTML = '0'
  }else if(value === ' = '){
    calculation = eval(calculation);
    localStorage.setItem('calculation', JSON.stringify(calculation));
    result.innerHTML = calculation;
  }else{
    calculation += value
    result.innerHTML = calculation
  }
}