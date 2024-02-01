function transfer(a, move)
{
    if(a.value == "")
    {
        document.getElementById(move).style.top = "";
        document.getElementById(move).style.fontSize = "13px";
    }
    else
    {
        document.getElementById(move).style.top = "4px";
        document.getElementById(move).style.transition = "0.3s";
        document.getElementById(move).style.fontSize = "10px";
    }
}
function showPassword()
{
    let a = document.getElementById('shwpsw');
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}
// function validate(input, err, msg)
// {
//     if(input.value == "")
//     {
//         document.getElementById(err).innerText = msg + " is required";
//         document.getElementById(err).style.color = "red";
//     }
//     else
//     {
//         document.getElementById(err).innerText = msg + "";
//     }
// }