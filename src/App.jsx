// import { useState } from 'react'
import './App.css';
import UserPanel from './components/UserPanel';
import PreviewPanel from './components/PreviewPanel';
import { useState } from 'react';

function App() {
  //states
  const [previewState, setPreviewState] = useState(JSON.parse(localStorage.getItem('CVDataJson')));

  //evaluate which setState ti call (?? maybe later)
  function updatePreviewState() {
    setPreviewState(JSON.parse(localStorage.getItem('CVDataJson')));
  }

  return (
    <div className='app'>
      <UserPanel updatePreviewState={updatePreviewState} />
      <PreviewPanel state={previewState}/>
    </div>
  )
}

export default App
