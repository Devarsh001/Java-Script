let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('javascript');
let jq = document.getElementById('jquery');
let bs = document.getElementById('bootstrap');

let html_value = parseFloat(html.value);
console.log(html_value);
console.log(typeof html_value);
let css_value = parseFloat(css.value);
console.log(css_value);
console.log(typeof css_value);
let js_value = parseFloat(js.value);
console.log(js_value);
console.log(typeof js_value);
let jq_value = parseFloat(jq.value);
console.log(jq_value);
console.log(typeof jq_value);
let bs_value = parseFloat(bs.value);
console.log(bs_value);
console.log(typeof bs_value);

function validate(marks, err)
{
    if(marks.value < 0 || marks.value>100)
    {
        document.getElementById(err).innerText = "Invalid marks Input";
        document.getElementById(err).style.color = "red"
    }
    else
    {
        document.getElementById(err).innerText = "Valid marks inputed";
        document.getElementById(err).style.color = "green";
    }
}
function result()
{

}