async function check(){

let url = document.getElementById("url").value

let res = await fetch("http://127.0.0.1:8000/check",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({url})
})

let data = await res.json()

document.getElementById("result").innerText = data.result

}
