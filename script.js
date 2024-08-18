// QUESTION!
// var a = 10;
// document.write(`Result:<br>The value of a is: ${a}<br>...................................<br><br>`);
// document.write(`The value of ++a is: ${++a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`)
// document.write(`The value of a++ is: ${a++}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);
// document.write(`The value of --a is: ${--a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);
// document.write(`The value of a-- is: ${a--}<br>`);
// document.write( `Now the value of a is: ${a}<br>`);

// Question 2
// var a = 2, b = 1;
// document.write("Initial values:<br>");
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br><br>");
// var step1 = --a;
// document.write("After --a:<br>");
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("step1 (result of --a) is: " + step1 + "<br><br>");
// var step2 = --b;
// document.write("After --b:<br>");
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("step2 (result of --b) is: " + step2 + "<br><br>");
// var step3 = ++b;
// document.write("After ++b:<br>");
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("step3 (result of ++b) is: " + step3 + "<br><br>");
// var step4 = b--;
// document.write("After b--:<br>");
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("step4 (result of b--) is: " + step4 + "<br><br>");

// QUESTION
// var name=prompt(`Write your name `);
// document.write("Hi!How are you doing " + name);

// question
// var def = prompt("Enter a number (default is 5):") || '5';
// var number = Number(def);
// document.write(`${number} X 1 = ${number * 1} <br/>`);
// document.write(`${number} X 2 = ${number * 2} <br/>`);
// document.write(`${number} X 3 = ${number * 3} <br/>`);
// document.write(`${number} X 4 = ${number * 4} <br/>`);
// document.write(`${number} X 5 = ${number * 5} <br/>`);
// document.write(`${number} X 6 = ${number * 6} <br/>`);
// document.write(`${number} X 7 = ${number * 7} <br/>`);
// document.write(`${number} X 8 = ${number * 8} <br/>`);
// document.write(`${number} X 9 = ${number * 9} <br/>`);
// document.write(`${number} X 10 = ${number * 10} <br/>`);


// QUESTION
var subjName1 = prompt("Enter name of subject 1");
var subjName2 = prompt("Enter name of subject 2");
var subjName3 = prompt("Enter name of subject 3");
var totalMarks = 100;
var subj1 = parseInt(prompt("Enter marks of subject 1"));
var subj2 = parseInt(prompt("Enter marks of subject 2"));
var subj3 = parseInt(prompt("Enter marks of subject 3"));

var totalObtainedMarks = subj1 + subj2 + subj3;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write("<table>");
document.write("<tr>");
document.write("<th>Subjects</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjName1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + subj1 + "</td>");
document.write("<td>" + (subj1 / totalMarks) * 100 + "%</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + subjName2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + subj2 + "</td>");
document.write("<td>" + (subj2 / totalMarks) * 100 + "%</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + subjName3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + subj3 + "</td>");
document.write("<td>" + (subj3 / totalMarks) * 100 + "%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><strong>Total</strong></td>");
document.write("<td><strong>" + (totalMarks * 3) + "</strong></td>");
document.write("<td><strong>" + totalObtainedMarks + "</strong></td>");
document.write("<td><strong>" + totalPercentage + "%</strong></td>");
document.write("</tr>");


document.write("</table>");

























