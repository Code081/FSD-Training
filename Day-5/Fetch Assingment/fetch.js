let url = 'https://api.github.com/users/Code081';
b = fetch(url);
b.then((data)=>{
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error")
})

async function display() {
    let url = 'https://api.github.com/users/Code081';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    displayData(data);
}
function displayData (data)  {
    let unameElement = document.createElement('p');
    unameElement.textContent = `Username: ${data.login}`;

    let nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${data.name}`;

    let bioElement = document.createElement('p');
    bioElement.textContent = `Bio: ${data.bio}`;

    let avatarElement = document.createElement('img');
    avatarElement.src = data.avatar_url;
    avatarElement.alt = `${data.login}'s avatar`;

    let container = document.getElementById('container');
    container.appendChild(unameElement);
    container.appendChild(nameElement);
    container.appendChild(bioElement);
    container.appendChild(avatarElement);
}
display();