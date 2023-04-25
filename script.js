window.onload = function () {
    var step = 0;
    for (let i = 0; i < 9; i++) {
        document.getElementById(
            "game"
        ).innerHTML += `<div class="block" id=${i}></div>`;
    }
    let isBot = confirm("С ботом?");
    if (isBot) {
        var botFirst = confirm("Бот ходит первый?");
    }
    let stepsPlayer = [];
    function Step(event) {
        if (event.target.innerHTML === "") {
            if (step % 2 === 0) {
                event.target.innerHTML = String("x");
                stepsPlayer.push(event.target.id);
            } else {
                event.target.innerHTML = String("0");
                stepsPlayer.push(event.target.id);
            }
            step += 1;
            checkWinner();
        } else {
            console.log("Error");
        }
    }
    function Bot() {
        let botStepId = Math.floor(Math.random() * (8 - 0) + 0);
        let allBlock = document.getElementsByClassName("block");
        let block = document.getElementById(botStepId);
        const botStep = () => {
            let clearBlock = [];
            for (let z = 0; z < allBlock.length; z++) {
                if (allBlock[z].innerHTML === "") {
                    clearBlock.push(allBlock[z].innerHTML);
                }
            }
            let sorting = [];
            for (let q = 0; q < 9; q++) {
                for (let w = 0; w < 9; w++) {
                    if (String(stepsPlayer[w]) === String(q)) {
                        sorting.push(stepsPlayer[w]);
                    }
                }
            }
            // console.log(JSON.stringify(sorting));
            if ((botFirst && step % 2 === 0) || step % 2 !== 0) {
                if (String(JSON.stringify(sorting)) === String('["0","1"]')) {
                    let block = document.getElementById(2);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["1","2"]')
                ) {
                    let block = document.getElementById(0);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["3","4"]')
                ) {
                    let block = document.getElementById(5);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["4","5"]')
                ) {
                    let block = document.getElementById(3);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["6","7"]')
                ) {
                    let block = document.getElementById(8);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["7","8"]')
                ) {
                    let block = document.getElementById(6);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["0","3"]')
                ) {
                    let block = document.getElementById(6);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["1","4"]')
                ) {
                    let block = document.getElementById(7);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (String(JSON.stringify(sorting)) === String('["2","5"]')) {
                    let block = document.getElementById(8);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (String(JSON.stringify(sorting)) === String('["0","4"]')) {
                    let block = document.getElementById(8);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (String(JSON.stringify(sorting)) === String('["4","8"]')) {
                    let block = document.getElementById(0);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (String(JSON.stringify(sorting)) === String('["2","4"]')) {
                    let block = document.getElementById(6);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (String(JSON.stringify(sorting)) === String('["4","8"]')) {
                    let block = document.getElementById(0);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else if (
                    String(JSON.stringify(sorting)) === String('["4","6"]')
                ) {
                    let block = document.getElementById(2);
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        console.log("block filled");
                    }
                } else {
                    if (block.innerHTML === "") {
                        if (step % 2 === 0) {
                            block.innerHTML = String("x");
                        } else {
                            block.innerHTML = String("0");
                        }
                        step += 1;
                        checkWinner();
                    } else {
                        Bot();
                    }
                }
                // console.log("sorting", sorting);
            }
        };
        botStep();
    }
    function checkWinner() {
        let allBlock = document.getElementsByClassName("block");
        if (
            (allBlock[0].innerHTML === "x" &&
                allBlock[1].innerHTML === "x" &&
                allBlock[2].innerHTML === "x") ||
            (allBlock[3].innerHTML === "x" &&
                allBlock[4].innerHTML === "x" &&
                allBlock[5].innerHTML === "x") ||
            (allBlock[6].innerHTML === "x" &&
                allBlock[7].innerHTML === "x" &&
                allBlock[8].innerHTML === "x") ||
            (allBlock[0].innerHTML === "x" &&
                allBlock[3].innerHTML === "x" &&
                allBlock[6].innerHTML === "x") ||
            (allBlock[1].innerHTML === "x" &&
                allBlock[4].innerHTML === "x" &&
                allBlock[7].innerHTML === "x") ||
            (allBlock[2].innerHTML === "x" &&
                allBlock[5].innerHTML === "x" &&
                allBlock[8].innerHTML === "x") ||
            (allBlock[0].innerHTML === "x" &&
                allBlock[4].innerHTML === "x" &&
                allBlock[8].innerHTML === "x") ||
            (allBlock[2].innerHTML === "x" &&
                allBlock[4].innerHTML === "x" &&
                allBlock[6].innerHTML === "x")
        ) {
            setTimeout(() => {
                alert("Победили крестики");
                window.location.reload();
            }, 500);
        } else if (
            (allBlock[0].innerHTML === "0" &&
                allBlock[1].innerHTML === "0" &&
                allBlock[2].innerHTML === "0") ||
            (allBlock[3].innerHTML === "0" &&
                allBlock[4].innerHTML === "0" &&
                allBlock[5].innerHTML === "0") ||
            (allBlock[6].innerHTML === "0" &&
                allBlock[7].innerHTML === "0" &&
                allBlock[8].innerHTML === "0") ||
            (allBlock[0].innerHTML === "0" &&
                allBlock[3].innerHTML === "0" &&
                allBlock[6].innerHTML === "0") ||
            (allBlock[1].innerHTML === "0" &&
                allBlock[4].innerHTML === "0" &&
                allBlock[7].innerHTML === "0") ||
            (allBlock[2].innerHTML === "0" &&
                allBlock[5].innerHTML === "0" &&
                allBlock[8].innerHTML === "0") ||
            (allBlock[0].innerHTML === "0" &&
                allBlock[4].innerHTML === "0" &&
                allBlock[8].innerHTML === "0") ||
            (allBlock[2].innerHTML === "0" &&
                allBlock[4].innerHTML === "0" &&
                allBlock[6].innerHTML === "0")
        ) {
            setTimeout(() => {
                alert("Победили нолики");
                window.location.reload();
            }, 500);
        } else {
            checkStep();
        }
    }
    function checkStep() {
        if (step >= 9) {
            setTimeout(() => {
                alert("Ничья");
                window.location.reload();
            }, 500);
        } else {
            NextStep();
        }
    }
    function NextStep() {
        // console.log("step", step);
        if (botFirst && step % 2 === 0) {
            // console.log("Bot");
            Bot();
        } else {
            if (!botFirst && step % 2 !== 0) {
                // console.log("Bot");
                Bot();
            }
            document.getElementById("game").onclick = function (event) {
                // console.log(event);
                if (event?.target.innerHTML === "") {
                    if (event.target.className === "block") {
                        Step(event);
                    }
                }
            };
        }
    }
    NextStep();
};
