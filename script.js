const container = document.querySelector('.container');
const btnSquares = document.querySelector('.btnSquares');

//sets the default number of squares to 50, before the user changes the number
let j = 0;
while (j < 100) {
    //create the div
    const div = document.createElement('div');
    //delete the line below
    div.classList.add('squares');
    //delete the line above
    //add the event listener that changes the color on mouseenter
    div.addEventListener('mouseenter', function changeToBlack(e) {
        e.target.style.backgroundColor = 'black';
    });
    //append the div to the container
    container.appendChild(div);
    j++;
}

//button to change the number of squares
btnSquares.addEventListener("click", function changeNumberOfSquares () {
    const number = window.prompt("Digite o número desejado de quadrados por lado (máximo de 100):");
    if (number > 100) {
        alert("O número de quadrados deve ser igual ou menor do que 100!");
        return;
    } else {
        while(container.firstChild) {
            container.firstChild.remove();
        }
        //adds the amount of squares the user wants
        let i = 0;
        while (i < number) {
            //create the div
            const div = document.createElement('div');
            //delete the line below
            div.classList.add('squares');
            //delete the line above
            //add the event listener that changes the color on mouseenter
            div.addEventListener('mouseenter', function changeToBlack(e) {
                e.target.style.backgroundColor = 'black';
            });
            //append the div to the container
            container.appendChild(div);
            i++;
        }
    }
       
});



