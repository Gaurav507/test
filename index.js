const boxes = document.querySelectorAll(".b1");
var flag = 0;
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",function(){
        if(flag%2 == 0){
            boxes[i].innerHTML = 5;
            flag++;
        }
        else{
            boxes[i].innerHTML = 1;
            flag++;
        }
        if(flag >3){
            checkForWinner();
        }
        
});
}
const winningTriplets = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,9],
    [2,4,6]
]

// alert(winningTriplets[5]);
console.log(boxes[winningTriplets[1][1]] + "ok");
function checkForWinner(){
    for(var j=0;j<winningTriplets.length;j++){
        if(boxes[winningTriplets[j][0]].innerHTML == 5 && boxes[winningTriplets[j][1]].innerHTML == 5 && boxes[winningTriplets[j][2]].innerHTML == 5 ){
            alert("player 0 won");
        }
        else if(boxes[winningTriplets[j][0]].innerHTML == 1 && boxes[winningTriplets[j][1]].innerHTML == 1 && boxes[winningTriplets[j][2]].innerHTML == 1 ){
            alert("player 1 won");
        }
        
    }
}
