function readFile(input) {
    const file = input.files[0]; // 첨부된 파일을 가져옴
    
    const reader = new FileReader();
   
    reader.readAsDataURL(file); // 파일을 base64로 변환
    console.log("파일내용1 : " + reader.result);
    reader.onload = function() {
      console.log(reader.result); // 읽은 파일 소스단에 출력
      document.querySelector('img').src = reader.result;
      console.log("파일내용2 : " + reader.result);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  }