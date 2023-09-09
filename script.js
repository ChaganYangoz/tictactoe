const winner=document.querySelector(".winner");
const btnRestart=document.querySelector("#restart");
const turn=document.querySelector(".turn");

document.querySelectorAll('.gameArea').forEach(box => {
    box.addEventListener('click', event => {
        if(tour%2==0){
            PlayerX(box).putSymbol();
        }else{
            PlayerO(box).putSymbol();
        }
        tour++;
        console.log(tour);
        checkWinner();
    },{once : true})
  });

let tour=0;
let gameBoard = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let anounceWinner="";

const Gameboard=(box)=>{
    
};

const PlayerX=(box)=>{
    const putSymbol=()=>{
        let devImage = new Image();
        devImage.src="img/close.png";
        devImage.setAttribute('width', '100px');
        devImage.setAttribute('height', '100px');
        box.appendChild(devImage);
        gameBoard[box.id]="x";
        changeTurn();
    }
    const changeTurn=()=>{
        turn.textContent="O's turn";
    }

    return {putSymbol};
};

const PlayerO=(box)=>{
    const putSymbol=()=>{
        let devImage = new Image();
        devImage.src="img/letter-o.png";
        devImage.setAttribute('width', '100px');
         devImage.setAttribute('height', '100px');
         box.appendChild(devImage);
        gameBoard[box.id]="o";
        changeTurn();
    }
    const changeTurn=()=>{
        turn.textContent="X's turn";
    }

    return {putSymbol};
};

function checkWinner(){
    const howToWin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const checkAll=arr=>arr.every(a=>a===arr[0]);
    let control=true;
    
    for(let i=0;i<8;i++){
        let temp=[];
        for(j=0;j<3;j++){
            temp.push(gameBoard[howToWin[i][j]]);
        }
        if(checkAll(temp)){
            anounceWinner="The winner is "+temp[0].toUpperCase();
            modal.style.display = "block";
            winner.textContent=anounceWinner;
            turn.textContent="";
            control=false;
        }else if(tour==9 && control){
            anounceWinner="It's a draw"
            modal.style.display = "block";
            winner.textContent=anounceWinner;
            turn.textContent="";
        }
    }
    
}

// Get the modal
var modal = document.getElementById("myModal");

btnRestart.onclick=()=>{
    location.reload();
}
