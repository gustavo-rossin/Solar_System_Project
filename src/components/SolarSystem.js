import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planeta) => (<PlanetCard
          key={ planeta.name }
          planetName={ planeta.name }
          planetImage={ planeta.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
