import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform'


function App() {
  return (
   <>
    <Navbar title='textCustom'/>
    <div className='container'>
      <Textform heading='Type your text here'/>
    </div>

   </>
  );
}

export default App;
