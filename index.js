const click = document.querySelector(".random-button");
click.addEventListener("click", () => {
    
    const randomNumber = Math.ceil(Math.random() * 83);
    console.log(randomNumber);
    
    animateButton();
    playSound();

    const infoList = document.querySelectorAll(".info-card p");
    infoList.forEach(thisCard => {
        
        const cardID = thisCard.id;

        fetch(`https://swapi.dev/api/people/${randomNumber}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);

            switch (cardID) {
                case "name":
                    thisCard.innerHTML = data.name;
                    break;
                case "height":
                    thisCard.innerHTML = data.height;
                    break;
                case "mass":
                    thisCard.innerHTML = data.mass;
                    break;
                case "skin-color":
                    thisCard.innerHTML = data.skin_color;
                    break;
                case "birth-year":
                    thisCard.innerHTML = data.birth_year;
                    break;
                case "gender":
                    thisCard.innerHTML = data.gender;
                    break;
                default:
                    break;
            }
        });
    })
});


function animateButton() {

    const activeButton = document.querySelector(".random-button");
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

function playSound() {

    const sound = new Audio("sounds/yellow.mp3");
    sound.play();
}