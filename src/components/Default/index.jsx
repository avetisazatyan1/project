import Sections from "../../components/Sections";
import { Route, Routes } from "react-router-dom";
import Objective from "../../pages/Objective";
import Plan from "../../pages/Plan";

const DefaultLayout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Sections/>}/>
                <Route path="/objectives" element={<Objective/>}/>
                <Route path="/plan" element={<Plan/>}/> 
            </Routes>
        </>
    );
}

export default DefaultLayout;