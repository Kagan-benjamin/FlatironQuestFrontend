import React from 'react';
import Cell from './components/Cell.js'
import Tree from './components/Tree.js'
import Rock from  './components/Rock.js'
import Treasure from './components/Treasure.js'
import Exit from './components/Exit.js'
import Enemy from './components/Enemy.js'
import './styling/Game.css';
import treesList from './resources/treesList.js'
import rocksList from './resources/rocksList.js'
import treasuresList from './resources/treasuresList.js'
import exitsList from './resources/exitsList.js'
import {enemy1} from './resources/enemyList1.js'
import {enemy2} from './resources/enemyList1.js'
import {enemy3} from './resources/enemyList1.js'
import {enemy4} from './resources/enemyList1.js'
import {enemy5} from './resources/enemyList1.js'
import NavBar from './NavBar.js';


// Specs for map + grid size, values below for wireframe map size
const CELL_SIZE = 45; // 45
const WIDTH = 495;    // 495
const HEIGHT = 585;   // 585
//                    //

class Game extends React.Component {

    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }
    
    state = {
        cells: [ {x: 5, y: 5} ],  // Player Character starting location  // REMOVE ARRAY
        points: 0,
        obstacles: treesList,  
        rocks: rocksList,
        treasures: treasuresList, 
        exits: exitsList,  
        enemy1: enemy1,
        enemy2: enemy2,
        enemy3: enemy3,
        enemy4: enemy4,
        enemy5: enemy5,
        enemy1Loc: 0,
        enemy2Loc: 0,
        enemy3Loc: 0,
        enemy4Loc: 0,
        enemy5Loc: 0,
        characterName: '',
        characterHP: 0,
        message: ''
    }
    // sets current character form 
    componentDidMount(){
        this.setState({
            characterName: this.props.characterForm.name,
            points: this.props.points,
            characterHP: this.props.characterForm.hp
        })
        this.interval1 = setInterval(this.startEnemy1, 1000)
        this.interval2 = setInterval(this.startEnemy2, 1500)
        this.interval3 = setInterval(this.startEnemy3, 750)
        this.interval4 = setInterval(this.startEnemy4, 1000)
        this.interval5 = setInterval(this.startEnemy5, 500)
    }

    componentWillUnmount(){
        clearInterval(this.interval1)
        clearInterval(this.interval2)
        clearInterval(this.interval3)
        clearInterval(this.interval4)
        clearInterval(this.interval5)
    }
         //  Generates Underlying Grid  //

    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    }
        // Enemy 1 Behavior //

    enemy1UpRightFirst = () => {
        this.setState(prevState => ({ enemy1: [ {x: prevState.enemy1[0].x + 1 , y: prevState.enemy1[0].y - 1} ] }), () => {
            if (this.state.enemy1[0].x === this.state.cells[0].x && this.state.enemy1[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy1Loc: prevState.enemy1Loc + 1}), () => {})
    }

    enemy1DownLeftFirst = () => {
        this.setState(prevState => ({ enemy1: [ {x: prevState.enemy1[0].x - 1 , y: prevState.enemy1[0].y + 1} ] }), () => {
            if (this.state.enemy1[0].x === this.state.cells[0].x && this.state.enemy1[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy1Loc: prevState.enemy1Loc + 1}), () => {})
    }

    enemy1DownLeftSecond = () => {
        this.setState(prevState => ({ enemy1: [ {x: prevState.enemy1[0].x - 1 , y: prevState.enemy1[0].y + 1} ] }), () => {
            if (this.state.enemy1[0].x === this.state.cells[0].x && this.state.enemy1[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy1Loc: prevState.enemy1Loc + 1}), () => {})
    }
    
    enemy1UpRightSecond = () => {
        this.setState(prevState => ({ enemy1: [ {x: prevState.enemy1[0].x + 1 , y: prevState.enemy1[0].y - 1} ] }), () => {
            if (this.state.enemy1[0].x === this.state.cells[0].x && this.state.enemy1[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy1Loc: prevState.enemy1Loc - 3}), () => {})
    }

    startEnemy1 = () => {
       if (this.state.enemy1Loc === 0) {
        this.enemy1UpRightFirst()
        return
       } if (this.state.enemy1Loc === 1) {
        this.enemy1DownLeftFirst()
        return 
       } if (this.state.enemy1Loc === 2) {
        this.enemy1DownLeftSecond()
        return
       } if (this.state.enemy1Loc === 3) {
        this.enemy1UpRightSecond()
        return
       }
       else { return }
    }

         // Enemy 2 Behavior //

    enemy2DownFirst = () => {
        this.setState(prevState => ({ enemy2: [ {x: prevState.enemy2[0].x , y: prevState.enemy2[0].y + 1} ] }), () => {
            if (this.state.enemy2[0].x === this.state.cells[0].x && this.state.enemy2[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy2Loc: prevState.enemy2Loc + 1}), () => {})
    }

    enemy2UpFirst = () => {
        this.setState(prevState => ({ enemy2: [ {x: prevState.enemy2[0].x , y: prevState.enemy2[0].y - 1} ] }), () => {
            if (this.state.enemy2[0].x === this.state.cells[0].x && this.state.enemy2[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy2Loc: prevState.enemy2Loc + 1}), () => {})
    }

    enemy2RightFirst = () => {
        this.setState(prevState => ({ enemy2: [ {x: prevState.enemy2[0].x + 1 , y: prevState.enemy2[0].y} ] }), () => {
            if (this.state.enemy2[0].x === this.state.cells[0].x && this.state.enemy2[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy2Loc: prevState.enemy2Loc + 1}), () => {})
    }

    enemy2RightSecond = () => {
        this.setState(prevState => ({ enemy2: [ {x: prevState.enemy2[0].x + 1 , y: prevState.enemy2[0].y} ] }), () => {
            if (this.state.enemy2[0].x === this.state.cells[0].x && this.state.enemy2[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy2Loc: prevState.enemy2Loc + 1}), () => {})
    }

    enemy2LeftFirst = () => {
        this.setState(prevState => ({ enemy2: [ {x: prevState.enemy2[0].x - 1 , y: prevState.enemy2[0].y} ] }), () => {
            if (this.state.enemy2[0].x === this.state.cells[0].x && this.state.enemy2[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy2Loc: prevState.enemy2Loc + 1}), () => {})
    }

    enemy2LeftSecond = () => {
        this.setState(prevState => ({ enemy2: [ {x: prevState.enemy2[0].x - 1 , y: prevState.enemy2[0].y} ] }), () => {
            if (this.state.enemy2[0].x === this.state.cells[0].x && this.state.enemy2[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy2Loc: prevState.enemy2Loc - 5}), () => {})
    }

    startEnemy2 = () => {
        if (this.state.enemy2Loc === 0) {
        this.enemy2DownFirst()
         return
        } if (this.state.enemy2Loc === 1) {
         this.enemy2UpFirst()
         return 
        } if (this.state.enemy2Loc === 2) {
         this.enemy2RightFirst()
         return
        } if (this.state.enemy2Loc === 3) {
         this.enemy2RightSecond()
         return
        } if (this.state.enemy2Loc === 4) {
         this.enemy2LeftFirst()
         return
        } if (this.state.enemy2Loc === 5) {
         this.enemy2LeftSecond()
         return
        } else { return }
    }
            // Enemy 3 Behavior //

    enemy3DownFirst = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x , y: prevState.enemy3[0].y + 1} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3LeftFirst = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x - 1 , y: prevState.enemy3[0].y} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3DownLeftFirst = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x - 1 , y: prevState.enemy3[0].y + 1} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3LeftSecond = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x - 1 , y: prevState.enemy3[0].y} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3UpFirst = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x , y: prevState.enemy3[0].y - 1} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3UpRightFirst = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x + 1, y: prevState.enemy3[0].y - 1} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3DownRightFirst = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x + 1, y: prevState.enemy3[0].y + 1} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3RightFirst = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x + 1 , y: prevState.enemy3[0].y} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc + 1}), () => {})
    }

    enemy3UpSecond = () => {
        this.setState(prevState => ({ enemy3: [ {x: prevState.enemy3[0].x , y: prevState.enemy3[0].y - 1} ] }), () => {
            if (this.state.enemy3[0].x === this.state.cells[0].x && this.state.enemy3[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy3Loc: prevState.enemy3Loc - 8}), () => {})
    }

    startEnemy3 = () => {
        if (this.state.enemy3Loc === 0) {
            this.enemy3DownFirst()
            return
        } if (this.state.enemy3Loc === 1) {
            this.enemy3LeftFirst()
            return 
        } if (this.state.enemy3Loc === 2) {
            this.enemy3DownLeftFirst()
            return
        } if (this.state.enemy3Loc === 3) {
            this.enemy3LeftSecond()
             return
        } if (this.state.enemy3Loc === 4) {                 
            this.enemy3UpFirst()
            return
        } if (this.state.enemy3Loc === 5) {             
            this.enemy3UpRightFirst()
            return
        } if (this.state.enemy3Loc === 6) {             
            this.enemy3DownRightFirst()
            return
        } if (this.state.enemy3Loc === 7) {             
            this.enemy3RightFirst()
            return
        } if (this.state.enemy3Loc === 8) {             
            this.enemy3UpSecond()
            return
        } 
        else { return }
    }
              // Enemy 4 Behavior //

    enemy4LeftFirst = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x - 1 , y: prevState.enemy4[0].y} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc + 1}), () => {})
    }

    enemy4DownLeftFirst = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x - 1 , y: prevState.enemy4[0].y + 1} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc + 1}), () => {})
    }

    enemy4DownFirst = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x , y: prevState.enemy4[0].y + 1} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc + 1}), () => {})
    }

    enemy4DownSecond = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x , y: prevState.enemy4[0].y + 1} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc + 1}), () => {})
    }

    enemy4UpFirst = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x , y: prevState.enemy4[0].y - 1} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc + 1}), () => {})
    }

    enemy4UpSecond = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x , y: prevState.enemy4[0].y - 1} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc + 1}), () => {})
    }

    enemy4UpRightFirst = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x + 1 , y: prevState.enemy4[0].y - 1} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc + 1}), () => {})
    }

    enemy4RightFirst = () => {
        this.setState(prevState => ({ enemy4: [ {x: prevState.enemy4[0].x + 1 , y: prevState.enemy4[0].y} ] }), () => {
            if (this.state.enemy4[0].x === this.state.cells[0].x && this.state.enemy4[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy4Loc: prevState.enemy4Loc - 7}), () => {})
    }

    startEnemy4 = () => {
        if (this.state.enemy4Loc === 0) {
            this.enemy4LeftFirst()
            return
        } if (this.state.enemy4Loc === 1) {
            this.enemy4DownLeftFirst()
            return 
        } if (this.state.enemy4Loc === 2) {
            this.enemy4DownFirst()
            return
        } if (this.state.enemy4Loc === 3) {
            this.enemy4DownSecond()
            return
        } if (this.state.enemy4Loc === 4) {                 
            this.enemy4UpFirst()
            return
        } if (this.state.enemy4Loc === 5) {             
            this.enemy4UpSecond()
            return
        } if (this.state.enemy4Loc === 6) {             
            this.enemy4UpRightFirst()
            return
        } if (this.state.enemy4Loc === 7) {             
            this.enemy4RightFirst()
            return
        } else { return }
    }
            // Enemy 5 Behavior //

    enemy5UpFirst = () => {
        this.setState(prevState => ({ enemy5: [ {x: prevState.enemy5[0].x , y: prevState.enemy5[0].y - 1} ] }), () => {
            if (this.state.enemy5[0].x === this.state.cells[0].x && this.state.enemy5[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy5Loc: prevState.enemy5Loc + 1}), () => {})
    }

    enemy5DownFirst = () => {
        this.setState(prevState => ({ enemy5: [ {x: prevState.enemy5[0].x , y: prevState.enemy5[0].y + 1} ] }), () => {
            if (this.state.enemy5[0].x === this.state.cells[0].x && this.state.enemy5[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy5Loc: prevState.enemy5Loc + 1}), () => {})
    }

    enemy5DownLeftFirst = () => {
        this.setState(prevState => ({ enemy5: [ {x: prevState.enemy5[0].x - 1 , y: prevState.enemy5[0].y + 1} ] }), () => {
            if (this.state.enemy5[0].x === this.state.cells[0].x && this.state.enemy5[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy5Loc: prevState.enemy5Loc + 1}), () => {})
    }

    enemy5DownLeftSecond = () => {
        this.setState(prevState => ({ enemy5: [ {x: prevState.enemy5[0].x - 1 , y: prevState.enemy5[0].y + 1} ] }), () => {
            if (this.state.enemy5[0].x === this.state.cells[0].x && this.state.enemy5[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy5Loc: prevState.enemy5Loc + 1}), () => {})
    }

    enemy5UpSecond = () => {
        this.setState(prevState => ({ enemy5: [ {x: prevState.enemy5[0].x , y: prevState.enemy5[0].y - 1} ] }), () => {
            if (this.state.enemy5[0].x === this.state.cells[0].x && this.state.enemy5[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy5Loc: prevState.enemy5Loc + 1}), () => {})
    }

    enemy5RightFirst = () => {
        this.setState(prevState => ({ enemy5: [ {x: prevState.enemy5[0].x + 1 , y: prevState.enemy5[0].y} ] }), () => {
            if (this.state.enemy5[0].x === this.state.cells[0].x && this.state.enemy5[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy5Loc: prevState.enemy5Loc + 1}), () => {})
    }

    enemy5UpRightFirst = () => {
        this.setState(prevState => ({ enemy5: [ {x: prevState.enemy5[0].x + 1 , y: prevState.enemy5[0].y - 1} ] }), () => {
            if (this.state.enemy5[0].x === this.state.cells[0].x && this.state.enemy5[0].y === this.state.cells[0].y) {
                this.take20Dmg()
            }
        }) 
        this.setState(prevState => ({ enemy5Loc: prevState.enemy5Loc - 6}), () => {})
    }

    startEnemy5 = () => {
        if (this.state.enemy5Loc === 0) {
            this.enemy5UpFirst()
            return
        } if (this.state.enemy5Loc === 1) {
            this.enemy5DownFirst()
            return 
        } if (this.state.enemy5Loc === 2) {
            this.enemy5DownLeftFirst()
            return
        } if (this.state.enemy5Loc === 3) {
            this.enemy5DownLeftSecond()
            return
        } if (this.state.enemy5Loc === 4) {                 
            this.enemy5UpSecond()
            return
        } if (this.state.enemy5Loc === 5) {             
            this.enemy5RightFirst()
            return
        } if (this.state.enemy5Loc === 6) {             
            this.enemy5UpRightFirst()
            return
        } else { return }
    }

         // Basic Movement Methods for Player Char //

    moveSquareUp = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x , y: this.state.cells[0].y - 1 }] }) 
    }

    moveSquareDown = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x , y: this.state.cells[0].y + 1 }] }) 
    }

    moveSquareLeft = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x - 1 , y: this.state.cells[0].y }] }) 
    }

    moveSquareRight = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x + 1 , y: this.state.cells[0].y }] }) 
    }

    moveSquareDiagUpLeft = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x - 1, y: this.state.cells[0].y - 1 }] }) 
    }

    moveSquareDiagUpRight = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x + 1, y: this.state.cells[0].y - 1 }] }) 
    }

    moveSquareDiagDownLeft = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x - 1, y: this.state.cells[0].y + 1 }] }) 
    }

    moveSquareDiagDownRight = () => {
        this.setState( {cells: [{ x: this.state.cells[0].x + 1, y: this.state.cells[0].y + 1 }] }) 
    }
        // Enemy / Damage / Score Methods //

    treeMsg = () => {
        this.setState( {message: 'You hit a tree!'} )
    }

    rockMsg = () => {
        this.setState( {message: 'You hit a rock!'} )
    }

    treasureMsg = () => {
        this.setState( {message: `Nice, you earned 50pts!`} )
    }

    noHealthDeath = (characterHP) => {
        if (characterHP < 1) {
            this.props.finishGame(this.state.points)
        }
    }

    take20Dmg = () => {
        this.setState(prevState => ( {characterHP: prevState.characterHP - 20} ), () => {
        this.setState( {message: `Ouch, you lost 20HP! You have ${this.state.characterHP} / 100 HP`} )
        this.noHealthDeath(this.state.characterHP)
        })
    }


        // Conditional Methods that direct response to
        // key presses (Basic)
    
    detectUpObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        let obstaclesList = this.state.obstacles
        obstaclesList.forEach((obstacle) => {
            if (obstacle.x === this.state.cells[0].x && obstacle.y === this.state.cells[0].y - 1) {
                this.treeMsg()
                return true
            } else {
                emptyObstacles.push(obstacle)           
            }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x && rock.y === this.state.cells[0].y - 1) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x && enemy1.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x && enemy2.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x && enemy3.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x && enemy4.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x && enemy5.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareUp()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x && treasure.y === this.state.cells[0].y - 1) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
    }

    detectDownObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        this.state.obstacles.forEach((obstacle) => {
           if (obstacle.x === this.state.cells[0].x && obstacle.y === this.state.cells[0].y + 1) {
                this.treeMsg()
                return true
           } else {
            emptyObstacles.push(obstacle)           
           }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x && rock.y === this.state.cells[0].y + 1) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x && enemy1.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x && enemy2.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x && enemy3.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x && enemy4.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x && enemy5.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareDown()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x && treasure.y === this.state.cells[0].y + 1) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
        this.state.exits.forEach((exit) => {
            if (exit.x === this.state.cells[0].x && exit.y === this.state.cells[0].y + 1) {
                this.props.finishGame(this.state.points)
            }
        })
    }

    detectLeftObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        this.state.obstacles.forEach((obstacle) => {
           if (obstacle.x === this.state.cells[0].x - 1 && obstacle.y === this.state.cells[0].y) {
                this.treeMsg()
                return true
           } else {
            emptyObstacles.push(obstacle)           
           }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x - 1 && rock.y === this.state.cells[0].y) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x - 1 && enemy1.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x - 1 && enemy2.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x - 1 && enemy3.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x - 1 && enemy4.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x - 1 && enemy5.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareLeft()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x - 1 && treasure.y === this.state.cells[0].y) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
    }

    detectRightObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        this.state.obstacles.forEach((obstacle) => {
           if (obstacle.x === this.state.cells[0].x + 1 && obstacle.y === this.state.cells[0].y) {
                this.treeMsg()
                return true
           } else {
            emptyObstacles.push(obstacle)           
           }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x + 1 && rock.y === this.state.cells[0].y) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x + 1 && enemy1.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x + 1 && enemy2.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x + 1 && enemy3.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x + 1 && enemy4.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x + 1 && enemy5.y === this.state.cells[0].y) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareRight()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x + 1 && treasure.y === this.state.cells[0].y) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
        this.state.exits.forEach((exit) => {
            if (exit.x === this.state.cells[0].x + 1 && exit.y === this.state.cells[0].y) {
                this.props.finishGame(this.state.points)
            }
        })
    }

      // Conditional Methods that direct response to
        // key presses (Extended Diagonal)

    detectDiagUpLeftObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        this.state.obstacles.forEach((obstacle) => {
           if (obstacle.x === this.state.cells[0].x - 1 && obstacle.y === this.state.cells[0].y - 1) {
                this.treeMsg()
                return true
           } else {
            emptyObstacles.push(obstacle)           
           }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x - 1 && rock.y === this.state.cells[0].y - 1) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x - 1 && enemy1.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x - 1 && enemy2.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x - 1 && enemy3.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x - 1 && enemy4.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x - 1 && enemy5.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareDiagUpLeft()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x - 1 && treasure.y === this.state.cells[0].y - 1) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
    }

    detectDiagUpRightObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        this.state.obstacles.forEach((obstacle) => {
           if (obstacle.x === this.state.cells[0].x + 1 && obstacle.y === this.state.cells[0].y - 1) {
                this.treeMsg()
                return true
           } else {
            emptyObstacles.push(obstacle)           
           }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x + 1 && rock.y === this.state.cells[0].y - 1) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x + 1 && enemy1.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x + 1 && enemy2.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x + 1 && enemy3.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x + 1 && enemy4.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x + 1 && enemy5.y === this.state.cells[0].y - 1) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareDiagUpRight()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x + 1 && treasure.y === this.state.cells[0].y - 1) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
    }

    detectDiagDownLeftObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        this.state.obstacles.forEach((obstacle) => {
           if (obstacle.x === this.state.cells[0].x - 1 && obstacle.y === this.state.cells[0].y + 1) {
                this.treeMsg()
                return true
           } else {
            emptyObstacles.push(obstacle)           
           }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x - 1 && rock.y === this.state.cells[0].y + 1) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x - 1 && enemy1.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x - 1 && enemy2.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x - 1 && enemy3.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x - 1 && enemy4.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x - 1 && enemy5.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareDiagDownLeft()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x - 1 && treasure.y === this.state.cells[0].y + 1) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
    }

    detectDiagDownRightObstacles = () => {
        let emptyObstacles = [];
        let emptyTreasures = [];
        let emptyRocks = [];
        let enemy1array = [];
        let enemy2array = [];
        let enemy3array = [];
        let enemy4array = [];
        let enemy5array = [];
        let rocksList = this.state.rocks
        this.state.obstacles.forEach((obstacle) => {
           if (obstacle.x === this.state.cells[0].x + 1 && obstacle.y === this.state.cells[0].y + 1) {
                this.treeMsg()
                return true
           } else {
            emptyObstacles.push(obstacle)           
           }
        })
        rocksList.forEach((rock) => {
            if (rock.x === this.state.cells[0].x + 1 && rock.y === this.state.cells[0].y + 1) {
                this.rockMsg()
                return true
            } else {
                emptyRocks.push(rock)
            }
        })
        this.state.enemy1.forEach((enemy1) => {
            if (enemy1.x === this.state.cells[0].x + 1 && enemy1.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy1array.push(enemy1)
            }
        })
        this.state.enemy2.forEach((enemy2) => {
            if (enemy2.x === this.state.cells[0].x + 1 && enemy2.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy2array.push(enemy2)
            }
        })
        this.state.enemy3.forEach((enemy3) => {
            if (enemy3.x === this.state.cells[0].x + 1 && enemy3.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy3array.push(enemy3)
            }
        })
        this.state.enemy4.forEach((enemy4) => {
            if (enemy4.x === this.state.cells[0].x + 1 && enemy4.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy4array.push(enemy4)
            }
        })
        this.state.enemy5.forEach((enemy5) => {
            if (enemy5.x === this.state.cells[0].x + 1 && enemy5.y === this.state.cells[0].y + 1) {
                this.take20Dmg()
                return true
            } else {
                enemy5array.push(enemy5)
            }
        })
        if (emptyObstacles.length > 58 && emptyRocks.length > 4 && enemy1array.length > 0 && enemy2array.length > 0 && enemy3array.length > 0 && enemy4array.length > 0 && enemy5array.length > 0) {
            this.moveSquareDiagDownRight()
        }
        this.state.treasures.forEach((treasure) => {
            if (treasure.x === this.state.cells[0].x + 1 && treasure.y === this.state.cells[0].y + 1) {
                this.setState(prevState => ( {points: prevState.points + 50} ), () => {
                this.treasureMsg()
                })
            } else {
                emptyTreasures.push(treasure)
            }
        })
        this.setState({ treasures: emptyTreasures })
        this.state.exits.forEach((exit) => {
            if (exit.x === this.state.cells[0].x + 1 && exit.y === this.state.cells[0].y + 1) {
                this.props.finishGame(this.state.points)
            }
        })
    }

    // Primary Handler for response to key presses // 

    handleKeyPress = (e) => {
        e.preventDefault()
        e.persist()
        let charCoordX = this.state.cells[0].x
        let charCoordY = this.state.cells[0].y
        const direction = e.key 
        switch (direction) {
            case 'w':                             // UP
                if (charCoordY > 0) {
                    this.detectUpObstacles();
                } else {
                    return
                }
                break;
            case 'x':                             // DOWN
                if (charCoordY < 12) {
                    this.detectDownObstacles();
                } else {
                    return
                }
                break;
            case 'a':                             // LEFT
                if (charCoordX > 0) {
                    this.detectLeftObstacles()
                } else {
                    return
                }
                break;
            case 'd':                             // RIGHT
                if (charCoordX < 10) {
                    this.detectRightObstacles();
                } else {
                    return
                }
                break;
            case 'q':                             // DIAG UP LEFT
                if (charCoordX > 0 && charCoordY > 0) {
                    this.detectDiagUpLeftObstacles();
                } else {
                    return
                }
                break;
            case 'e':                             // DIAG UP RIGHT
                if (charCoordX < 10 && charCoordY > 0) {
                    this.detectDiagUpRightObstacles();
                } else {
                    return
                }
                break;
            case 'z':                             // DIAG DOWN LEFT
                if (charCoordX > 0 && charCoordY < 12) {
                    this.detectDiagDownLeftObstacles();
                } else {
                    return
                }
                break;
            case 'c':                             // DIAG DOWN RIGHT
                if (charCoordX < 10 && charCoordY < 12) {
                    this.detectDiagDownRightObstacles();
                } else {
                    return
                }
                break;
            case 'r':                             // DIAG DOWN RIGHT
                this.enemy1UpRight(this.state.enemy1)
                break;
                default:
                    return
        }
    }
        // Map Render function //

    render() {
        const { cells, obstacles, rocks, treasures, exits, enemy1, enemy2, enemy3, enemy4, enemy5 } = this.state;  
        return (
            <div>
                <NavBar/>
                <div>
                <h2 className="MainQuote">Corona Quest - Please click the grid to begin</h2>
                    <h3 className="CharacterName">
                        Good Luck, {this.state.characterName}
                    </h3>
                    <h4 className="Message">
                        {this.state.message}
                    </h4>
                    <h4 className="HealthPoints">
                        HP: {this.state.characterHP} / 100
                    </h4><br></br><br></br>
                    <h4 className="ManaPoints">
                        Mana: {this.props.characterForm.mana} / 100
                    </h4>
                    <h4 className="Points">
                        Total Points: {this.state.points}
                    </h4>
                </div>
                <div className="Board" id="Board" tabIndex="0"   // tabIndex enables recognition of keyPress by div
                    onKeyDown={this.handleKeyPress} 
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                    ref={(n) => { this.boardRef = n; }}>
                    {obstacles.map(obstacle => (
                        <Tree x={obstacle.x} y={obstacle.y} key={`${obstacle.x},${obstacle.y}`}/>
                    ))}    
                     {rocks.map(rock => (
                        <Rock x={rock.x} y={rock.y} key={`${rock.x},${rock.y}`}/>
                    ))}     
                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/> 
                    ))} 
                    {treasures.map(treasure => (
                        <Treasure x={treasure.x} y={treasure.y} key={`${treasure.x},${treasure.y}`}/>   
                    ))} 
                     {exits.map(exit => (
                        <Exit x={exit.x} y={exit.y} key={`${exit.x},${exit.y}`}/>  
                    ))} 
                     {enemy1.map(enemy1 => (
                        <Enemy x={enemy1.x} y={enemy1.y} key={`${enemy1.x},${enemy1.y}`}/>  
                    ))} 
                    {enemy2.map(enemy2 => (
                        <Enemy x={enemy2.x} y={enemy2.y} key={`${enemy2.x},${enemy2.y}`}/>  
                    ))} 
                    {enemy3.map(enemy3 => (
                        <Enemy x={enemy3.x} y={enemy3.y} key={`${enemy3.x},${enemy3.y}`}/>  
                    ))} 
                    {enemy4.map(enemy4 => (
                        <Enemy x={enemy4.x} y={enemy4.y} key={`${enemy4.x},${enemy4.y}`}/>  
                    ))} 
                    {enemy5.map(enemy5 => (
                        <Enemy x={enemy5.x} y={enemy5.y} key={`${enemy5.x},${enemy5.y}`}/>  
                    ))} 
                </div>
            </div>
        );
    }
}
export default Game