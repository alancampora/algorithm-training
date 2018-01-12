/*
 *    If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
 *
 *    Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
 *
 *    [[0, 0, 1],
 *     [0, 1, 2],
 *     [2, 1, 0]]
 *    We want our function to return:
 *
 *    -1 if the board is not yet finished (there are empty spots),
 *    1 if "X" won,
 *    2 if "O" won,
 *    0 if it's a cat's game (i.e. a draw).
 *    You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 *
 */

function isSolved(board) {  
   let [row0,row1,row2] = board,
       [p00,p01,p02] = row0 , 
       [p10, p11, p12] = row1,
       [p20, p21, p22] = row2, 
       notFinished = -1, 
       isADraw = 0;
 
   //rows
   if(isRowEqual(0,board)){
      return p00;
   }
   if(isRowEqual(1,board)){
      return p10;
   }
   if(isRowEqual(2,board)){
      return p20;
   }
   
   //columns
   if(isColumnEqual(0,board)){
    return won(p00);
   }
   if(isColumnEqual(1,board)){
    return won(p01);
   }
   if(isColumnEqual(2,board)){
    return won(p02);
   }
   
   //diags
   if(areEqual(p00,p11,p22)){
      return p00;
   } 
   if(areEqual(p02,p11,p20)){
      return p02;
   } 
    
   if(areEmptySpots(board)){
      console.log(areEmptySpots(board));
      return notFinished;
   }
   
   return isADraw;
}

const areEmptySpots = board=> {
  return board.some(row => row.some(element => element == 0 )); 
}

const isColumnEqual = (index,board) => 
  areEqual(board[0][index],board[1][index],board[2][index]);

const isRowEqual = (index,board) => 
  areEqual(board[index][0],board[index][1],board[index][2]);
 
const areEqual = (p1,p2,p3) => p1 === p2 && p2 === p3 && p1 !==0;

const won = number => number == 1 ? 1 : 2;




