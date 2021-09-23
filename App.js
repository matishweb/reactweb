// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" contact="TextUtilsContacts"/>    */}
      {/* <Navbar title="TextUtils" contact="TextUtilsContacts"/>    */}
      <Navbar />
      <div className="container my-3">
        <TextForm heading='Enter the text to analyze below' />
      </div>
    </>
  );
}

export default App;
