import React from 'react';
import { useNavigate } from 'react-router-dom';
import Homed from './Homed';
import Homea from './Homea';
import Homeb from './Homeb';
import Homec from './Homec';


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Homea />
      <Homeb />
      <Homec />
      <Homed />
    </div>
  );
}

export default Home;