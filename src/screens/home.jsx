import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Produtos from "../components/Produtos";
import Frase from "../components/Frase";
import Fooster from "../components/Footer";

function Home (){
    return (
        <>
           <Navbar/>
           <Hero/>
           <Produtos/>
           <Frase/>
           <Fooster/>

        </>
    );
}

export default Home;