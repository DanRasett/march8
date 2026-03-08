import "../styles/envelope.css"

export default function Envelope3D({onOpen}){

return(

<div className="envelope-wrapper" onClick={onOpen}>

<div className="envelope">

<div className="top"/>

<div className="body"/>

<div className="letter">

Нажми на меня  
любимая ❤️

</div>

</div>

</div>

)

}