var colors = ["blue", "green", "gray", "yellow", "black", "red", "pink", "white"],   
            index = 0;                                     

        document.getElementById("btn1").onclick = function changeBackgroundColor() {
            document.body.style.background = colors[index];  
            index = (index + 1) % colors.length;             
        }


var button1 = document.getElementById('btn2');
i = -1;
function getCrazy() {
    i = (i + 1) % colors.length;
    document.body.style.background = colors[i];
}

document.getElementById("btn2").onclick = function () {
    document.body.style.background = getCrazy()
    setInterval(getCrazy, 3000);

}
