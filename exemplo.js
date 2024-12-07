document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const ra = document.getElementById('ra').value;

    const aluno = `${nome} ${sobrenome} (RA: ${ra})`;

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(aluno));

    document.getElementById('listaAlunos').appendChild(li);

    document.getElementById('cadastroForm').reset();
});
