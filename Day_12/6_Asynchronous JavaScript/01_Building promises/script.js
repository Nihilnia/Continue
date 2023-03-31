//This example is silly but ok

const delay = (seconds) => {
    let pPromise = new Promise((resolve, reject) => {
        if(typeof seconds !== 'number'){
            setTimeout(() => {
                reject(new Error('You must give number.'));
            }, 2000);
            
        }

        setTimeout(resolve, seconds * 1000);
    })

    return pPromise;
}


delay(2).then(() => console.log('Fire coming out of the monkey\' s head'));


//Reject
delay("2").then(() => console.log('Fire coming out of the monkey\' s head'));