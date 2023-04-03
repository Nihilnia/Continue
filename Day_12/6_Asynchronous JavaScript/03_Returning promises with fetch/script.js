const getData = () => 
fetch('http://api.open-notify.org/astros.json').
then((response) => response.json());

//getData().then((incominData) => console.log(incominData));


const getOnlyNames = () => {
    return getData()
    .then((data) => data.people)
    .then((ppl) => ppl.map((f) => f.name))
    .then((names) => names.join('\n'))
}


getOnlyNames().then((data) => {
    setTimeout(() => {
        console.log('%cOnly Names:', 'color: orange');
        console.log(data);
    }, 2000);
});


const customFormat = () => {
    return getData()
    .then((data) => data.people)
    .then((ppl) => ppl.map((f) => {
        let result = `Craft: ${f.craft}, Name: ${f.name}`;
        return result;
    }))
    .then((final) => final.join('\n'))
}


console.log('%cNames and the crafts:', 'color: orange');
customFormat().then((data) => {
    console.log(data);
});