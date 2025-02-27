const emailList = []
const olEl = document.querySelector(`.ol-element`)
//console.log(olEl);

for (let i = 0; i < 10; i++) {
    fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then(response => response.json())
        .then(data => {
            renderLiElement(data.response)
            emailList.push(data.response)
        }
        )
        .catch(error => console.error(`Error:` + error))

}


console.log(emailList);

//functions

function renderLiElement(response) {
    const markup = `<li>${response}</li>`

    olEl.innerHTML += markup
}

