import AboutUs from "./AboutUs";
import Banner from "./Banner";
import GetShedule from "./GetShedule";



const HomePage = () => {
    return (
        <div  className="min-h-screen text-black">
            <Banner></Banner>
            <GetShedule></GetShedule>
            <AboutUs></AboutUs>
        </div>
    );
};

export default HomePage;