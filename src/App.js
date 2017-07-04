import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <div className="image"></div>
          <h1>(Moose) Farkle Score Keeper</h1>
          <div className="actions">
            <button onClick={this.props.addPlayer}>Add Player</button>
            <button onClick={this.props.removePlayer}>Remove Player</button>
          </div>
        </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
        <div className="footer">This trivial app was created by Peter Shepley</div>
    );
  }
}

class TeamName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  handleDoubleClick() {
    this.setState({
      editMode: true
    });
  }

  handleChange(event) {
    if (event.key === 'Enter') {
      this.props.onNameChange(event.target.value);
      this.setState({
        editMode: false
      });
    }
  }

  render() {
    if (this.state.editMode) {
      return (<input autoFocus defaultValue={this.props.name} onKeyUp={(e) => this.handleChange(e)}/>);
    } else {
      return (<div className="team-name" onDoubleClick={(e) => this.handleDoubleClick(e)}>{this.props.name}</div>)
    }
  }
}

class ScoreCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teamName: this.props.teamName,
      scores: []
    };
  }

  handleChange(event) {
    if (event.key === 'Enter') {
      this.setState({
        scores: this.state.scores.concat([parseInt(event.target.value, 10)])
      });
      event.target.value = '';
      this.props.toggleFocus();
    }
  }

  updateName(name) {
    this.setState({
      teamName: name
    });
  }

  render() {

    let total = 0;
    let elements = [];
    let count = 1;
    this.state.scores.forEach((score) => {

      if (total > 0) {
        elements.push(<div key={count++} className="plus-score"> + {score}</div>);
        elements.push(<div key={count++} className="total">{total + score}</div>);
      } else {
        elements.push(<div key={count++} className="score">{score}</div>);
      }
      total += score;
    });

    return (
        <div className="score-card">
          <TeamName name={this.state.teamName} onNameChange={(name) => this.updateName(name)}/>
          {elements}
          <input type="number" onKeyUp={(e) => this.handleChange(e)}/>
        </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 1,
          name: 'Team 1'
        },
        {
          id: 2,
          name: 'Team 2'
        }
      ]
    };
  }

  addPlayer() {
    let teams = this.state.teams;
    let count = teams.length;

    if (count < 7) {
      this.setState({
        teams: teams.concat([{key: (count + 1), name: 'Team ' + (count + 1)}])
      });
    }
  }

  removePlayer() {
    let teams = this.state.teams;
    let count = teams.length;

    if (count > 2) {
      this.setState({
        teams: teams.slice(0, -1)
      });
    }
  }

  toggleFocus() {

  }

  render() {

    let scoreCards = this.state.teams.map((team) => {
      return (<ScoreCard key={this.id} teamName={team.name} toggleFocus={() => this.toggleFocus()}/>);
    });

    return (
        <div className="application-container">
          <Header addPlayer={() => this.addPlayer()} removePlayer={() => this.removePlayer()}/>
          <div className="score-cards">
            {scoreCards}
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;
