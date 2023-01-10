const text1 = document.querySelectorAll(".input-items");
const text2 = document.querySelector(".input-items2");
const text3 = document.querySelector(".input-items3");
const btns = document.querySelectorAll(".btn");
const date = new Date();
const boardArray = new Array();

btns[0].onclick = () => {
    let flag = [false, false, false, false];
    if(text1[0].value == ""){
        alert("제목을 입력해주세요!");
        text1[0].focus();
        flag[0] = true;
        return;
    }
    if(text1[1].value == ""){
        alert("이름을 입력해주세요!");
        text1[1].focus();
        flag[1] = true;
        return;
    }
    if(text2.value == ""){
        alert("내용을 입력해주세요!");
        text2.focus();
        flag[2] = true;
        return;
    }
    // if(text3.value == ""){
    //     alert("");
    //     text3.focus();
    //     flag[3] = true;
    //     return;
    // }

    for(let i = 0; i < flag.length; i++){
        if(flag[i] == true){
            return;
        }
    }
    const board = {
        title : text1[0].value,
        name : text1[1].value,
        content : text2.value,
        date : date.toLocaleString()
    }
    boardArray.push(board);
    
    if(boardStorage == null){
        sessionStorage.setItem("board", JSON.stringify({board : boardArray}));
    }else{
        let arr1 = JSON.parse(sessionStorage.getItem('board'));
        for(let i = 0; i < arr1.board.length; i++){
            boardArray.push(arr1.board[i]);
        }
        sessionStorage.setItem("board", JSON.stringify({board : boardArray}));
    }
    alert("등록되었습니다.");
    location.href = "../html/list.html";
}

btns[1].onclick = () => {
    location.href = "../html/list.html";
}