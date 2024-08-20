import { useState } from 'react';
import Header from './layout/Header/Header';
import InputField from './components/InputField/InputField';
import TextArea from './components/TextArea/TextArea';
import style from './App.css';
import Button from './components/Button/Button';
import Footer from './layout/Footer/Footer';

function App() {
  const [value, setValue] = useState<string>("0 22 * * 1-5");
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <div style={style.container}>
      <Header/>
      <TextArea text={value} hasError={hasError}/>
      <span style={{display: 'flex', flexDirection: 'row'}}>
        <InputField value={value} setValue={setValue} setHasError={setHasError} hasError={hasError}/>
        <Button callbackFunc={setValue}/>
      </span>
      <Footer/>
    </div>
  )  
}

export default App
