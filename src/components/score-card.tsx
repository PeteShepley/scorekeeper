import React from 'react';
import { TeamName } from './team-name';

export function ScoreCard(props: any) {

  const [teamName, setTeamName] = React.useState(props.teamName);
  const [scores, updateScores] = React.useState([]);

  let total = 0;
  let elements: any[] = [];
  let count = 1;

  scores.forEach((score: number) => {
    if (total > 0) {
      elements.push(<div key={count++} className="plus-score"> + {score}</div>);
      elements.push(<div key={count++} className="total">{total + score}</div>);
    } else {
      elements.push(<div key={count++} className="score">{score}</div>);
    }
    total += score;
  });

  function handleChange(event: any) {
    if (event.key === 'Enter') {
      let newScores: any = [...scores];
      newScores.push(parseInt(event.target.value, 10));
      updateScores(newScores);
      event.target.value = '';
      props.toggleFocus();
    }
  }

  return (
      <div className="score-card">
        <TeamName name={teamName} onNameChange={(name: string) => setTeamName(name)}/>
        {elements}
        <input type="number" onKeyUp={(e: any) => handleChange(e)}/>
      </div>
  );
}
