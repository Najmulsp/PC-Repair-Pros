import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blog from "./Blog";
import BookShedule from "./BookShedule";
import Gallery from "./Gallery";
import GetShedule from "./GetShedule";
import Partners from "./Partners";
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
            <BookShedule></BookShedule>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Partners></Partners>
        </div>
    );
};

export default HomePage;