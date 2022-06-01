const firstName = "Jaiden";
const lastName = "Groenland";

console.log(firstName);
console.log(lastName);

let fullName = firstName + " " +lastName;

const myDiv = document.querySelector('.show');
console.log(myDiv);

myDiv.innerHTML += `${fullName}`;

const password = prompt("wat is het wachtwoord")

if (password == "h@ck3d") {
    alert("welkom"); }

else {
    alert("You’ve failed, Game over!")
}
