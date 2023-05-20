import AllToys from "../AllToys/AllToys";
import Banner from "../Banner/Banner";
import BestSellToy from "../BestSellToy/BestSellToy";
import CarousalView from "../CarousalView/CarousalView";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import useTitle from "../hooks/useTitle";


const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <CarousalView></CarousalView>
            <BestSellToy></BestSellToy>
        </div>
    );
};

export default Home;