import HeroSection from "../components/home/HeroSection";
import AboutClinic from "../components/home/AboutClinic";
import WhyChooseUs from "../components/home/WhyChooseUs";

// import ServicesList from "../components/services/ServicesList";
import Reviews from "../components/reviews/Reviews";
// import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Clinic */}
      <AboutClinic />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services */}
      {/* <ServicesList /> */}

      {/* Patient Reviews */}
      <Reviews />

      {/* Testimonials */}
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
