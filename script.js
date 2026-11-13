// ==========================================
// PASSWORD
// ==========================================

const correctPassword = "101126";

const accessScreen =
    document.getElementById("accessScreen");

const mainContent =
    document.getElementById("mainContent");

const passwordInput =
    document.getElementById("passwordInput");

const passwordError =
    document.getElementById("passwordError");

const unlockButton =
    document.getElementById("unlockButton");

const togglePassword =
    document.getElementById("togglePassword");


// ==========================================
// UNLOCK WEBSITE
// ==========================================

function unlockWebsite() {

    const password =
        passwordInput.value.trim();


    if (password === correctPassword) {

        accessScreen.classList.add("hidden");

        mainContent.classList.remove("hidden");

        passwordError.textContent = "";

    } else {

        passwordError.textContent =
            "Oops, passwordnya belum benar ♡";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


unlockButton.addEventListener(
    "click",
    unlockWebsite
);


passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            unlockWebsite();

        }

    }
);


// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

togglePassword.addEventListener(
    "click",
    function () {

        if (
            passwordInput.type === "password"
        ) {

            passwordInput.type = "text";

            togglePassword.textContent = "◉";

        } else {

            passwordInput.type = "password";

            togglePassword.textContent = "♡";

        }

    }
);


// ==========================================
// MUSIC
// ==========================================

const bgMusic =
    document.getElementById("bgMusic");

const musicToggle =
    document.getElementById("musicToggle");

const equalizer =
    document.getElementById("equalizer");


// Volume musik
bgMusic.volume = 0.7;


// ==========================================
// START MUSIC
// ==========================================

async function startMusic() {

    try {

        await bgMusic.play();

        musicToggle.textContent = "❚❚";

        musicToggle.setAttribute(
            "aria-label",
            "Pause music"
        );

        equalizer.classList.add(
            "playing"
        );

    } catch (error) {

        console.error(
            "Musik tidak dapat diputar:",
            error
        );

    }

}


// ==========================================
// PAUSE MUSIC
// ==========================================

function pauseMusic() {

    bgMusic.pause();

    musicToggle.textContent = "▶";

    musicToggle.setAttribute(
        "aria-label",
        "Play music"
    );

    equalizer.classList.remove(
        "playing"
    );

}


// ==========================================
// MUSIC BUTTON
// ==========================================

musicToggle.addEventListener(
    "click",
    function () {

        if (bgMusic.paused) {

            startMusic();

        } else {

            pauseMusic();

        }

    }
);


// ==========================================
// OPEN SURPRISE
// ==========================================

const openSurprise =
    document.getElementById("openSurprise");

const envelope =
    document.getElementById("envelope");


openSurprise.addEventListener(
    "click",
    function () {

        // Buka envelope
        envelope.classList.add("open");


        // Mulai lagu ketika tombol
        // OPEN YOUR SURPRISE ditekan
        startMusic();


        // Confetti
        createConfetti();


        // Scroll menuju surat
        setTimeout(
            function () {

                document
                    .querySelector(
                        ".letter-section"
                    )
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            },
            900
        );

    }
);


// ==========================================
// CLICK ENVELOPE
// ==========================================

envelope.addEventListener(
    "click",
    function () {

        const isOpening =
            !envelope.classList.contains(
                "open"
            );


        envelope.classList.toggle(
            "open"
        );


        // Kalau envelope dibuka
        // lagu langsung dimainkan
        if (isOpening) {

            startMusic();

        }

    }
);


// ==========================================
// CONFETTI
// ==========================================

const confettiContainer =
    document.getElementById(
        "confettiContainer"
    );


function createConfetti() {

    const symbols = [
        "♡",
        "✦",
        "✧",
        "✿"
    ];


    for (let i = 0; i < 35; i++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add(
            "confetti"
        );


        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "%";


        confetti.style.fontSize =
            (12 + Math.random() * 15) +
            "px";


        confetti.style.animationDuration =
            (3 + Math.random() * 4) +
            "s";


        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";


        confettiContainer.appendChild(
            confetti
        );


        setTimeout(
            function () {

                confetti.remove();

            },
            8000
        );

    }

}


// ==========================================
// REVEAL ON SCROLL
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".letter-paper, " +
        ".reminder-card, " +
        ".final-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.8s ease, " +
            "transform 0.8s ease";

        observer.observe(element);

    }
);


// ==========================================
// AUDIO ERROR CHECK
// ==========================================

bgMusic.addEventListener(
    "error",
    function () {

        console.error(
            "File audio tidak ditemukan."
        );

        console.error(
            "Pastikan file berada di:"
        );

        console.error(
            "assets/audio/about-you.mp3"
        );

    }
);


// ==========================================
// WEBSITE LOADED
// ==========================================

console.log(
    "Birthday Surprise website loaded."
);

console.log(
    "Audio source:",
    "assets/audio/about-you.mp3"
);