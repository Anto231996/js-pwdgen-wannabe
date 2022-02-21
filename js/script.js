const firstName = prompt("What's your first name?");
document.getElementById("first-name").innerHTML = firstName;

const lastName = prompt("What's your last name?");
document.getElementById("last-name").innerHTML = lastName;

const favoriteColor = prompt("What's your favorite color?");
document.getElementById("favorite-color").innerHTML = favoriteColor;

const password = document.getElementById("password");
password.innerHTML = `${firstName + lastName + favoriteColor}`;