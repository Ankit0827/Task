function valiDate() {
    var x = Number(document.getElementById("Ifield").value);
    console.log(x)
    if (x < 0) {
        document.getElementById("err").innerHTML = "Please enter the +ve value";
    }
    else if (x % 2 == 0) {
       
        let x1 = x + 2;
        let x2 = x1 + 2;
        let x3 = x2 + 2;
        var temp = x1 + "," + x2 + "," + x3;
        document.getElementById("err").innerHTML = temp;
    } else {
        x1 = x + 2;
        x2 = x1 + 2;
        x3 = x2 + 2;
        var temp = x1 + "," + x2 + "," + x3;
        document.getElementById("err").innerHTML = temp;
    }
    return false;
}
x
