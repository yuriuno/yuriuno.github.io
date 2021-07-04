const solutions = document.getElementsByTagName('details');
const summaries = document.getElementsByTagName('summary')
const maths = document.querySelectorAll('.math');
const master_thesis = document.getElementById("master_thesis")



for (let i = 0; i < solutions.length; i++) {
    summaries[i].addEventListener('click', function () {
        solutions[i].classList.toggle('border');
    });
}

