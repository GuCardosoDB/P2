var minhaLista = new Array();

function aluno(id, nome, turma, disciplina, n1, n2, n3, situacao) {
  this.id = id;
  this.nome = nome;
  this.turma = turma;
  this.disciplina = disciplina;
  this.n1 = n1;
  this.n2 = n2;
  this.n3 = n3;
  this.situacao = situacao;

  this.notafinal = function () {
    var nTotal = parseFloat(this.n1) + parseFloat(this.n2) + parseFloat(this.n3);
    var media = parseFloat(nTotal) / 3;
    return media;
  };

  this.resultadoSituacao = function () {
    if (this.notafinal() >= 5) {
      return "aprovado";
    }
    else {
      return "exame";
    }
  };
}

const registrar = () => {
  var id = parseInt(document.getElementById('id').value) || 0;
  var nome = document.getElementById('nome').value;
  var turma = document.getElementById('turma').value;
  var disciplina = document.getElementById('disciplina').value;
  var n1 = parseFloat(document.getElementById('n1').value) || 0;
  var n2 = parseFloat(document.getElementById('n2').value) || 0;
  var n3 = parseFloat(document.getElementById('n3').value) || 0;

  var msgErro = document.getElementById('msg_erro');

  if (id === '') {
    msgErro.innerHTML = 'Faltou o ID';
    return false;
  }

  if (nome === '') {
    msgErro.innerHTML = 'Faltou a nome';
    return false;
  }

  if (turma === '') {
    msgErro.innerHTML = 'Faltou a turma';
    return false;
  }

  if (disciplina === '') {
    msgErro.innerHTML = 'Faltou a disciplina';
    return false;
  }

  if (n1 === '') {
    msgErro.innerHTML = 'Faltou a nota 1';
    return false;
  }

  if (n2 === '') {
    msgErro.innerHTML = 'Faltou a nota 2';
    return false;
  }

  if (n3 === '') {
    msgErro.innerHTML = 'Faltou a nota 3';
    return false;
  }

  if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
    alert("só pode números entre 0 e 10");
    return false;
  }

  var aluno0 = new aluno(id, nome, turma, disciplina, n1, n2, n3);
  minhaLista.push(aluno0);
}

const listar = () => {
  var lista = document.getElementById("lista");
  var text = "";
  var celula = "";

  text = `<h1 class="text-center">Tabela de Notas e Médias</h1> <table class="table text-center"> <tr> <th>ID</th> <th>Nome</th> <th>Turma</th> <th>Disciplina</th> <th>Nota 1</th> <th>Nota 2</th> <th>Nota 3</th> <th>Média</th> <th>Situação</th> </tr >`;

  minhaLista.forEach(function (it) {
    celula = "<td>" + it.id + "</td>";
    celula += "<td>" + it.nome + "</td>";
    celula += "<td>" + it.turma + "</td>";
    celula += "<td>" + it.disciplina + "</td>";
    celula += "<td>" + it.n1 + "</td>";
    celula += "<td>" + it.n2 + "</td>";
    celula += "<td>" + it.n3 + "</td>";
    celula += "<td>" + it.notafinal().toFixed(1) + "</td>";
    celula += "<td>" + it.resultadoSituacao() + "</td>";

    text += "<tr>" + celula + "</tr>";
    celula = "";
  });

  text += "</table>";

  lista.innerHTML = text;
}

const remover = () => {
  minhaLista.pop();
  listar();
  clear();
}

function limpar() {
  minhaLista = [];
  minhaLista.pop();

  listar();
  document.getElementById('id').value = '';
  document.getElementById('nome').value = '';
  document.getElementById('turma').value = '';
  document.getElementById('disciplina').value = '';
  document.getElementById('n1').value = '';
  document.getElementById('n2').value = '';
  document.getElementById('n3').value = '';
}
