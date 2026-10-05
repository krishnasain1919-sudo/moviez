/* =========================
   MOVIE CARD INTERACTION
========================= */

const movieCards = document.querySelectorAll(".movie-card");


movieCards.forEach(function (card) {

    card.addEventListener("click", function () {

        console.log("Movie selected");

    });

});