import React from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ScoreCard } from './components/score-card';
import './styles/app.scss';

export function App() {
  const [teams, updateTeams] = React.useState([
    {
      id: 1,
      name: 'Team 1'
    },
    {
      id: 2,
      name: 'Team 2'
    }
  ]);

  function addPlayer() {
    let count = teams.length;

    if (count < 7) {
      updateTeams(teams.concat([{id: (count + 1), name: 'Team ' + (count + 1)}]));
    }
  }

  function removePlayer() {
    if (teams.length > 2) {
      updateTeams(teams.slice(0, -1));
    }
  }

  function toggleFocus() {
  }

  let scoreCards = teams.map((team: any) => {
    return (<ScoreCard key={team.id} teamName={team.name} toggleFocus={() => toggleFocus()}/>);
  });

  return (
      <div className="application-container">
        <header>
          <Header addPlayer={() => addPlayer()} removePlayer={() => removePlayer()}/>
        </header>
        <main>
          <div className="score-cards">
            {scoreCards}
          </div>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
  );
}
