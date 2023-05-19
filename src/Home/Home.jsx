import AllToys from "../AllToys/AllToys";
import Banner from "../Banner/Banner";
import CarousalView from "../CarousalView/CarousalView";
import Gallery from "../Gallery/Gallery";
import useTitle from "../hooks/useTitle";


const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CarousalView></CarousalView>
        </div>
    );
};

export default Home;