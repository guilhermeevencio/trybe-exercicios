const state = document.getElementById('state');
// let inputs = {
//     name: {
//         maxlength: 40,
//         required: true,
//     },
//     email: {
//         maxlength: 50,
//         required: true,
//     },
//     cpf: {
//         maxlength: 11,
//         required: true,
//     },
//     adress: {
//         maxlength: 200,
//         required: true,
//     },
//     city: {
//         maxlength: 28,
//         required: true,
//     },
//     state: {
//         type: 'select',
//         required: true,
//     },
//     home: {
//         type: 'radio',
//         required: true,
//     },
//     resumee: {
//         maxlength: 1000,
//         required: true,
//     },
//     job: {
//         maxlength: 40,
//         required: true,
//     },
//     description: {
//         maxlength: 500,
//         required: true,
//     },
//     start: {
//         type: 'date',
//         required: true,
//     },  
// }



function createOption (e) {
    
    for (let i = 0; i < e.length; i += 1) {
    let opt = document.createElement('option');
    opt.innerText = e[i];
    state.appendChild(opt)
    }
}


// function manipularSubmits(event){
// event.preventDefault()
// // validate();
// }

//validar os dados

// function validate() {
//     for (let i in inputs) {
//         let query = `[name=${i}]`;
//         let item = document.querySelector(query);
//         if (item.value !== null) {
//             let content = document.createElement('div');
//             document.body.appendChild(content);
//             let p = document.createElement('p');
//             p.innerText = item.value;
//             content.appendChild(p);
//         } else {
//     window.alert('Preencha os dados!');
//         }
//     }
// }

window.onload = function() {
//     const button = document.getElementById('button-submit');
//     button.addEventListener('click', manipularSubmits);

     createOption(['AM', 'PI', 'PE', 'PA']);

}
const validate = new window.JustValidate('#form');
window.JustValidate;