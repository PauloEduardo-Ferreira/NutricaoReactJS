import React from 'react';
import { Header, About, Services, Contact, Footer } from '../src/components'; // Importando os componentes

const App = () => {
    return (
        <div className='app'>
            <Header />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default App