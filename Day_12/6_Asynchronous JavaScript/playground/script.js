// let incomingData = "";


// const getTheData = () => {
//     let result = new Promise((resolve, reject) => {
//         if(incomingData !== ""){
//             reject(new Error("Incomi' data is null."));
//         }

//         setTimeout(resolve, 2000);
//     })

//     return result;
// }


// getTheData().then(function(){
//     console.log("aaa");
// });

// class human{
//     constructor(name, age){
//         this.name = name,
//         this.age = age
        
//     }

//     gen = function*(){
//         yield "Three";
//         yield "Two";
//         yield "One";
//         yield "And here he is!:";
//     }
    
//     aaa = gen();   

//     introduceYourself(){

             

//         for(let f = 0; f <= 5; f++){
//             setTimeout(() => {
//                 console.log(aaa.next());
//             }, 2000);
//         }
//     }

// }



// let fHuman = new human("DP", 35);
// fHuman.introduceYourself();


function readData(){
    fetch("Gloria.txt").then((response) => {
        return response.text();
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err);
    })
}


readData();