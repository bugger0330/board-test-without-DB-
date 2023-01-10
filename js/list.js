const innerBody = document.querySelector("tbody");
const writeBtn = document.querySelector(".submit-btn");


load();
function load(){
    let innr = "";
    if(boardStorage != null){
        console.log(boardStorage.board.length);
        for(let i = 0; i < boardStorage.board.length; i++){
            innr += `
            <tr class="tr1">
                <td class="num width1">1</td>
                <td class="title">
                    <a href="">${boardStorage.board[i].title}</a>
                </td>
                <td class="name width2">${boardStorage.board[i].name}</td>
                <td class="date width3">${boardStorage.board[i].date}</td>
                <td class="count width2">111</td>
            </tr>
            `;
        }
        
    }
    innerBody.innerHTML = innr;


}

writeBtn.onclick = () => {
    location.href = "../html/write.html";
}





















