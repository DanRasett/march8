import Polaroid from "./Polaroid"

export default function CardGallery({onFinish}){

const cards=[

{
photo:"/photos/photo1.jpg",
text:"Ты делаешь мою жизнь счастливой ❤️"
},

{
photo:"/photos/photo2.jpg",
text:"С тобой каждый момент особенный"
},

{
photo:"/photos/photo3.jpg",
text:"Ты моя любовь"
},

{
photo:"/photos/photo4.jpg",
text:"Самая красивая"
},

{
photo:"/photos/photo5.jpg",
text:"И самая любимая"
}

]

let opened=0

function handle(){

opened++

if(opened===cards.length){

setTimeout(onFinish,1000)

}

}

return(

<div style={{
display:"flex",
gap:"20px",
flexWrap:"wrap",
justifyContent:"center",
alignItems:"center"
}}>

{cards.map((c,i)=>(
<Polaroid
key={i}
photo={c.photo}
text={c.text}
onOpen={handle}
/>
))}

</div>

)

}