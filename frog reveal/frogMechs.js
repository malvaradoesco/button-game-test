
function unveilMark
(thunder){
    let markElement =document.getElementById(thunder);
    markElement.classList.remove('hidden');
};

let firstButton = document.getElementById('button0');

firstButton.style.backgroundColor = `rgba(${brightness},${brightness},${brightness})`;

brightness -=50;




function unveilMark1
(hat){
    let markElement =document.getElementById(hat);
    markElement.classList.remove('hidden');
};
let secondButton = document.getElementById('button1');

secondButton.style.backgroundColor = `rgba(${brightness},${brightness},${brightness})`;

brightness -=50;
