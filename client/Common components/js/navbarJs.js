$(document).ready(function(){
	$('#navbar-icon').click(function(){
		$(this).toggleClass('open');
	});
});

const toggleBtn = document.getElementById("navbar-icon");
const sidebar = document.getElementById("sidebar-links");
toggleBtn.addEventListener("click", () => {
	// console.log(sidebar.style.translate);
	if(sidebar.style.translate === "none") {
		sidebar.style.translate = "100vw";
	} else{
		sidebar.style.translate = "none";
	}
})

window.addEventListener("resize", () => {
	if(parseInt(window.innerWidth) >= 845) {
		sidebar.style.translate = "100vw";
		toggleBtn.style.display = "none";
	}
	// else {
	// 	console.log("else block of resize if");	
	// 	sidebar.style.translate = "100vw";
	// 	toggleBtn.style.display = "block";
	// }
})

const sidebar_item = document.querySelectorAll(".sidebar-link-item");

sidebar_item.forEach(item => {
	item.addEventListener("click", () => {
		sidebar.style.translate = "100vw";
		document.getElementById("navbar-icon").classList.remove('open');
	})
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos > 150) {
	document.getElementById("navbar").style.backgroundColor = "black";
	}else{
	  document.getElementById("navbar").style.backgroundColor = "transparent";

  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

window.onload = () => {
	document.getElementById("navbar").style.top = "0";
}