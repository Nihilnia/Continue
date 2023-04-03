const delay = (seconds) =>
    new Promise((resolve, reject) => {
        if(typeof seconds !== 'number') reject(new Error('You must give a number'));

        setTimeout(resolve, seconds * 1000);
    }
    
    );


//Resolve em
delay(2).then(() => console.log("the First"));
delay(4).then(() => sayHello());
delay(6).then(() => alert("the third"));



sayHello = () => {
    console.log("heya.");
}


//Reject
delay("8").then(() => alert("the fourth"));