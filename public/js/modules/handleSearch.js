export default e=>{const t=document.getElementById("search-input"),n=[...document.getElementsByClassName("result-item")],l=[...document.getElementsByClassName("result-section")];t.addEventListener("input",(e=>{[...document.querySelectorAll(".result-section.d-none, .result-item.d-none")].forEach((e=>e.classList.remove("d-none"))),t.value&&t.value.trim().length>0?(window.history.replaceState(null,null,`?search=${encodeURIComponent(t.value)}`),n.forEach((e=>{e.innerText&&t.value&&e.innerText.trim()&&t.value.trim()&&!e.innerText.toLowerCase().includes(t.value.toLowerCase())&&e.classList.add("d-none")})),l.forEach((e=>{0===[...e.querySelectorAll(".result-item")].filter((e=>!e.classList.contains("d-none")&&!e.innerText.includes("No events."))).length&&e.classList.add("d-none")}))):window.history.replaceState(null,null,"/")}));const s=new URLSearchParams(window.location.search).get("search");s&&(t.value=s,t.dispatchEvent(new Event("input")))};//# sourceMappingURL=handleSearch.js.map
