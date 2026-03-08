import "../styles/hearts.css"

export default function BackgroundHearts(){

const hearts=Array.from({length:40})

return(

<div className="hearts">

{hearts.map((_,i)=>(

<div
key={i}
className="heart"
style={{
left:Math.random()*100+"%",
animationDelay:Math.random()*10+"s",
transform:`scale(${0.5+Math.random()})`
}}
/>

))}

</div>

)

}