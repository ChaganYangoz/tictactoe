document.querySelectorAll('.gameArea').forEach(box => {
    box.addEventListener('click', event => {
        if(tour%2==0){
            PlayerX(box).putSymbol();
        }else{
            PlayerO(box).putSymbol();
        }
        tour++;
    },{once : true})
  });

let tour=0;

const Gameboard=(box)=>{
    
};

const PlayerX=(box)=>{
    const putSymbol=()=>{
        let devImage = new Image();
        devImage.src="img/close.png";
        devImage.setAttribute('width', '100px');
         devImage.setAttribute('height', '100px');
         box.appendChild(devImage);
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
    }

    return {putSymbol};
};