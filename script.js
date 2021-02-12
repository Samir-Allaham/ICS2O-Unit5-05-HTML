let number = 0
let sentance = 'hello, this is the number 4.'

document.getElementById('report').addEventListener('click', specialButton)


document.getElementById('formula').addEventListener('click', formulaButton)

 function formulaButton () {
 number = document.getElementById('input').value
 

 number = 'The formula for a square is base(height)'
 alert(number)
 }

function specialButton () {
 number = document.getElementById('input').value

number = parseInt(number)

number = number * number


alert(number)
}
