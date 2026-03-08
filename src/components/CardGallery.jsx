import Polaroid from "./Polaroid";

export default function CardGallery({ onFinish }) {
  const cards = [
    { photo: "/photos/photo1.png", text: "Ты делаешь мою жизнь счастливой ❤️" },
    { photo: "/photos/photo2.png", text: "С тобой каждый момент особенный" },
    { photo: "/photos/photo3.png", text: "Ты моя любовь" },
    { photo: "/photos/photo4.png", text: "Самая красивая" },
    { photo: "/photos/photo5.png", text: "И самая любимая" },
  ];

  let opened = 0;

  function handleOpen() {
    opened++;
    if (opened === cards.length) {
      setTimeout(onFinish, 500);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {cards.map((c, i) => (
        <Polaroid
          key={i}
          photo={c.photo}
          text={c.text}
          onOpen={handleOpen}
        />
      ))}
    </div>
  );
}
