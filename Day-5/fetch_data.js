
async function fetchData() {

    try {
        const response = await fetch(`https://api.github.com/users/Code081`, {
            headers: {
                'Authorization': `token ${apiKey}`
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();