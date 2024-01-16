// let math = (document.getElementById('maths'));
// console.log(math.value);
// let sci = (document.getElementById('science'));
// console.log(sci.value);
// let eng = (document.getElementById('english'));
// console.log(eng.value);
// let his = (document.getElementById('history'));
// console.log(his.value);
// let comp = (document.getElementById('computer'));
// console.log(comp.value);
// let btn = document.getElementById('btn');
// let total = document.getElementById('total');
// let per = document.getElementById('per');
// let spn = document.getElementById('span');

let math = document.getElementById('maths');
console.log(math.value);
let sci = document.getElementById('science');
console.log(sci.value);
let eng = document.getElementById('english');
console.log(eng.value);
let his = document.getElementById('history');
console.log(his.value);
let comp = document.getElementById('computer');
console.log(comp.value);

let btn = document.getElementById('btn');
console.log(btn);
let total = document.getElementById('total');
console.log(total.value);
let per = document.getElementById('per');
console.log(per.value);
let spn = document.getElementById('span');
console.log(spn.innerText);

function validate(marks, err, msg) 
{
    if (marks.value < 0 || marks.value > 70) 
    {
        document.getElementById(err).innerText = "Invalid " + msg;
        document.getElementById(err).style.color = "red";
        document.getElementById(err).style.fontSize = "10px";
    }
    else 
    {
        document.getElementById(err).innerText = "Valid " + msg;
        document.getElementById(err).style.color = "green";
        document.getElementById(err).style.fontSize = "10px";
    }
}


function result() 
{
    total.value = Number(math.value) + Number(sci.value) + Number(eng.value) + Number(his.value) + Number(comp.value);
    console.log(total.value);
    console.log(typeof total.value);

    per.value = ((total.value) * 100) / 350;
    console.log(per.value);
    console.log(typeof per.value);

    if (per.value >= 35 && per.value <= 100) 
    {
        spn.innerText = "Congratulations You are Pass...   :)";
        console.log(spn.innerHTML);
        console.log(typeof spn.innerHTML);
    }
    else 
    {
        spn.innerText = "Sorry You are Fail...  :(";
        console.log(spn.innerHTML);
        console.log(typeof spn.innerHTML);
    }
}