import React, { useState } from "react";

function UrlChecker() {

const [url,setUrl] = useState("")
const [result,setResult] = useState("")

const checkUrl = async () => {

const res = await fetch("http://127.0.0.1:8000/check",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({url})
})

const data = await res.json()
setResult(data.result)

}

return(
<div>
<input
placeholder="Enter URL"
value={url}
onChange={(e)=>setUrl(e.target.value)}
/>

<button onClick={checkUrl}>Check</button>

<h2>{result}</h2>
</div>
)

}

export default UrlChecker
