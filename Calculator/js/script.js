class Calculator{
    constructor(previousOperandTextEl,currentOperandTextEl){
        this.previousOperandTextEl = previousOperandTextEl
        this.currentOperandTextEl = currentOperandTextEl
        this.clear();
    }
    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
        history.innerText = ""
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }
    appendNumber(number){
        if(number === "." && this.currentOperand.toString().includes('.')) return
        this.currentOperand = this.currentOperand.toString()+number.toString();
    }
    chooseOperation(operation){
        if(this.currentOperand === "") return
        if(this.currentOperand !==""){
            this.compute();
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = "";

    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            case '^':
                computation = prev ** current
                break
            defualt:
                return
        }
        this.historyCurrentEl = this.currentOperand
        this.historyPrevEl = this.previousOperand
        this.historyOpearator = this.operation
        this.currentOperand = computation
        this.previousOperand = ""
        this.operation = undefined

    }
    updateDisplay(){
        this.currentOperandTextEl.innerText = this.currentOperand
        this.previousOperandTextEl.innerText = this.previousOperand
        if(this.operation != null){
            this.previousOperandTextEl.innerText = `${this.previousOperand} ${this.operation}`
        }
        
    }
    addToHistory(){
        if(this.previousOperand!="" || this.currentOperand!=""){
            this.calculationNumber += 1
            let para = document.createElement('p');
            para.innerText = `${this.historyPrevEl} ${this.historyOpearator} ${this.historyCurrentEl} = ${this.currentOperand}`
            history.appendChild(para);
        }
        
    }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const calculateBtn = document.querySelector("[data-calculate]");
const deleteBtn = document.querySelector("[data-delete]");
const previousTextElement = document.querySelector("[data-previous-operand]");
const currentTextElement = document.querySelector("[data-current-operand]");
const allClearBtn = document.querySelector('[data-all-clear]');
const history = document.getElementById("history");
console.log(history);
const calculator = new Calculator(previousTextElement,currentTextElement);

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operatorButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay()
    })
})

calculateBtn.onclick = function(){
    calculator.compute()
    calculator.updateDisplay()
    calculator.addToHistory()
}

allClearBtn.onclick = function(){
    calculator.clear()
    calculator.updateDisplay()
}
deleteBtn.onclick = function(){
    calculator.delete()
    calculator.updateDisplay()
}

document.addEventListener('keydown', keyPressed);

function keyPressed(e) {
    if(e.key==="Backspace"){
        calculator.delete()
        calculator.updateDisplay()
    }
    if(e.code.includes("Digit")){
        calculator.appendNumber(e.key)
        calculator.updateDisplay()
    }
    if(e.key==='Enter'){
        calculator.compute()
        calculator.updateDisplay()
        calculator.addToHistory()
    }
}