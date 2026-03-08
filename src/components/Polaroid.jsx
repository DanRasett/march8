import {useState} from "react"
import "../styles/polaroid.css"

export default function Polaroid({photo,text,onOpen}){

const[open,setOpen]=useState(false)

function handle(){

if(!open){
setOpen(true)
onOpen()
}

}

const angle=Math.random()*14-7

return(

<div
className={`polaroid ${open?"open":""}`}
style={{transform:`rotate(${angle}deg)`}}
onClick={handle}
>

{open?(
<>
<img src={photo}/>
<p>{text}</p>
</>
):(
<div className="cover">Нажми ❤️</div>
)}

</div>

)

}