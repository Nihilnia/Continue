//Function
//Return promise
    //api(link)
    //request(XMLHTTPRequest)


    //open
    //onload



const getData = (incominLink) => {
    let pPromise = new Promise((resolve, reject) => {
        let api = incominLink;
        let request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload(() => {
            if(request.status === 200){
                resolve(JSON.parse(request.response));
            }else{
                reject(Error(request.statusText));
            }
        });
        request.send();
        return pPromise;

        
    })
}


getData('https://jsonplaceholder.typicode.com/todos/1').then();



