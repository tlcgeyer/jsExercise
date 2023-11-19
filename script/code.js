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
let calculateButton = document.querySelector('button[data-calculate1]');

// 5.4. Attach the FIRST span element to a variable(To display the information to)
//         P.S. for the next step make use of console.log() to keep track of where data is going  
let resultElement = document.querySelector('span[data-first]');
resultElement.textContent = result;
document.querySelector('p').textContent = `The result is: ${result}`; 

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

// Question 6:  Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable 
document.querySelector('input[data-firstModulus]').value = '202';
// 6.2 Set the send modulud input to a variable
document.querySelector('input[data-secondModulus]').value = '3';
// 6.3 Set the SECOND span to a variable(will display answer)
function calculateDivison() {
    let firstValue = document.querySelector('input[data-firstModulus]').value;
  let secondValue = document.querySelector('input[data-secondModulus]').value;
  let resultElement = document.querySelector('span[data-result]');
}

// 6.4 Set the SECOND button to a variable(to run event listener)
let calculateButton2 = document.querySelector('button[data-calculate2]');
// 6.5 Create a normal function to calculate the modulus of the inputs
function calculateSum2() {
    let result =  202 % 3;
    console.log(result); 
}
// 6.6 Add an event listener to the button which will run the function you created
document.querySelector('button[data-calculate2]').addEventListener('click', calculateSum2);

// Question 7: 
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'
document.getElementById("bubbleTea"). = "White Tea."; 
// 7.2 Change the text of 'Green Tea' to 'Black tea'
document.querySelector(".greenTea").textContent = "Black Tea";
// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
​document.querySelector('li[data-icedTea]').textContent = "Herbal Tea";

//Question : 8 
//Declare a variable called lastName and add a value to it(value must be a string)
let lastName = Geyer ; 
console.log(lastName);

// Question 9 :  Declare a variable called parentsAge and give it a value of 20(value must be a number)
let parentsAge = 20 ; 
console.log(parentsAge);

// Question 10 : Create an array with called coolCars and give it the following value: ['BMW','Bugatti','Ferrari','McLaren', 'Mercedes']
​let cars = ["BMW" , "Bugatti" , "Ferrari", "McLaren","Mercedes"];
console.log(cars); 

//Question 11 : Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
cars.splice (3, 0, 'Lamborghini'); 
console.log(cars);

//Question 12 : Use a for loop to loop through the array, and console.log every value inside of the array.
for ( let i = 0; i < 6; i++ ) {

}

// Question 13 : Reverse the array and console.log the reversed array.
cars = ["Mercedes", "Lamborghini", "Ferrari", "Bugatti", "BMW"] ;
console.log(cars(reverse))

//Question 14 :  Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
let coolCars = cars ; 
cars.splice(0,4)
console.log(cars);

// Question 15 :  Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugatti', 'Ferrari', 'Lamborghini']
​

// Question 16 :  Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check

// Question 17 : Make use of a switch statement and create a possible soultion for no.16

// Question 18 :     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')


// Question 19 : USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1


// Question 20 : USE while or a do while loop to print out the array of Question15(coolCars). 

// Question 21 : Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic


// Question 22 : Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.

// Question 23 
// 23.1.   What code will I write to view the value of the armRestBars.
// 23.2    What code can I use to delete the property of legs with the value of 4.
​

// Question 24 :  Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description

// Question 25 : Create 4 objects of your choice using a factory function and console.log() each of them

// Question 26 : Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains
​

// Question 27 : Create 4 objects of your own and print to the console all of the created objects.


//  Question 28 : After, push the 4 objects to an array called 'informationAboutCars'.


// Question  29 : Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'


// Question 31  : Make sure to write the above sentences for each car inside the corresponding h4 elements
// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'


// Question 32 : Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number


// Question 33 :Go back to Question 16 and use the conditional statement you created. The age has to be requested from the user and the message ust be written to the html page in the corresponding element