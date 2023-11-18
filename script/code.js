/* Question 1: Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR  */
document.getElementById("heading").innerHTML = "Javascript";

/* Question 2: Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself' */
document.querySelector(".paragraph").textContent = "This is a language I have mastered and I am proud of myself. I complished this because I believed in myself.";

/*Question 3: Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector */
let h3 = document.querySelector("h3")
h3.innerHTML = ("Things I've accomplished so far.")

/*Question 4: Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index */
let p = document.getElementsByTagName('p')[1];
p.innerHTML= ("I have discovered that I can accomplished anything I put my mind to.")

//Question 5:
//5.1. Attach the first input to a variable
document.querySelector('input[data-firstMultiply]').value = '7';
//5.2. Attach the second input to a variable
document.querySelector('input[data-secondMultiply]').value = '8';
// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)
function calculateMutiplcation() {
    let firstValue = document.querySelector('input[data-firstMultiply]').value;
  let secondValue = document.querySelector('input[data-secondMultiply]').value;
  let resultElement = document.querySelector('span[data-result]');
}
document.querySelector('button[data-calculate1]').addEventListener('click',)

// 5.4. Attach the FIRST span element to a variable(To display the information to)
//         P.S. for the next step make use of console.log() to keep track of where data is going  
resultElement.textContent = result;
document.querySelector('p').textContent = `The result is: ${result}`; 
  {
    alert('7 * 8');
  }

// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
function calculateSum() {
    let result = parseFloat(7) * parseFloat(8);
}

// 5.6. Add an event listener to the button that runs the function that you created
document.querySelector('button[data-calculate1]').addEventListener('click',)

// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText
let firstNumber = parseFloat(7);
let secondNumber = parseFloat(8);
let result = firstNumber * secondNumber;