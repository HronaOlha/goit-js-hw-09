const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled&&(e.disabled=!1);d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled&&(t.disabled=!1);clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.e4113e44.js.map
