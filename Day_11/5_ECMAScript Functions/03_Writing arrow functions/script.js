let studentList = function(students){
    console.log(students);
}
studentList(['a', 'b', 'c']);

//Insted of 'function' keyword

let teacherList = (teachers) => {
    console.log(teachers);
}

teacherList(['d', 'e', 'f']);

//Also, shorter (if there is only one statement to do)

let teacherList_2 = (teachers) => console.log(teachers);
teacherList_2(['f', 'f', 'f']);


//Another example with MAP function
let fruitz = ['banana', 'apple', 'cherry'];

fruitz.map(item => console.log(item));
//Longer version;
fruitz.map((item) => {
    console.log(item);
})