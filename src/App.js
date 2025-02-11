import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from './Components/Navbar/Navbar';
import ColorList from './Components/ColorList/ColorList';
import Names from './Components/Names/Names';
import ColorSlider from './Components/ColorList/Slider/ColorSlider';
import ColorBox from './Components/ColorBox/ColorBox';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import MovieForm from './Components/LukasPage/movieForm';
import CircleClicker from './Components/CircleClicker/CircleClicker.jsx';
import NameForm from './Components/NameForm/Form'
import App21 from "./Components/App21/App21";
import AlexList from './Components/AlexList/AlexList';
import ColorClick from './Components/ColorClick/ColorClick';

//DCM(1a) -+ import {ColorList, ColorBox} from './Components/ComponentImportList';
//DCM(1b) -- The Code in comment 1a is an alternative way of importing all component pieces in fewer lines of code using the file ComponentImportList.js.

const Routes = {
  TicTacToe: 'Tic Tac Toe',
  Names: 'Jili',
  DakotaPage: 'Dakota',
  ColorBox: 'Damian',
  ColorSlider: 'Christopher',
  MovieForm: 'Lukas',
  CircleClicker: 'Dan',
  NameForm: 'Anthony',
  JacobApp21: "JacobApp21",
  AlexList: 'Alex',
  ColorClick: 'Frank',
};

export default function App() {
  const [route, setRoute] = useState(null);

  function setNewRoute(newRoute) {
    switch (newRoute) {
      case 'Names':
        return <Names />;
      case 'ColorSlider':
        return <ColorSlider />;
      case "TicTacToe":
        return <TicTacToe />;
      case "ColorBox":
        return <ColorBox />;
      case 'DakotaPage':
        return <DakotaPage />;
      case 'MovieForm':
        return <MovieForm />;
      case "JacobApp21":
        return <App21 />;
      case 'CircleClicker':
        return <CircleClicker/>;
      case 'NameForm':
        return <NameForm title='Yay React!' />;
      case 'AlexList':
        return <AlexList />;
      case 'ColorClick':
        return <ColorClick />; 
      default:
        <div />;
    }
  }

  return (
    <div>
      <Navbar setSelected={setRoute} routes={Routes} />
      {setNewRoute(route)}
    </div>
  );
}
