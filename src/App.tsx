import { useState } from 'react';
import Header from './layout/Header/Header';
import InputField from './components/InputField/InputField';
import TextArea from './components/TextArea/TextArea';
import style from './App.css';
import Button from './components/Button/Button';

function App() {
  const [value, setValue] = useState<string>("0 22 * * 1-5");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // let val = 0;

  const randomCronValues = () => {
    const valArr = ["0 2 * 1,2,3 1,5", "5 4 * * 0", "0 22 * * 1-5", "0 0 1,15 * 3", "5 0 * 8 *"];
    setValue(valArr[currentIndex]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % valArr.length);
  }

  return (
    <div style={style.container}>
      <Header/>
      <TextArea text={value} />
      <span style={{display: 'flex', flexDirection: 'row'}}>
        <InputField value={value} setValue={setValue}/>
        <Button callbackFunc={randomCronValues}/>
      </span>
    </div>
  )  
}

export default App
