

var div;
var box = document.querySelector("#box");

for(let f = 0; f < 5; f++){
    div = document.createElement("div");
    div.onclick = () => {
        alert("This is box #" + f);
    }
    console.log("F: " + f);
    box.appendChild(div);

}