let btn = document.querySelector("button");



const daClick = function(f){
    console.log("Clicked");
    console.log(f);
}



btn.addEventListener('click', () => {
    let asd = "asdasd";
    daClick(asd);
});

