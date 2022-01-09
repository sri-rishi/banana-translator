var btnTranslator = document.querySelector("#btn-translator");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

const getTranslationURL = text => {
    return `${serverURL}?text=${text}`;
}

function errorHandler(error) {
    console.log(`error occured, ${error}`);
    alert("something went wrong, please try after some time");
}

const clickHandler = () => {
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>  {
        var translatedText = json.contents.translated;
        outputDiv.innerHTML = translatedText;
    })
    .catch(errorHandler)
}



btnTranslator.addEventListener("click", clickHandler);