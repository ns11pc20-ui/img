// Login Error 
document.getElementById("login").addEventListener("click",()=>{
    alert("Repairing Server Database.Try Again Later...")
})
document.getElementById("login2").addEventListener("click",()=>{
    alert("Repairing Server Database.Try Again Later...")
})

// Nav Bar setting 
let dropdownbox = document.getElementById("dropdownbox");
dropdownbox.style.left="100%";
// Show dropdownbox
document.getElementById("dropdown").addEventListener("click", () => {
    if (dropdownbox.style.left == "100%") {
        dropdownbox.style.left = "0%";
    } else {
        dropdownbox.style.left = "100%";
    }
});
// Hide dropdownbox
document.getElementById("back").addEventListener("click", () => {
    if (dropdownbox.style.left == "0%") {
        dropdownbox.style.left = "100%";
    } else {
        dropdownbox.style.left = "0%";
    }
});

// Change img
let topimg=document.getElementById("topimg");
let a=1;
setInterval(()=>{
    if(a==1){
        topimg.src="top2.png";
        a=2;
    }else{
        topimg.src="top1.png";
        a=1;
    }
},5000);




// Download buttons, Like Button,  Save count
document.querySelectorAll(".downloadbox").forEach((btn, index) => {

    let downloadN = btn.querySelector(".downloadN");
    let key = "download_" + index;

    // Load saved count
    let count = localStorage.getItem(key) || 0;
    downloadN.innerHTML = count;

    btn.addEventListener("click", () => {

        // Download image
        let img = btn.parentElement.querySelector("img");

        let link = document.createElement("a");
        link.href = img.src;
        link.download = "";
        link.click();

        // Increase count
        count++;
        downloadN.innerHTML = count;

        // Save count
        localStorage.setItem(key, count);
    });
});

// Like buttons
document.querySelectorAll("#likebox").forEach((btn, index) => {

    let linkN = btn.querySelector(".linkN");
    let key = "like_" + index;

    // Load saved count
    let count = localStorage.getItem(key) || 0;
    linkN.innerHTML = count;

    btn.addEventListener("click", () => {

        count++;
        linkN.innerHTML = count;

        // Save count
        localStorage.setItem(key, count);
    });
});