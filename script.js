const startButton = document.getElementById("startButton");
const memoryButton = document.getElementById("memoryButton");
const nextButton = document.getElementById("nextButton");
const opening = document.getElementById("opening");
const story = document.getElementById("story");
const memory = document.getElementById("memory");
const diaryButton = document.getElementById("diaryButton");
const chapterTwo = document.getElementById("chapterTwo");
const cityButton = document.getElementById("cityButton");
const chapterThree = document.getElementById("chapterThree");
const reconnectButton = document.getElementById("reconnectButton");
const chapterFour = document.getElementById("chapterFour");
const photoStory = document.getElementById("photoStory");
const photoStoryButton = document.getElementById("photoStoryButton");
const photoSlide1 = document.getElementById("photoSlide1");
const photoSlide2 = document.getElementById("photoSlide2");
const photoSlide3 = document.getElementById("photoSlide3");
const photoStoryNextButton = document.getElementById("photoStoryNextButton");
const photoStoryNextButton2 = document.getElementById("photoStoryNextButton2");
const friendshipTimeline = document.getElementById("friendshipTimeline");
const timelineSlide1 = document.getElementById("timelineSlide1");
const timelineSlide2 = document.getElementById("timelineSlide2");
const timelineSlide3 = document.getElementById("timelineSlide3");

const timelineButton1 = document.getElementById("timelineButton1");
const timelineButton2 = document.getElementById("timelineButton2");
const timelineButton3 = document.getElementById("timelineButton3");
const doctorSlide = document.getElementById("doctorSlide");
const doctorNextButton = document.getElementById("doctorNextButton");

const birthdayQuiz = document.getElementById("birthdayQuiz");

const quizSlide1 = document.getElementById("quizSlide1");
const quizSlide2 = document.getElementById("quizSlide2");
const quizSlide3 = document.getElementById("quizSlide3");
const quizSlide4 = document.getElementById("quizSlide4");
const quizSlide5 = document.getElementById("quizSlide5");

const q1Yes = document.getElementById("q1Yes");
const q1No = document.getElementById("q1No");

const quizResult1 = document.getElementById("quizResult1");
const quizResult2 = document.getElementById("quizResult2");
const quizResult3 = document.getElementById("quizResult3");
const quizResult4 = document.getElementById("quizResult4");
const quizResult5 = document.getElementById("quizResult5");


timelineButton1.addEventListener("click", function () {

    timelineSlide1.style.display = "none";
    timelineSlide2.style.display = "flex";

});

timelineButton2.addEventListener("click", function () {

    timelineSlide2.style.display = "none";
    timelineSlide3.style.display = "flex";

});

timelineButton3.addEventListener("click", function () {

    timelineSlide3.style.display = "none";
    doctorSlide.style.display = "flex";

});

startButton.addEventListener("click", function () {

    opening.style.display = "none";
    story.style.display = "flex";

});

memoryButton.addEventListener("click", function () {

    story.style.display = "none";
    memory.style.display = "flex";

});

nextButton.addEventListener("click", function () {

    memory.style.display = "none";
    chapterTwo.style.display = "flex";

});

diaryButton.addEventListener("click", function () {

    const diaryReveal = document.getElementById("diaryReveal");

    diaryReveal.classList.add("show");

    diaryButton.style.display = "none";

    setTimeout(function () {

        chapterTwo.style.display = "none";
        chapterThree.style.display = "flex";

    }, 12000);

});

cityButton.addEventListener("click", function () {

    chapterThree.style.display = "none";
    chapterFour.style.display = "flex";

});
reconnectButton.addEventListener("click", function () {

    chapterFour.style.display = "none";
    photoStory.style.display = "flex";

});
photoStoryButton.addEventListener("click", function () {

    photoSlide1.style.display = "none";
    photoSlide2.style.display = "flex";

});

photoStoryNextButton.addEventListener("click", function () {

    photoSlide2.style.display = "none";
    photoSlide3.style.display = "flex";

});

photoStoryNextButton2.addEventListener("click", function () {

    photoStory.style.display = "none";
    birthdayQuiz.style.display = "flex";

});

/* Birthday Quiz */


/* Question 1 */

q1Yes.addEventListener("click", function () {

    quizResult1.textContent = "Correct answer. 😎";
    quizResult1.classList.add("show");

    setTimeout(function () {

        quizSlide1.style.display = "none";
        quizSlide2.style.display = "flex";

    }, 1800);

});


q1No.addEventListener("click", function () {

    quizResult1.textContent =
        "Wrong answer... but since you're a dentist, I'll let it slide. 😂🤝";

    quizResult1.classList.add("show");

    setTimeout(function () {

        quizSlide1.style.display = "none";
        quizSlide2.style.display = "flex";

    }, 2200);

});


/* Question 2 */

const quizOptions2 = quizSlide2.querySelectorAll(".quiz-option");

