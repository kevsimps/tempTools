function vidPop(id){
    video = new CustomEvent("vidPop",{bubbles: true, composed: true, detail: id })
    document.body.dispatchEvent(video)
    }
// function slash(){
//     Array.from(document.querySelector("wxcc-guide-panel").shadowRoot.querySelectorAll("textarea")).forEach((element) => {element.value = element.value.replaceAll("\\",""); console.log(element.value)})
// }