import React from 'react';
import NavBar from './NavBar'
import { Link } from "react-router-dom";


class StartScreen extends React.Component {


    state = {
        instructions: false, 
    }

   
    ///show instructions if button is pressed 
    showInstructions = () => {
        this.setState({
            instructions: !this.state.instructions
        })
    }


    render(){
        return (
     
            <div className="StartScreen">
            <NavBar/>
            <br></br>
                <div>
                    Begin Your Corona Quest!
                    <br></br>
                        <button onClick={this.showInstructions}>
                            Instructions
                        </button>
                    <div>
                    {this.state.instructions ?       
                            
                            "How to Play: Move your character around the map to discover hidden treasures, but be wary of the Corona out to get you!" +
                            "    " + 
                            "a - to move left" +
                            "d - to move right " +
                           " w - to move up" +
                            "x - to move down" + 
                            "q - diagonally up / left" + 
                            "r - diagonally up / right" +
                            "z - diagonally down / left" +
                            "c - diagonally down / right" : null}

                    </div>
                    <br></br>
                </div>
    
                {/* Choose Your Character! 
                <select>
                    {this.state.characters.map(character => <option key={character.id}>Name: {character.name} - Strength: {character.strength} - HP: {character.hp} </option>)}
                </select>
                <br></br>
                <br></br>
                <br></br> */}

                Create a New Character! 
                <form >
                    <label>
                        Name:
                        <input onChange={this.props.handleNewCharacter}
                        value={this.props.characterForm.name} 
                        type="text" name="name" />
                    </label>
                    <button onClick={(event) => this.props.createNewCharacter(event)}><div><Link to="/game">Start Your Quest!</Link></div></button>
                </form>

                
            </div>
        
         
      );
    }
  
}
export default StartScreen;
