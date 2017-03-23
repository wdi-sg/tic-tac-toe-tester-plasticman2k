document.addEventListener('DOMContentLoaded',
function () {{
  document.querySelector('button').addEventListener('click', function(){

  var firstNum = document.querySelector('firstNum').value
  var secondNum = document.querySelector('secondNum').value
  var operator = document.querySelector('operator').value
  document.querySelector('result').value(firstNum, secondNum, operator)
  var calculator = document.querySelector('calculator').value

  if (operator === '+') {
    return ('result is' + firstNum + secondNum)
  } else if (operator === '-') {
    return ('result is' + firstNum - secondNum)
  } else if (operator === '*') {
    return ('result is' + firstNum * secondNum)
  } else if (operator === '/') {
    return ('result is' + firstNum / secondNum)
  } else { alert('Only use operators!') }
}
}
)
