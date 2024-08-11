import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blog from "./Blog";
import Gallery from "./Gallery";
import GetShedule from "./GetShedule";
import Services from "./Services";
import Testimonial from "./Testimonial";
import WhyChoose from "./WhyChoose";



const HomePage = () => {
    return (
        <div  className="min-h-screen text-black">
            <Banner></Banner>
            <Services></Services>.
            <GetShedule></GetShedule>
            <AboutUs></AboutUs>
            <WhyChoose></WhyChoose>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default HomePage;