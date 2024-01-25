//dashboard

let menuIcon = document.querySelector("#menu-icon");
let sideBar = document.querySelector("aside");
let overlay = document.querySelector(".overlay");




menuIcon.addEventListener("click", () => {
    sideBar.classList.add("active");
    overlay.classList.add("active");
})


document.onclick = (e) => {
	if(e.target.id !== "side-bar" && e.target.id !== "menu-icon"){
		sideBar.classList.remove("active");
		overlay.classList.remove("active");
		
	}
}




