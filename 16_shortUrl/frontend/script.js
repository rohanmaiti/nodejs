fetch("http://localhost:3000/url/getDetails")
.then((res)=>res.json())
.then(data=>{
    console.log(data);
    let tbody = document.querySelector("table tbody");
    data.forEach(obj=>{
        createTableRow(obj);
    })
})

function createTableRow(object){
    let tbody = document.querySelector("table tbody");
    const tr = document.createElement("tr");
    for (const key in object) {
        if(key == "shortId" ){
            let td = document.createElement("td");
            let a = document.createElement("a");
            a.setAttribute("target","_blank");
            a.innerText = "http://localhost:3000/url/"+object[key];
            a.href = "http://localhost:3000/url/"+object[key];
            td.appendChild(a);
            tr.appendChild(td);
        }
        else if( key == "reDirectedUrl"){
            let td = document.createElement("td");
            td.innerText = object[key];
            tr.appendChild(td);
        }
        else if(key=="visitHistory"){
            let td = document.createElement("td");
            td.innerText = object[key].length;
            tr.appendChild(td);
        }
       
    }
    tbody.append(tr);

}

document.querySelector("button").addEventListener("click",(req,res)=>{
    let originalUrl = document.querySelector("input").value.trim();
    
    fetch("http://localhost:3000/url",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({url:originalUrl})
    })
    .then(res=>res.text())
    .then(msg=>{
        alert(`<h1>your short url is ${msg}</h1>`)
    })
    .catch(err=>{
        alert(err.message);
    })
})