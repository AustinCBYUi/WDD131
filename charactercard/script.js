const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.webp",

    attacked: function () {
        const damage = Math.floor(Math.random() * 20) + 1;
        this.health -= damage;

    if (this.health <= 0) {
        this.health = 0;
        message.textContent = `${this.name} has died.`;
    }

    displayCharacter();
    },

    levelUp: function () {
        this.level += 1;
        displayCharacter();
    }
};

const nameText = document.querySelector("#name");
const className = document.querySelector("#className");
const level = document.querySelector("#level");
const health = document.querySelector("#health");
const image = document.querySelector("#characterImage");
const message = document.querySelector("#message");

const attackBtn = document.querySelector("#attackBtn");
const levelBtn = document.querySelector("#levelBtn");

function displayCharacter() {
    nameText.textContent = character.name;
    className.textContent = character.class;
    level.textContent = character.level;
    health.textContent = character.health;
    image.src = character.image;
}

attackBtn.addEventListener("click", function () {
    character.attacked();
});

levelBtn.addEventListener("click", function () {
    character.levelUp();
});

displayCharacter();