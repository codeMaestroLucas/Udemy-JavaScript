let hour = prompt("Time: ");

if (0 <= hour && hour <= 11) {
    alert("Good Morning!");
} else if (12 <= hour && hour <= 17) {
    alert("Good Afternoon!");
} else if (18 <= hour && hour <= 23) {
    alert("Good Evening!");
} else {
    alert("?!");
}


const userScore = prompt("User score: ");
const userLevel = userScore > 10 ? "VIP" : "Normal";

const userColor = 'Pink';
const normalColor = (userLevel === "VIP") ? userColor : 'Black';

console.log(`User Level: ${userLevel} ${normalColor}`);


