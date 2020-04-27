import React from 'react';
import NavBar from './NavBar';



class ScoreBoard extends React.Component {


    render(){
        return (
            <div className="Scoreboard">
                <NavBar/>
                <br></br>
                 <h1>Your score was {this.props.characterForm.score}</h1>
                 <h1>Leaders!</h1>

                {this.props.highScores.map(character => <h2 key={character.id}>Name: {character.name} - Score: {character.score} </h2>)}
            </div>
          );
    }

}

export default ScoreBoard;
