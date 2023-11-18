/* Question 1: Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR  */
document.getElementById("heading").innerHTML = "Javascript";

/* Question 2: Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself' */
document.querySelector(".paragraph").textContent = "This is a language I have mastered and I am proud of myself. I complished this because I believed in myself.";

/*Question 3: Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector */
let h3 = document.querySelector("h3")
h3.innerHTML = ("Things I've accomplished so far.")