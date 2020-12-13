
// let person = [
//     { name: " venu", number: 8084739, age: 23, },
//     { name: " venu", number: 8084739, age: 23, },

// ];

// function getData() {
//     let body = document.getElementById('get');
//     body.innerHTML = "";

//     person.forEach(get => {
//         body.innerHTML += `<div class="row">
//     <div> ${get.name}</div>
//     <div> ${get.number}</div>
//     <div> ${get.age}</div>
//     <div> <a href="">Edit</a>
//     <a href="">Delete</a></div>
//     </div>`
//     })
// }
// getData();

// function myFunction() {
//     const one = document.getElementById('name').value;
//     const two = document.getElementById('number').value;
//     const tdree = document.getElementById('age').value;

//     person.push({ one, two, tdree });


//     document.getElementById('name').value = "";
//     document.getElementById('number').value = "";
//     document.getElementById('age').value = "";
//     getData();
// }

let details = [{
    username: "venu", password: "asdg", email: "venu@gmail.com", number: 243242,
},
{ username: " venu", password: "8084739", email: "some@gmail.com", number: 123456 },
];

function getData() {
    let body = document.getElementById('body');
    body.innerHTML = "";
    details.forEach(item => {
        body.innerHTML += `<div class="row">
        <table border=1>
        <tr>
            <td>${item.username}</td>
            <td>${item.password}</td>
            <td>${item.email}</td>
            <td>${item.number}</td>
            <td> <a href="#">Edit</a>
            <a href="#">Delete</a></td>
        </tr>
    </table>
    </div>`
    })
}
getData();

function getInputs() {
    const uname = document.getElementById('userName').value;
    const pass = document.getElementById('passWord').value;
    const email = document.getElementById('eMail').value;
    const numr = document.getElementById('nuMber').value;

    details.push({ uname, pass, email, numr });

    document.getElementById('userName').value = "";
    document.getElementById('passWord').value = "";
    document.getElementById('eMail').value = "";
    document.getElementById('nuMber').value = "";
    getData();


}