quizOptions2.forEach(function (option) {

    option.addEventListener("click", function () {

        quizResult2.textContent =
            "Correct! 😂 All of them. Especially the coffee.";

        quizResult2.classList.add("show");

        setTimeout(function () {

            quizSlide2.style.display = "none";
            quizSlide3.style.display = "flex";

        }, 2000);

    });

});


/* Question 3 */

const quizOptions3 = quizSlide3.querySelectorAll(".quiz-option");

quizOptions3.forEach(function (option) {

    option.addEventListener("click", function () {

        quizResult3.textContent =
            "Correct answer: Whoever has an exam tomorrow. 😂";

        quizResult3.classList.add("show");

        setTimeout(function () {

            quizSlide3.style.display = "none";
            quizSlide4.style.display = "flex";

        }, 2000);

    });

});


/* Question 4 */

const quizOptions4 = quizSlide4.querySelectorAll(".quiz-option");

quizOptions4.forEach(function (option) {

    option.addEventListener("click", function () {

        quizResult4.textContent =
            "Honestly... all four. 😂";

        quizResult4.classList.add("show");

        setTimeout(function () {

            quizSlide4.style.display = "none";
            quizSlide5.style.display = "flex";

        }, 2000);

    });

});


/* Question 5 */

const quizOptions5 = quizSlide5.querySelectorAll(".quiz-option");

quizOptions5.forEach(function (option) {

    option.addEventListener("click", function () {

        quizResult5.textContent =
            "Correct answer. 😂 All of the above. And that's probably why we're still here.";

        quizResult5.classList.add("show");

        setTimeout(function () {

            birthdayQuiz.style.display = "none";
            friendshipTimeline.style.display = "flex";

        }, 3000);

    });

});

/* Dentist Mode Easter Egg */

const dentistPopup = document.getElementById("dentistPopup");
const dentistClose = document.getElementById("dentistClose");

document.addEventListener("keydown", function (event) {

    if (event.key.toLowerCase() === "d") {

        dentistPopup.classList.add("show");

    }

});

dentistClose.addEventListener("click", function () {

    dentistPopup.classList.remove("show");

});

dentistPopup.addEventListener("click", function (event) {

    if (event.target === dentistPopup) {

        dentistPopup.classList.remove("show");

    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        dentistPopup.classList.remove("show");

    }

});

/* =========================
   FINAL BIRTHDAY REVEAL
   ========================= */

const finalReveal =
    document.getElementById("finalReveal");

const finalTeaser =
    document.getElementById("finalTeaser");

const finalCompletion =
    document.getElementById("finalCompletion");

const finalPersonal =
    document.getElementById("finalPersonal");

const absoluteEnding =
    document.getElementById("absoluteEnding");

const finalMessageButton =
    document.getElementById("finalMessageButton");

const photoRevealButton =
    document.getElementById("photoRevealButton");

const loadingDots =
    document.getElementById("loadingDots");


/* Future Dentist → Final Reveal */

doctorNextButton.addEventListener("click", function () {

    friendshipTimeline.style.display = "none";

    finalReveal.style.display = "flex";

});


/* Teaser → Completion */

finalMessageButton.addEventListener("click", function () {

    finalTeaser.style.display = "none";

    finalCompletion.style.display = "flex";

    let dots = 0;

    const loadingAnimation = setInterval(function () {

        dots++;

        if (dots > 3) {
            dots = 0;
        }

        loadingDots.textContent =
            "LOADING" + ".".repeat(dots);

    }, 400);


    setTimeout(function () {

        clearInterval(loadingAnimation);

        loadingDots.textContent = "100%";

    }, 3000);

});


/* Completion → Photo + Personal Message */

photoRevealButton.addEventListener("click", function () {

    finalCompletion.style.display = "none";

    finalPersonal.style.display = "grid";

});


/* Final ending */

setTimeout(function () {

    if (
        finalPersonal.style.display === "grid"
    ) {

        finalPersonal.style.opacity = "0";

        setTimeout(function () {

            finalPersonal.style.display = "none";

            absoluteEnding.style.display = "flex";

            setTimeout(function () {

                absoluteEnding.style.opacity = "1";

                absoluteEnding.style.transition =
                    "opacity 1.5s ease";

            }, 100);

        }, 1500);

    }

}, 30000);

const finishButton =
    document.getElementById("finishButton");

finishButton.addEventListener("click", function () {

    finalPersonal.style.opacity = "0";

    finalPersonal.style.transition =
        "opacity 1.5s ease";

    setTimeout(function () {

        finalPersonal.style.display = "none";

        absoluteEnding.style.display = "flex";

        setTimeout(function () {

            absoluteEnding.style.opacity = "1";

            absoluteEnding.style.transition =
                "opacity 1.5s ease";

        }, 100);

    }, 1500);

});