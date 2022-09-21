import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missao) => (<MissionCard
          key={ missao.name }
          name={ missao.name }
          year={ missao.year }
          country={ missao.country }
          destination={ missao.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
