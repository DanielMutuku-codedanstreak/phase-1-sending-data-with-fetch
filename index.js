// Add your code here
const base_URL = 'http://localhost:3000'
function submitData(username,useremail){
    return fetch(`${base_URL}/users`, {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name : username,
            email : useremail
        }),
    }).then(res => res.json())
    .then(data => {
        //upon success
        document.body.innerHTML += `<p>User ID: ${data.id}</p>`;
    })
    .catch(error => {
        //upon error
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    })
}

//call the function
let username = 'Daniel Mutuku'
let useremail = 'mutukudaniel79@gmail.com'
submitData(username, useremail);