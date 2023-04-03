


const getGitHubUser = async(userName) => {
    return await fetch(`https://api.github.com/users/${userName}`)
    .then((user) => user.json());
}


let user = getGitHubUser('nihilnia').then((data) => data);
console.log(user);

let divMain = document.querySelector("#main");
