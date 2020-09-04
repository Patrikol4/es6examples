class List{
	constructor(){
		this.data = [];
	}

	add(data){
		this.data.push(data);
		console.log(data);
	}
}

class TodoList extends List{
	constructor(){
		// Chamando o constructor da classe pai
		super();

		this.usuario = 'Patrick';

	}

	mostraUsuario(){
		console.log(this.usuario);
	}
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
	MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();
