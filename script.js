let number = 0

document.getElementById('report').addEventListener('click', calculator)

document.getElementById('formula').addEventListener('click', formula)

function formula () {
  number = document.getElementById('input').value
  
  number = 'The formula for a square is base(height)'
  alert(number)
}

function calculator () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * number

  alert(number)
}
