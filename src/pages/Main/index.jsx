import DefaultLayout from "../../components/Default";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ContactUs from "../../components/Sections/ContactUs";

const Main = () => {
    return (
        <div className="App">
            <Header/>
            <DefaultLayout/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

export default Main;
