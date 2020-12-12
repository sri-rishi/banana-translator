var btnTranslator = document.querySelector("#btn-translator");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


//  var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL+"?"+"text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong, please try after some time");
}

function clickHandler() {
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