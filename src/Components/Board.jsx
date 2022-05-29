import React, { useState, useEffect } from 'react';
import Square from './Square';

const Board = () => {

    const [board, setBoard] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState('X')
    const [stepCount, setStepCount] = useState(0)

    const [winner, setWinner] = useState()



    

    useEffect(() => { 

        const winPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ]
        
        let newWinner = null

        for(let i = 0 ; i < winPositions.length; i++){
            const [a,b,c] = winPositions[i]
            // let a = winPositions[i][0]
            // let b = winPositions[i][1]
            // let c = winPositions[i][2]
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                newWinner = board[a]
            }
        }

        if (newWinner) {
            setWinner(newWinner)
        }
    }, [board]);


    const handleClick = (index) => {
        if (index < 0 || index > 9 || board[index] || winner) return
        console.log(board)
        let newBoard = [...board]
        newBoard.splice(index, 1, turn)
        setBoard(newBoard)
        let newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setStepCount(stepCount + 1)
    }

    const boardReset = () => {
        setBoard(Array(9).fill(''))
        setTurn('X')
        setWinner('')
        setStepCount(0)
    }

    return (
        <div className='board_container'>

            <h3>Play Tic-Tac-Toe</h3>
            <div>{winner && 'Winner is :' + winner}</div>
            <div>{!winner && stepCount >= 9 ? 'Draw' : null}</div>
            <div className="board_wrapper">
                {board.map((elem, index) => {
                    return <Square value={elem} key={index} index={index} handleClick={handleClick} />
                })}

            </div>
            <div className="reset_btn">
                <button onClick={() => boardReset()}>RESET BOARD</button>
            </div>
            <div className="copyright">
                <p>© Karapet9annnn</p>
            </div>
        </div>
    );
}

export default Board;
