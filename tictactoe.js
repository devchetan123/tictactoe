let turn = "X"
let info = document.getElementById("infoDiv")
let winnerDeclare = false
let sideInfo = document.getElementById("info")
let img = document.createElement("img")

let onCLick = new Audio("onclick.wav")
let onWin = new Audio("onwin.wav")

const checkWin = () => {
    let ticTacBoxes = document.getElementsByClassName("outerBox")
    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    win.forEach((x) => {
        if (ticTacBoxes[x[0]].innerText == ticTacBoxes[x[1]].innerText && ticTacBoxes[x[1]].innerText == ticTacBoxes[x[2]].innerText && ticTacBoxes[x[1]].innerText != "") {
            if (winnerDeclare === false) {
                info.innerText = `${turn == "X" ? "O" : "X"} Team Winner`
                
                img.src = "https://i.ibb.co/HXHDCY4/57e209296e586933febadf06e271a3d3.gif"
                img.setAttribute("height", "100px")
                // img.height = "100px"
                sideInfo.append(img)
                winnerDeclare = true
                onWin.play()
            }

        }

    })
}

const changeEle = () => {
    return turn == "X" ? "O" : "X"
}

let box = document.getElementsByClassName("outerBox")

Array.from(box).forEach((e) => {
    e.addEventListener("click", () => {
        if (e.innerText == "") {
            if (winnerDeclare == false) {
                e.innerText = turn
                if(turn == "X"){
                    e.style.color = "rgb(202, 240, 248)"
                    e.style.textShadow = "rgb(52, 76, 183) 0px 0px 5px, rgb(52, 76, 183) 0px 0px 10px, rgb(52, 76, 183) 0px 0px 15px"
                }
                else{
                    e.style.color = "white"
                    e.style.textShadow = "rgb(255, 173, 240) 0px 0px 4px, rgb(255, 173, 240) 0px 0px 4px, rgb(255, 173, 240) 0px 0px 4px"
                }
                turn = changeEle()
                checkWin()
                onCLick.play()
            }
        }
    })
})

let resetbtn = document.getElementById("resetBtn")
resetbtn.addEventListener("click", () => {
    Array.from(box).forEach(x => {
        x.innerText = ""
        winnerDeclare = false
        info.innerText = ""
        img.src = ""
    })
})

