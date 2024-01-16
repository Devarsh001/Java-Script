// let math = parseFloat(document.getElementById('maths'));
// console.log(math.value);
// let sci = parseFloat(document.getElementById('science'));
// console.log(sci.value);
// let eng = parseFloat(document.getElementById('english'));
// console.log(eng.value);
// let his = parseFloat(document.getElementById('history'));
// console.log(his.value);
// let comp = parseFloat(document.getElementById('computer'));
// console.log(comp.value);
// let btn = document.getElementById('btn');
// let total = document.getElementById('total');
// let per = document.getElementById('per');
// let spn = document.getElementById('span');

function validate(marks, err, msg)
{
    if(marks.value <0 || marks.value>70)
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
    let math = parseFloat(document.getElementById('maths').value);
    console.log(math);
    console.log(typeof math);
    // console.log(math.value);
    // console.log(typeof math.value);
    // console.log(parseFloat(math.value));
    // console.log(typeof parseFloat(math.value));
    
    let sci = parseFloat(document.getElementById('science').value);
    console.log(sci);
    console.log(typeof sci);
    
    let eng = parseFloat(document.getElementById('english').value);
    console.log(eng);
    console.log(typeof eng);
    
    let his = parseFloat(document.getElementById('history').value);
    console.log(his);
    console.log(typeof his);
    
    let comp = parseFloat(document.getElementById('computer').value);
    console.log(comp);
    console.log(typeof comp);
    
    let btn = document.getElementById('btn');
    console.log(btn);
    
    // let sum = parseFloat(document.getElementById('total').value);
    // console.log(sum);
    // console.log(typeof sum);
    
    // let per = parseFloat(document.getElementById('percentage').
    // value);
    // console.log(per);
    // console.log(typeof per);
    
    let spn = document.getElementById('span');
    // console.log(spn.innerText);

    let sum = math + sci + eng + his + comp;
    console.log(sum);
    console.log(typeof sum);
    document.getElementById('total').value = sum;

    let per = ((sum)*100)/350;
    console.log(per);
    console.log(typeof per);
    document.getElementById('percentage').value = per;

    if(per >= 35 && per <= 100)
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

    // let btn = document.getElementById('btn');
    // let total = document.getElementById('total');
    // let per = document.getElementById('percentage');
    // let spn = document.getElementById('span');

    // total.value = math + sci + eng + his + comp;
    // console.log(total.value);
    // console.log(typeof total.value);
    // per.value = ((total.value)*100)/350;
    // console.log(per.value);
    // console.log(typeof per.value);

    // if(per.value >= 35 && per.value <= 100)
    // {
    //     spn.innerText = "Congratulations You are Pass...   :)";
    //     console.log(spn.innerHTML);
    //     console.log(typeof spn.innerHTML);
    // }
    // else
    // {
    //     spn.innerText = "Sorry You are Fail...  :(";
    //     console.log(spn.innerHTML);
    //     console.log(typeof spn.innerHTML);
    // }
}

// in JS {} is considered as a block
// let b = 200 // global as we declared it in window / we do not put it in ant block
// var a = 100 // global
// {
//     var a = 10 // global - shadowing
//     let b = 20 // block
//     const c = 30 // block
//     console.log(a); 
// }
// console.log(b); // 200  
// console.log(a);