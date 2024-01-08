const querytext = document.querySelector(".quote");
const authorname = document.querySelector(".author .name");
const button = document.querySelector("button");
const sound = document.querySelector(".sound");
const copy = document.querySelector(".copy");
function randomQuote(){
    button.classList.add("loading");
    button.innerText="Loading.....";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log("result");
        querytext.innerHTML = result.content;
        authorname.innerHTML = result.author;
        button.innerHTML = "New Quote";
        button.classList.remove("loading")
        
    });
}
sound.addEventListener("click", ()=>{
    let a = new SpeechSynthesisUtterance(`${querytext.innerHTML} by ${authorname.innerHTML}`);
    speechSynthesis.speak(a);
});
copy.addEventListener("click",() =>{
    navigator.clipboard.writeText(querytext.innerHTML)
});
button.addEventListener("click",randomQuote);