import { useState } from "react";
import CardGallery from "./components/CardGallery";
import FinalScreen from "./components/FinalScreen";

export default function App() {
  const [stage, setStage] = useState(1); // сразу открываем карточки для теста

  return (
    <div className="app">
      {stage === 1 && <CardGallery onFinish={() => setStage(2)} />}
      {stage === 2 && <FinalScreen />}
    </div>
  );
}
