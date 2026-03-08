import confetti from "canvas-confetti"
import {useEffect} from "react"

export default function FinalScreen(){

useEffect(()=>{

confetti({
particleCount:200,
spread:100
})

},[])

return(

<div style={{
position:"absolute",
textAlign:"center",
fontSize:"32px",
lineHeight:"1.5",
animation:"fade 2s"
}}>

С 8 Марта, любимая ❤️  

<br/><br/>

Ты самое прекрасное  
что произошло в моей жизни 🌹

<br/><br/>

Я люблю тебя

</div>

)

}