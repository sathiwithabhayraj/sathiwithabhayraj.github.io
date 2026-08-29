document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{const t=document.querySelector(link.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'})}));
