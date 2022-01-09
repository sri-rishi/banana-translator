const btnTranslator = document.querySelector("#btn-translator");

const txtInput = document.querySelector("#txt-input");

const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json"

const getTranslationURL = text =>  `${serverURL}?text=${text}`;


const errorHandler = error => {
    console.log(`error occured, ${error}`);
    alert("something went wrong, please try after some time");
}

const clickHandler = () => {
    let inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>  {
        let translatedText = json.contents.translated;
        outputDiv.innerHTML = translatedText;
    })
    .catch(errorHandler)
}



btnTranslator.addEventListener("click", clickHandler);