const container = document.querySelector('.container');
let i = 0;
let div;
while (i < 256) {
    const div = document.createElement('div');
    div.classList.add('squares');
    container.appendChild(div);   
    i++; 
}

