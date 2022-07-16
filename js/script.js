const firstName = prompt("What's your first name?");
document.getElementById("first-name").innerHTML = firstName;
console.log(firstName);

const lastName = prompt("What's your last name?");
document.getElementById("last-name").innerHTML = lastName;
console.log(lastName);

const favoriteColor = prompt("What's your favorite color?");
document.getElementById("favorite-color").innerHTML = favoriteColor;
console.log(favoriteColor);

let password = document.getElementById("password");
password.innerHTML = `${firstName}${lastName}${favoriteColor}`;
console.log(`${firstName}${lastName}${favoriteColor}`);