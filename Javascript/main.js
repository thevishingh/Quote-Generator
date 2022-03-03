// Variables Declarations 
const qutoeText = document.querySelector('.quote');
qutoeBtn = document.querySelector("button");
authorName = document.querySelector(".author .name");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");


function randoQutoe() {
    // console.log("clicked");
    // Adding class to the button by js 
    qutoeBtn.classList.add("loading");
    qutoeBtn.innerText = "Loading Qutoe"
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        qutoeText.innerText = result.content;
        authorName.innerText = result.author;
        qutoeBtn.innerText = "New Qutoe"
        qutoeBtn.classList.remove("loading");


    });
}
//  for sound
soundBtn.addEventListener("click", () => {
    // SpeechSynthesisUtterance is a web Api which represent a speach request 
    let utterance = new SpeechSynthesisUtterance(`${qutoeText.innerText}by ${authorName.innerText}`);
    speechSynthesis.speak(utterance)
});
// for copying text
copyBtn.addEventListener("click", () => {
    // navigator.clipboard.writeText() this use to specified text string to system clipboards
 navigator.clipboard.writeText(qutoeText.innerText)
})
// for Twitter 
twitterBtn.addEventListener("click", () => {
   let tweetUrl = `https://twitter.com/compose/tweet?url=${qutoeText.innerText}`
   window.open(tweetUrl, "_blank");
})








qutoeBtn.addEventListener("click", randoQutoe);