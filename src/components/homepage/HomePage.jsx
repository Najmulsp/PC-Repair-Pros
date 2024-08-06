import AboutUs from "./AboutUs";
import Banner from "./Banner";
import GetShedule from "./GetShedule";
import Services from "./Services";
import WhyChoose from "./WhyChoose";



const HomePage = () => {
    return (
        <div  className="min-h-screen text-black">
            <Banner></Banner>
            <GetShedule></GetShedule>
            <AboutUs></AboutUs>
            <WhyChoose></WhyChoose>
            <Services></Services>
        </div>
    );
};

export default HomePage;