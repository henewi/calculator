// Clear button //
const clearBtn = document.getElementById('clearBtn')
const screencontent = document.getElementById('screencontent')
clearBtn.addEventListener('click', clear)
function clear() {
    screencontent.textContent=''
}

// Main button workings // 

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }    
}

function chooseOperation(operation) { 
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute
    }
}

function appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

function compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
            computation = prev+current
            break
        case '-':
            computation = prev-current
            break
        case 'x':
            computation = prev*current
            break
        case '/':
            computation = prev/current
            break
        default:
            return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
 }

function updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
}

function getDisplayNumber(number) {
    const floatNumber = parseFloat(number)
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

