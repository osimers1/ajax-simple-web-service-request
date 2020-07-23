function reponse(data) {
    if(data === null || data === "undefied"){
        document.getElementById("quote").innerHTML = "sorry error";
    }
    else{
        document.getElementById("image").src = data.photo;
        document.getElementById("quote").innerHTML = data.quote;
        document.getElementById("author").innerHTML = data.author;
    }
    console.log(data);
}

fetch("https://thatsthespir.it/api")
    .then(resulta => resulta.json())
    .then(data => reponse(data));