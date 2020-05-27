const input = document.getElementById('input');
const output = document.getElementById('output');


input.addEventListener('input', () => {
    const number = input.value;
    console.log(number)
    fetchNumber(number);
});


function fetchNumber(number) {
    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            if (number != '') {
                output.style.display = 'block';
                output.innerText = data;
            } else {
                output.style.display = 'none';
            }
        })
        .catch(err => console.log(err));
}

// Switch implementation
const switchNumber = document.getElementById('number');
const switchYear = document.getElementById('year');
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('#container');
const box = document.querySelector('.box');
const yearInput = document.getElementById('yearInput');

switchNumber.addEventListener('click', () => {
    wrapper.style.display = 'none';
    container.style.display = 'block';
});

switchYear.addEventListener('click', () => {
    box.style.display = 'block';
    wrapper.style.display = 'none';
});

yearInput.addEventListener('input', () => {
    const year = yearInput.value;
    console.log(year)
    fetchYear(year);
})


function fetchYear(year) {
    fetch('http://numbersapi.com/' + year + '/year')
        .then(response => response.text())
        .then(data => {
            if (year != '') {
                yearOutput.style.display = 'block';
                yearOutput.innerText = data;
            } else {
                yearOutput.style.display = 'none';
            }
        })
        .catch(err => console.log(err));
}