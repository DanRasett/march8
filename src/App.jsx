import {useState} from "react"
import BackgroundHearts from "./components/BackgroundHearts"
import RosePetals from "./components/RosePetals"
import Envelope3D from "./components/Envelope3D"
import CardGallery from "./components/CardGallery"
import FinalScreen from "./components/FinalScreen"
import "./styles/global.css"

export default function App(){

const[stage,setStage]=useState(0)

return(

<div className="app">

<BackgroundHearts/>
<RosePetals/>

{stage===0 &&

<Envelope3D
onOpen={()=>setStage(1)}
/>

}

{stage===1 &&

<CardGallery
onFinish={()=>setStage(2)}
/>

}

{stage===2 &&

<FinalScreen/>

}

</div>

)

}