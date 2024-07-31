// function trans() {
//     const sec = document.querySelector(".s1");
//     sec.style.transform = "translateY(150px)"
// }
function tapopen(){
    const list = document.querySelector(".list")
    const unicode1 = document.querySelector(".unicode1")
    const unicode2 = document.querySelector(".unicode2")
    list.classList.toggle('scroll')
    unicode1.classList.toggle('hidtg')
    unicode2.classList.toggle('newtg')
}

const shortbtn = async() =>{
    const baseurl = "https://shorturl-ovln.onrender.com/api/v1/shorturl";
    const shortbtn = document.querySelector(".shortbtn");
    const input = document.querySelector(".input").value;
    shortbtn.textContent = "Shortling..."
    const response = await fetch(baseurl, {
        headers:{
            "content-type":"application/json",
        },
        method: "POST",
        body: JSON.stringify({url: input})
    });
    if(!input){
        alert("Past your url for shortling")
    }
    if(response.ok){
        shortbtn.textContent = "Shorten It!"
        
        const responseData = await response.json();
        
        const urltag = document.querySelector(".urltag");
        urltag.href = responseData.shorturl;
        urltag.innerHTML = responseData.shorturl;
    }


}    