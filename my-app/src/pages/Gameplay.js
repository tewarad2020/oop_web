import React from "react";
import { useNavigate } from "react-router-dom";

// css import
import style from '../CSS/gameplay.module.css'

function Gameplay() {

  let navigate = useNavigate()

    return (
      <div>
        <h1 className={ style.test }>Gameplay</h1> 
        <button onClick={() => navigate('/')}>go home </button>
      </div>
    );
  }
  
  export default Gameplay;