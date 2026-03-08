import {useEffect,useRef} from "react"

export default function RosePetals(){

const canvasRef=useRef()

useEffect(()=>{

const canvas=canvasRef.current
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

const petals=[]

for(let i=0;i<50;i++){

petals.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:6+Math.random()*6,
speed:0.3+Math.random()*0.7,
drift:Math.random()*1-0.5,
rotation:Math.random()*360
})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

petals.forEach(p=>{

ctx.save()

ctx.translate(p.x,p.y)
ctx.rotate(p.rotation)

ctx.fillStyle="#ff4d6d"
ctx.beginPath()
ctx.ellipse(0,0,p.size,p.size*0.6,0,0,Math.PI*2)
ctx.fill()

ctx.restore()

p.y+=p.speed
p.x+=p.drift
p.rotation+=0.01

if(p.y>canvas.height){
p.y=-10
p.x=Math.random()*canvas.width
}

})

requestAnimationFrame(draw)

}

draw()

},[])

return(

<canvas
ref={canvasRef}
style={{
position:"absolute",
top:0,
left:0,
pointerEvents:"none"
}}
/>

)

}