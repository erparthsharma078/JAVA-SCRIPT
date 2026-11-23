document.getElementById("btn1").addEventListener("click", display);

function display(){
    let myno1 = Number(document.getElementById("no1").value);
    let myno2 = Number(document.getElementById("no2").value);

    let ans = myno1 + myno2;

    document.getElementById("demo1").innerHTML = "Addition : " + ans;
}
