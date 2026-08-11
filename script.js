document.getElementById("year").textContent=new Date().getFullYear();
const r=document.querySelectorAll(".review");let i=0;
setInterval(()=>{r[i].classList.remove("active");i=(i+1)%r.length;r[i].classList.add("active")},5000);
function consultation(){alert("Your Google Form link will be connected here.");return false;}
