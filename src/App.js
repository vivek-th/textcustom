import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/textform'


function App() {
  return (
   <>
    <Navbar title='textCustom'/>
    <Alert/>
    <div className='container'>
      <Textform heading='Type your text here'/>
    </div>

   </>
  );
}

export default App;
