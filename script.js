document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.title').addEventListener('click', function () {
        document.querySelector('.container').classList.add('open');
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.container').classList.remove('open');
    });
});

class Heart {
    constructor(id) {
        const heart = document.getElementById(id);
        const text = heart.querySelector(".heart-text");
        const sayings = [
            "ты чудо",
            "ты солнце",
            "ты справишься",
            "ты умница",
            "ты сладость",
            "ты бублик",
            "ты морковка",
            "ты персик",
            "ты котенок",
            "ты булочка",
        ];

        let currentIndex = 0;

        heart.addEventListener("click", () => {
            this.addText(text, sayings, currentIndex);
            currentIndex = (currentIndex + 1) % sayings.length;
        });
    }

    addText(container, sayings, index) {
        const str = sayings[index];
        const words = str.split(" ");

        container.innerHTML = "";

        words.forEach((word, i) => {
            const span = document.createElement("span");
            span.innerHTML = word + (i !== words.length - 1 ? " " : ""); // добавляем пробел, если это не последнее слово
            container.appendChild(span);
        });

        return container;
    }
}

const heartContainer = new Heart("heart-container");

