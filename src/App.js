import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Footer from './components/Footer';

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';


function App() {

const {contextSafe} = useGSAP();
gsap.registerPlugin(ScrollTrigger);

useGSAP(()=>{
  gsap.to('.navbar',{
    
    backgroundColor:'#161D29',
    duration:0.5,

    scrollTrigger:{
      trigger:'.div1',
      // markers:true,
      scroller:'body',
      start:'top 10%',
      toggleActions: 'play none none reverse',
      // scrub:true

    }

  })
})

  return (
    <div >
      <Navbar></Navbar>
       <Home></Home>
       <Section1></Section1>
       <Section2></Section2>
       <Section3></Section3>
       <Section4></Section4>
       <Section5></Section5>
       <Section6></Section6>
       <Section7></Section7>
       <Section8></Section8>
       <Footer></Footer>
    </div>
  );
}

export default App;
