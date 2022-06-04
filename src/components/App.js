import React from 'react'; //import React library
import NavBar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar/>

      <main>
        <p>You're viewing the Eastside Dog home page</p>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
