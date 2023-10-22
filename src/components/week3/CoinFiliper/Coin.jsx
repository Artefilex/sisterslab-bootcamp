
import CoinTail from './tail.png';
import CoinHead from './head.png';
const Coin = (props) => {
  const { currentStatus, rotate } = props;

  return (
    <div className="flex items-center w-full justify-center">
       
      <div className={` ${rotate && 'scale-0 duration-1000 transition-transform'}`}>
        <img
          src={CoinTail}
          alt=""
          className={currentStatus === 'yazi' ? 'hidden' : 'block'}
        />
        <img
          src={CoinHead}
          alt=""
          className={currentStatus === 'yazi' ? 'block' : 'hidden'}
        />
      </div>
    </div>
  );
};

export default Coin;