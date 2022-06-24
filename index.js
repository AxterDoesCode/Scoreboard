let homeEl = document.getElementById("homeText")
let guestEl = document.getElementById("guestText")
let hScore = 0
let gScore = 0
function add1(x){
    if(x==1){
        hScore+=1
        homeEl.textContent=hScore
    }
    else{
        gScore+=1
        guestEl.textContent=gScore
    }
}

function add2(x){
    if(x==1){
        hScore+=2
        homeEl.textContent=hScore
    }
    else{
        gScore+=2
        guestEl.textContent=gScore
    }
}

function add3(x){
    if(x==1){
        hScore+=3
        homeEl.textContent=hScore
    }
    else{
        gScore+=3
        guestEl.textContent=gScore
    }
}

function reset(){
    hScore = 0
    gScore = 0
    homeEl.textContent=hScore
    guestEl.textContent=gScore
}