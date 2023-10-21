import { useState } from "react";

function YaziTura() {
  const [currentStatus, setCurrentStatus] = useState("yazi");
  const [yazi, setYazi] = useState(0);
  const [tura, setTura] = useState(0);
  const handleClick = () => {
    const randomCount = Math.floor(Math.random() * 2);

    if (randomCount === 0) {
      setTura(tura + 1);
      setCurrentStatus("tura");
    } else {
      setYazi(yazi + 1);
      setCurrentStatus("yazi");
    }
  };
  return (
    <div className="flex">
      <button onClick={handleClick}> Atış Yap </button>
      <div>toplam {yazi + tura} atış yapıldı </div>
      <br />
      {yazi} kez yazı geldi
      <br />
      <div> {tura} kez yazı geldi</div>
    </div>
  );
}

export default YaziTura;
