//Variables declaration
var membershipCard = document.querySelector(".membership__card");
var membershipCardItems = document.querySelectorAll(".membership__card__item");

//Event Listeners
membershipCard.addEventListener("mouseover", changeCardColorTeal);
membershipCard.addEventListener("mouseleave", changeCardColorWhite);

//functions
function changeCardColorTeal() {
    membershipCard.classList.add("membership__card--background--color--change");
    membershipCardItems.forEach(function (e) {
        e.classList.add("membership__card--white--text");
    });
}

function changeCardColorWhite() {
    membershipCard.classList.remove("membership__card--background--color--change");
    membershipCardItems.forEach(function (e) {
        e.classList.remove("membership__card--white--text");
    });
}