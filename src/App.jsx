import React, { useEffect } from "react";
import {BrowserRouter,Routes,Route,useLocation,} from "react-router-dom";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Home from "../HOME PAGES/Home";
import AboutHero from "../HOME PAGES/About";
import Services from "../HOME PAGES/Services";
import Contact from "../HOME PAGES/Contact";
import Tajweed from "../HOME PAGES/Tajweed";
import Hifz from "../HOME PAGES/Hifz";
import TranslationTafseer from "../HOME PAGES/TranslationTafseer";
import Fee from "../HOME PAGES/Fee";
import Teacher from "../HOME PAGES/Teacher";
import Namaz from "../HOME PAGES/Courses/Namaz";
import BasicIslamicKnowledge from "../HOME PAGES/Courses/Basic Knowledge";
import QuranicScience from '../HOME PAGES/Courses/Obligatory Page';
import NoraniQaida from '../HOME PAGES/Courses/Norani Qaida';
import MadaniQaida from '../HOME PAGES/Courses/Madani Qaida';
import NazraQuran from '../HOME PAGES/Courses/Nazra Quran';
import QuranMemorization from '../HOME PAGES/Courses/Quran Memorization';
import QuranInterpretation from '../HOME PAGES/Courses/Quran Interpretation';
import FreeTrial from '../HOME PAGES/FreeTrial';

const ScrollToTop = () => {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [pathname]);

  return null;
};
const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<AboutHero />}/>
        <Route path="/services"element={<Services />} />
        <Route path="/tajweed" element={<Tajweed />}/>
        <Route path="/Hifz" element={<Hifz />}/>
        <Route path="/TranslationTafseer"element={<TranslationTafseer />}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Fee" element={<Fee />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Namaz" element={<Namaz />} />
        <Route path="/BasicIslamicKnowledge" element={<BasicIslamicKnowledge />} />
        <Route path="/QuranicScience" element={<QuranicScience /> } />
        <Route path="/NoraniQaida" element={<NoraniQaida />} />
        <Route path='/MadaniQaida' element={<MadaniQaida />}  />
        <Route path="/NazraQuran" element={<NazraQuran />} />
        <Route path="/QuranMemorization" element={<QuranMemorization />} />
        <Route path="/QuranInterpretation" element={<QuranInterpretation />} /> 
        <Route path="/FreeTrial" element={<FreeTrial />} />

      </Routes>


      <Footer />

    </BrowserRouter>
  );
};


export default App;