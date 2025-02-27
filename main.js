const emailList = []
const olEl = document.querySelector(`.ol-element`)
//console.log(olEl);

const buttonEl = document.getElementById(`new-api-call`)
//console.log(buttonEl);

const checkboxEl = document.getElementById(`keep-generated`)
//console.log(checkboxEl);

let keepEmails = false

checkboxEl.addEventListener('change', function () {
    keepEmails = !keepEmails
    console.log(`keep old emails: ${keepEmails}`);
})

buttonEl.addEventListener('click', getNewEmails)



//functions

async function getNewEmails(e) {
    e.preventDefault();
    buttonEl.disabled = true;

    if (keepEmails == false) {
        olEl.innerHTML = '';
    } else {
        olEl.innerHTML += `<hr class="border bg-warning">`;
    }
    const fetchPromises = [];
    for (let i = 0; i < 10; i++) {
        const fetchPromise = fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(response => response.json())
            .then(data => {
                renderLiElement(data.response);
                emailList.push(data.response);
            })
            .catch(error => console.error(`Error:` + error));
        fetchPromises.push(fetchPromise);
    }
    await Promise.all(fetchPromises);
    enableButton();
    console.log(keepEmails);
}


function renderLiElement(response) {
    const markup = `<li class="card">${response}</li>`

    olEl.innerHTML += markup
}

function enableButton() {
    buttonEl.disabled = false;
}

