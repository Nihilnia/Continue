const getData = () => {
    return new Promise((resolve, reject) => {
        const apiLink = 'http://api.open-notify.org/astros.json';
        const request = new XMLHttpRequest();
        request.open('GET', apiLink);

        request.onload = () => {
            if(request.status === 200){
                resolve(JSON.parse(request.response));
            }else{
                reject(Error(request.statusText));
            }
        };

        request.onerror = (err) => reject(err);
        request.send();


    })
};

getData().then(
    (incominData) => console.log(incominData),
    (err) => console.error(new Error("Cannot load the incomin' data"))
);


