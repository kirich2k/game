window.onload = function () {
    var step = 0;
    /*var check_cross = ['allBlock[0].innerHTML = "x" && allBlock[1].innerHTML = "x" && allBlock[2].innerHTML = "x"', 'allBlock[3].innerHTML == "x" && allBlock[4].innerHTML == "x" && allBlock[5].innerHTML == "x"', 'allBlock[6].innerHTML == "x" && allBlock[7].innerHTML == "x" && allBlock[8].innerHTML == "x"', 'allBlock[0].innerHTML == "x" && allBlock[3].innerHTML == "x" && allBlock[6].innerHTML == "x"', 'allBlock[1].innerHTML == "x" && allBlock[4].innerHTML == "x" && allBlock[7].innerHTML == "x"', 'allBlock[2].innerHTML == "x" && allBlock[5].innerHTML == "x" && allBlock[8].innerHTML == "x"'];
    var check_circle = ['allBlock[0].innerHTML = "0" && allBlock[1].innerHTML = "0" && allBlock[2].innerHTML = "0"', 'allBlock[3].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[5].innerHTML == "0"', 'allBlock[6].innerHTML == "0" && allBlock[7].innerHTML == "0" && allBlock[8].innerHTML == "0"', 'allBlock[0].innerHTML == "0" && allBlock[3].innerHTML == "0" && allBlock[6].innerHTML == "0"', 'allBlock[1].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[7].innerHTML == "0"', 'allBlock[2].innerHTML == "0" && allBlock[5].innerHTML == "0" && allBlock[8].innerHTML == "0"'];

    var check_cross = ['allBlock[0].innerHTML = "x" && allBlock[1].innerHTML = "x" && allBlock[2].innerHTML = "x"']*/

    for (let i = 0; i < 9; i++) {
        document.getElementById("game").innerHTML +=
            '<div class="block"></div>';
    }

    document.getElementById("game").onclick = function (event) {
        // console.log(event);
        if (event?.path[0].innerHTML === '') {
            if (event.target.className == "block") {
                if (step % 2 == 0) {
                    event.target.innerHTML = "x";
                } else {
                    event.target.innerHTML = "0";
                }
                step += 1;
                checkWinner();
            }
        }
    }

    function checkWinner() {
        //Вариант вроде рабочий но надо будет детально всё изучить
        /*console.log("Проверка победителя");
        for (let a = 0; a < check_cross.length; a++) {
            let allBlock = document.getElementByClassName('block');
            // let inner_check_x = check_x[a];
            console.log("Это 'allBlock'", allBlock);
            // console.log("Это 'inner_check_x'", inner_check_x);
            console.log("Это 'check_cross[a]'", check_cross[a]);
            if (check_cross[a]) {
                console.log("Победили крестики");
                // return;
                break;
            };

        };
        for (let v = 0; v < check_circle.length; v++) {
            let allBlock = document.getElementByClassName('block');
            // let inner_check_x = check_x[a];
            console.log("Это 'allBlock'", allBlock);
            // console.log("Это 'inner_check_x'", inner_check_x);
            console.log("Это 'check_circle[v]'", check_circle[v]);
            if (check_circle[v]) {
                console.log("Победили нолики");
                // return;
                break;
            };

        };

        function Reload() {
            const bool = confirm("Заново?");
            if (bool) {
                window.location.reload();
            }
        }*/
        let allBlock = document.getElementsByClassName("block");
        if (
            (allBlock[0].innerHTML == "x" &&
                allBlock[1].innerHTML == "x" &&
                allBlock[2].innerHTML == "x") ||
            (allBlock[3].innerHTML == "x" &&
                allBlock[4].innerHTML == "x" &&
                allBlock[5].innerHTML == "x") ||
            (allBlock[6].innerHTML == "x" &&
                allBlock[7].innerHTML == "x" &&
                allBlock[8].innerHTML == "x") ||
            (allBlock[0].innerHTML == "x" &&
                allBlock[3].innerHTML == "x" &&
                allBlock[6].innerHTML == "x") ||
            (allBlock[1].innerHTML == "x" &&
                allBlock[4].innerHTML == "x" &&
                allBlock[7].innerHTML == "x") ||
            (allBlock[2].innerHTML == "x" &&
                allBlock[5].innerHTML == "x" &&
                allBlock[8].innerHTML == "x") ||
            (allBlock[0].innerHTML == "x" &&
                allBlock[4].innerHTML == "x" &&
                allBlock[8].innerHTML == "x") ||
            (allBlock[2].innerHTML == "x" &&
                allBlock[4].innerHTML == "x" &&
                allBlock[6].innerHTML == "x")
        ) {
            alert("Победили крестики");
            // Reload();
            window.location.reload();
        } else if (
            (allBlock[0].innerHTML == "0" &&
                allBlock[1].innerHTML == "0" &&
                allBlock[2].innerHTML == "0") ||
            (allBlock[3].innerHTML == "0" &&
                allBlock[4].innerHTML == "0" &&
                allBlock[5].innerHTML == "0") ||
            (allBlock[6].innerHTML == "0" &&
                allBlock[7].innerHTML == "0" &&
                allBlock[8].innerHTML == "0") ||
            (allBlock[0].innerHTML == "0" &&
                allBlock[3].innerHTML == "0" &&
                allBlock[6].innerHTML == "0") ||
            (allBlock[1].innerHTML == "0" &&
                allBlock[4].innerHTML == "0" &&
                allBlock[7].innerHTML == "0") ||
            (allBlock[2].innerHTML == "0" &&
                allBlock[5].innerHTML == "0" &&
                allBlock[8].innerHTML == "0") ||
            (allBlock[0].innerHTML == "0" &&
                allBlock[4].innerHTML == "0" &&
                allBlock[8].innerHTML == "0") ||
            (allBlock[2].innerHTML == "0" &&
                allBlock[4].innerHTML == "0" &&
                allBlock[6].innerHTML == "0")
        ) {
            alert("Победили нолики");
            // Reload();
            window.location.reload();
        } else {
            checkStep();
        }
    }
    function checkStep() {
        if (step >= 9) {
            alert("Ничья");
            window.location.reload();
        }
    }
};
