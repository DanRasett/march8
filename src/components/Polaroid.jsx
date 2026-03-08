import { useState } from "react";
import "../styles/polaroid.css";

export default function Polaroid({ photo, text, onOpen }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (!open) {
      setOpen(true);
      onOpen?.();
    }
  }

  // Случайный наклон -7° до 7°
  const angle = Math.random() * 14 - 7;

  return (
    <div
      className={`polaroid ${open ? "open" : ""}`}
      style={{ transform: `rotate(${angle}deg)` }}
      onClick={handleClick}
    >
      {open ? (
        <>
          <img src={photo} alt="Фото" />
          <p>{text}</p>
        </>
      ) : (
        <div className="cover">Нажми ❤️</div>
      )}
    </div>
  );
}
