const inputFile = document.querySelector(".file-input");
const innrInput = document.querySelector(".innr-input");
const btn = document.querySelector(".btn");
/*
	1 메가바이트 = 1024 * 1024 = 1,048,576
*/
inputFile.onchange = (event) => {
	
	if(event.target.files[0].size > 5242880){ // 5 mb 까지만 가능
		alert("첨부파일은 5mb 이하만 가능합니다.");
		inputFile.value = "";
		return;
	}
	
	//console.log("테스트 : " + inputFile.value);
	let fileCut = inputFile.value.split("\\");
	let fileLastName = (fileCut[fileCut.length - 1]).split(".")[1];
	//console.log("test1 : " + fileLastName);
	
	if(fileLastName == "gif" || fileLastName == "jpeg" || fileLastName == "jpg" || fileLastName == "png"){
		const reader = new FileReader();
		console.log("파일 사이즈 : " + (event.target.files[0].size / 1024) + " kb");
		sessionStorage.setItem("img", JSON.stringify({img : reader.readAsDataURL(event.target.files[0])}));
	}else{
		alert("이미지 파일만 첨부 가능합니다.");
		inputFile.value = "";
		return;
	}
}

//===========================================================================
btn.onclick = () => {
	
	if(inputFile.value == ""){
		alert("첨부파일 없음");
	}else{
		let test1 = JSON.parse(sessionStorage.getItem("img"));
		console.log(test1);
	}
	
	
}