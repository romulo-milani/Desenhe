const container = document.querySelector('.container');
const btnSquares = document.querySelector('.btnSquares');
const btnClear = document.querySelector('.btnClear');

//sets the default number of squares to 50, before the user changes the number
let j = 0;
while (j < 25 * 25) {
    //create the div
    const div = document.createElement('div');
    div.style.width = "4%";
    div.style.height = "4%";
    div.classList.add('squares');

    //generate a random color
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    //add the event listener that changes the color on mouseenter
    div.addEventListener('mouseenter', function changeToBlack(e) {
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
    //append the div to the container
    container.appendChild(div);
    j++;
}

//button to change the number of squares
btnSquares.addEventListener("click", function changeNumberOfSquares() {
    const number = window.prompt("Digite o número desejado de quadrados por lado (máximo de 50):");
    if (number > 50) {
        alert("O número de quadrados deve ser igual ou menor do que 50!");
        return;
    } else {
        while (container.firstChild) {
            container.firstChild.remove();
        }
        //adds the amount of squares the user wants
        let i = 0;
        while (i < number * number) {
            //create the div
            const div = document.createElement('div');
            //Adjust width and eight based on user choice
            div.style.width = `${100 / number}%`;
            div.style.height = `${100 / number}%`;
            //add class
            div.classList.add('squares');

            //generate a random color for each div
            const red = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);

            //add the event listener that changes the color on mouseenter
            div.addEventListener('mouseenter', function changeToBlack(e) {
                e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
            //append the div to the container
            container.appendChild(div);
            i++;
        }
    }

});

//CLEAR BUTTON
btnClear.addEventListener('click', function clear() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach(element => {
        element.style.backgroundColor = 'white';
    });
})



