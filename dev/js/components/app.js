import React from 'react';
import MainComponent from '../components/main-component'
import Header from '../components/header'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../../scss/style.scss';

const App = () => (
     <div>
         <Header/>
         <MainComponent/>
         <Footer/>
     </div>
);

export default App;