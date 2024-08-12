// Eg API fetch function. If async-await is not used, it wont wait for the 'fetch()' method and throw error


const fetchUserInfo = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2');  // async function

    // parse the json
    const userData = await response.json();  // async function
    console.log(userData);
}

// call the function
fetchUserInfo();