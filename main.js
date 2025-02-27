const emailList = []
const olEl = document.querySelector(`.ol-element`)
//console.log(olEl);

const buttonEl = document.getElementById(`new-api-call`)
//console.log(buttonEl);

const checkboxEl = document.getElementById(`keep-generated`)
console.log(checkboxEl);

let keepEmails = false

checkboxEl.addEventListener('change', function () {
    keepEmails = !keepEmails
    console.log(`keep old emails: ${keepEmails}`);
})

buttonEl.addEventListener('click', getNewEmails)




console.log(emailList);

//functions
function getNewEmails(e) {
    e.preventDefault()
    buttonEl.disabled = true;
    if (keepEmails == false) {
        olEl.innerHTML = ''
    } else {
        olEl.innerHTML += `<hr class="border bg-warning">`
    }
    for (let i = 0; i < 10; i++) {
        fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(response => response.json())
            .then(data => {
                renderLiElement(data.response)
                emailList.push(data.response)
            })
            .catch(error => console.error(`Error:` + error))

    }
    buttonEl.disabled = false;
    console.log(keepEmails);
}
function renderLiElement(response) {
    const markup = `<li class="card">${response}</li>`

    olEl.innerHTML += markup
}

