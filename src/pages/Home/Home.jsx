import React from 'react';
import Goo from 'gooey-react';


const Home = () => {
  return (
    <section className="home">
      <Goo intensity="strong">
        <svg width="192" height="192">
          <g style={{ animation: 'left 5s linear infinite' }}>
            <circle style={{ animation: 'right 2s linear infinite' }} cx="34%" cy="37%" fill="orchid" r="32" />
            <circle cx="63%" cy="63%" fill="mediumorchid" r="32" />
          </g>
        </svg>
      </Goo>
    </section>
  );
};

export default Home;