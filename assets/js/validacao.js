function validar() {
    var nome = form1.nome.value;
    var email = form1.email.value;
    var assunto = form1.assunto.value;
    var mensagem = form1.mensagem.value;

    if (nome == "") {
        alert("Preencha o campo com seu nome e sobrenome");
        form1.nome.focus;
        return false;
    }

    else if (email == "") {
        alert("Preencha o campo com seu e-mail");
        form1.email.focus;
        return false;
    }

    else if (assunto == "") {
        alert("Preencha o campo com o assunto");
        form1.assunto.focus;
        return false;
    }

    else if (mensagem == "") {
        alert("Preencha o campo com sua mensagem");
        form1.mensagem.focus;
        return false;
    }

    else {
        alert("Sua mensagem foi enviada. Obrigada por entrar em contato comigo! Darei retorno assim que possível =)");
    }
}
