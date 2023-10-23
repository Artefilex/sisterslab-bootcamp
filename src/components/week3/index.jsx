import CoinFlipper from "./CoinFiliper";
// import YaziTura from "./YaziTura";
import HamburgerApp from "./HamburgerMenu/index"

export default function Week3 (){

    return (
        <div  className="flex flex-col gap-24">
            <CoinFlipper/>
            <HamburgerApp/>
        </div>
    )
}