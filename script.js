/* To do:
• []
*/

let register = [0];
let calculated = true;
let decimalInput = false;
let sigDigits = 4;

const digitButton = (num) => {
  checkInfinity;
  let input = document.getElementById("display");
  if (calculated) {
    input.innerHTML = num;
    calculated = false;
  } else {
    if (input.innerHTML.includes('.') && num === '.') return;
    if (input.innerHTML.includes('.') || input.innerHTML.length <= 2) {input.innerHTML += num; return;}
    else {
      let str = input.innerHTML + num;
      let strToNum = str.replaceAll(',', '');
      strToNum = parseFloat(strToNum);
      input.innerHTML = strToNum.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
    }
  }
}

const clearDisplay = () => {
  const display = document.getElementById("display");
  display.innerHTML = "0." + "0".repeat(sigDigits);
  calculated = true;
}

const enter = () => {
  checkInfinity;
  let input = document.getElementById("display");
  let strToNum = input.innerHTML;
  strToNum = strToNum.replaceAll(',', '');
  strToNum = parseFloat(strToNum);
  register.push(strToNum);
  input.innerHTML = strToNum.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
  calculated = true;
}

const plus = () => {
  checkInfinity;
  if (calculated) {
    let num1 = register.pop();
    let num2 = register.pop();
    if (!num2) num2 = 0;
    const answer = num1 + num2;
    let display = document.getElementById("display");
    display.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
  } else {
    let input = document.getElementById("display");
    let inputNum = input.innerHTML;
    inputNum = inputNum.replaceAll(',', '');
    inputNum = parseFloat(inputNum);
    let numToAdd = register.pop();
    if (!numToAdd) numToAdd = 0;
    const answer = inputNum + numToAdd;
    input.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
    calculated = true;
  }
}

const minus = () => {
  checkInfinity;
  if (calculated) {
    let num1 = register.pop();
    let num2 = register.pop();
    if (!num2) num2 = 0;
    const answer = num2 - num1;
    let display = document.getElementById("display");
    display.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
  } else {
    let input = document.getElementById("display");
    let inputNum = input.innerHTML;
    inputNum = inputNum.replaceAll(',', '');
    inputNum = parseFloat(inputNum);
    let numToSubtractFrom = register.pop();
    if (!numToSubtractFrom) numToAdd = 0;
    const answer = numToSubtractFrom - inputNum;
    let display = document.getElementById("display");
    display.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
    calculated = true;
  }
}

const multiply = () => {
  checkInfinity;
  if (calculated) {
    let num1 = register.pop();
    let num2 = register.pop();
    if (!num2) num2 = 0;
    const answer = num1 * num2;
    let display = document.getElementById("display");
    display.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
  } else {
    let input = document.getElementById("display");
    let inputNum = input.innerHTML;
    inputNum = inputNum.replaceAll(',', '');
    inputNum = parseFloat(inputNum);
    let numToMultiply = register.pop();
    if (!numToMultiply) numToMultiply = 0;
    const answer = inputNum * numToMultiply;
    let display = document.getElementById("display");
    display.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
    calculated = true;
  }
}

const divide = () => {
  checkInfinity;
  if (calculated) {
    let denominator = register.pop();
    let numerator = register.pop();
    if (!numerator) numerator = 0;
    const quotient = numerator / denominator;
    let display = document.getElementById("display");
    display.innerHTML = quotient.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(quotient);
  } else {
    let input = document.getElementById("display");
    let denominator = input.innerHTML;
    denominator = denominator.replaceAll(',', '');
    denominator = parseFloat(denominator);
    let numerator = register.pop();
    if (!numerator) numerator = 0;
    const quotient = numerator / denominator;
    let display = document.getElementById("display");
    display.innerHTML = quotient.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(quotient);
    calculated = true;
  }
}

const expon = () => {
  checkInfinity;
  if (calculated) {
    let num1 = register.pop();
    let num2 = register.pop();
    if (!num2) num2 = 0;
    const answer = Math.pow(num2, num1);
    let display = document.getElementById("display");
    display.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
  } else {
    let input = document.getElementById("display");
    let inputNum = input.innerHTML;
    inputNum = inputNum.replaceAll(',', '');
    inputNum = parseFloat(inputNum);
    let base = register.pop();
    if (!base) numToMultiply = 0;
    const answer = Math.pow(base, inputNum);
    let display = document.getElementById("display");
    display.innerHTML = answer.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(answer);
    calculated = true;
  }
}

const chs = () => {
  checkInfinity;
  if (calculated) {
    register[register.length - 1] *= -1;
    let display = document.getElementById("display");
    display.innerHTML = register[register.length - 1].toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
  } else {
    let input = document.getElementById("display");
    let display = input.innerHTML;
    if (display[0] === "-") display = display.slice(1);
    else display = "-" + display;
    input.innerHTML = display;
  }
}

const invert = () => {
  checkInfinity;
  if (calculated) {
    register[register.length - 1] = 1 / register[register.length - 1];
    let display = document.getElementById("display");
    display.innerHTML = register[register.length - 1].toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
  } else {
    let input = document.getElementById("display");
    let denominator = input.innerHTML;
    denominator = denominator.replaceAll(',', '');
    denominator = parseFloat(denominator);
    let numerator = 1;
    const quotient = numerator / denominator;
    let display = document.getElementById("display");
    display.innerHTML = quotient.toLocaleString(undefined, {minimumFractionDigits: sigDigits, maximumFractionDigits: sigDigits});
    register.push(quotient);
    calculated = true;
  }
}

const checkInfinity = () => {
  const display = document.getElementById("display");
  if (display.innerHTML === "Infinity") {
    register.pop();
    register.push(0);
    clearDisplay;
    return;
  } else return;
}

const formatDisplay = () => {
  let display = document.getElementById("display");
  if (calculated) {
    if (display.innerHTML.length >= 16) display.style.fontSize = "125%";
    else if (display.innerHTML.length >= 11) display.style.fontSize = "150%";
    else display.style.fontSize = "200%";
  } else {
    if (display.innerHTML.length >= 13) display.style.fontSize = "125%";
    else if (display.innerHTML.length >= 9) display.style.fontSize = "150%";
    else display.style.fontSize = "200%";
  }
}

// Initialize the display to zero with the proper significant digits
clearDisplay();

// Checks regularly for display font size reduction
setInterval(formatDisplay, 100);