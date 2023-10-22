import Coin from "./Coin";
import { useState } from "react";
const options = ["yazi", "tura"];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};

export default function CoinFlipper() {
  const [currentStatus, setCurrentStatus] = useState(options[0]);
  const [results, setResults] = useState([]);
  const [rotate, setRotate] = useState(false);

  const start = () => {
    setRotate(true);
    const randomElement = getRandomElFromArr(options);
    setTimeout(() => {
      setCurrentStatus(randomElement);
      setResults([...results, randomElement]);
      setRotate(false);
    }, 1000);
  };

  const heads = results.filter((item) => item === options[0]).length;
  const tails = results.filter((item) => item === options[1]).length;

  return (
    <div className="flex items-center flex-col w-full">
      <h1 className="w-[80%] text-center text-[2rem] my-8 py-3 border-b-4 border-white">   Yazı Tura Uygulamısı  </h1>
      <div className="flex items-center flex-col w-full text-white tablet:flex-row gap-4  justify-around text-[1.6rem]">
        <div className="flex flex-col gap-4 ">
          <Coin currentStatus={currentStatus} rotate={rotate} />

          <button
            className="relative border-2 border-bg-green opacity-100 p-2 hover:opacity-70 bg-bg-green transition-opacity duration-200 rounded-2xl w-[12rem] font-bold text-[1.5rem] active:top-[2px]"
            onClick={start}
          >
            Atış Yap
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {results.length > 0 && !rotate && <h3 className="uppercase font-bold">{currentStatus} geldi</h3>}
          <p>
            Toplam <span className="font-extrabold">{results.length}</span> atış yapıldı
          </p>
          <p> <span className="font-extrabold">{heads}</span> kez <b>Yazı </b>geldi  </p>
          <p>
            <span className="font-extrabold">{tails}</span> kez <b>Tura </b>
            geldi
          </p>
        </div>
      </div>
    </div>
  );
}
