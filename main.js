addEventListener("submit", async(e)=>{
    e.preventDefault();
    let peticion = await fetch(e.target.action, {method: e.target.method, body:JSON.stringify(Object.fromEntries(new FormData(e.target)))});
    document.querySelector("pre").innerHTML = await peticion.text();
})