const state = document.getElementById('state');

function createOption (e) {
    
    for (let i = 0; i < e.length; i += 1) {
    let opt = document.createElement('option');
    opt.innerText = e[i];
    state.appendChild(opt)
    }
}

createOption(['AM', 'PI', 'PE', 'PA']);