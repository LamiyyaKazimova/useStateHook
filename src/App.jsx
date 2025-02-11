import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState('')
  const[name,nameValue]=useState('')
  const[surname,surnameValue]=useState('')
  const [email,emailValue]=useState('')


  const [isNameAdded,setIsNameAdded]=useState(false)
  const [isSurnameAdded,setIsSurnameAdded]=useState(false)
  const [isEmailAdded,setIsEmailAdded]=useState(false)

  function handleClick(e){
    setValue(e.target.value)
  }

  function nameClick(){
    nameValue(value)
    setIsNameAdded(true)
    setValue('')
  }

  function surnameClick(){
    surnameValue(value)
    setIsSurnameAdded(true)
    setValue('')
  }

  function emailClick(){
    emailValue(value)
    setIsEmailAdded(true)
    setValue('')
  }



  return (
    <div className="App">
    <input value={value} onChange={handleClick}  type="text"  placeholder="Ad, soyad, email daxil edin"/>
    <button onClick={nameClick}>Adı əlavə et</button>
    <button onClick={surnameClick}>Soyadı əlavə et</button>
    <button onClick={emailClick}>Emaili əlavə et</button>


    {isNameAdded &&<p>Ad:{name}</p>}
    {isSurnameAdded && <p>Soyad:{surname}</p>}
    {isEmailAdded && <p>Email:{email}</p>} 
    </div>
  );
}

export default App;




