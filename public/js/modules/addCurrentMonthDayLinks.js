export default()=>{const n=new Date,t=(n.getDay(),n.toLocaleString("default",{month:"long"})),e=`\n    <a href="#month-${t}" class="btn btn-outline-secondary">${t}</a>\n  `;document.getElementById("quicklinks").innerHTML+=e};//# sourceMappingURL=addCurrentMonthDayLinks.js.map
