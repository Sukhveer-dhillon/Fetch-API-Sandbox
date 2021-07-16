document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getusers').addEventListener('click', getUsers);
document.getElementById('getposts').addEventListener('click', getPosts);
document.getElementById('addpost').addEventListener('submit', addPost);

function getText() {
    fetch('sample.txt')
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => {
            console.log("rejected:", err);
        })

}

function getUsers() {
    fetch('users.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let output = '<h2 class="mb-4">Users</h2>';
            data.forEach(function (user) {
                output += `
                    <ul class="list-group mb-3">
                        <li class="list-group-item">ID: ${user.id}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                    </ul>    
                    `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => {
            console.log("rejected:", err);
        })

}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function (post) {
                output += `
                   <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    </div>  
                    `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => {
            console.log("rejected:", err);
        })

}

//post request using fetch
function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'

        },
        body: JSON.stringify({ title: title, body: body })
    })
        .then((response) => response.json())
        .then((data) => console.log(data))


}
