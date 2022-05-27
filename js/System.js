class System {
  constructor() {}

  authenticate(actualCode, enteredCode) {
   
    if(actualCode === enteredCode.toUpperCase()){
      textSize(50);
      fill("black");
      text(code, 300, 300);
      score = score +1;
    };
    // Adicionar código para "return true" se a resposta correta for inserida senão "return false".
  }
}
