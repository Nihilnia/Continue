const delay = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000 * seconds);
    });

};


const countDown = async(numb) => {
    for(let f = 0; f < numb; f++){
        await delay(f);
        console.log(f + 1 + ' seconds passed..');
    }
}

countDown(10);


//Another example



const rndGenerator = function*(){
    yield('1 seconds passed..');
    yield('2 seconds passed..');
    yield('3 seconds passed..');
    yield('4 seconds passed..');
    yield('5 seconds passed..');
}


let xGen = rndGenerator();

const ex = async() => {
    await delay(1);
    console.log(xGen.next().value);
    await delay(2);
    console.log(xGen.next().value);
    await delay(3);
    console.log(xGen.next().value);
    await delay(4);
    console.log(xGen.next().value);
    await delay(5);
    console.log(xGen.next().value);
}

ex();