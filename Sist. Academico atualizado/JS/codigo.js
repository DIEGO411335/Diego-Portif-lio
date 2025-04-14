function testa_form(){

var aluno = Document.form["formalunos"]["aluno"].value;


// VERIFICA SER O CAMPO 'ALUNO' ESTÁ VAZIO
if (Document.form["formalunos"]["cpf"].value == ""){


alert("CPF aluno precisa ser informado");

document.forms["formalunos"]["cpf"].focus();


return false;

}

return true;


}