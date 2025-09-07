package projetoLocadora;

//O OPERADOR PODE FAZER ACESSAR TODOS OS METODOS

public class OperadorSistema extends Funcionario {

    public OperadorSistema(String nome, String matricula, String login, String senha) {
    	super(nome, matricula, login, senha);
    }
    public boolean isOperador() {
    	return true;
    }
    // metodo para locação de produtos para clientes
    public void LocacaoProduto(){

    }
    
    //metodo para excluir locações adicionadas e mostrar um erro caso não exista a locação
    public void ExcluirLocacao(){

    }

    //metodo para fazer baixa de locação, aqui deve-se cobrar caso haja multas por tempo excedido na entrega
    public void BaixaLocacao(){

    }

    //metodo para procurar produtos por código...

    //metodo para procurar clientes por matricula...
    
}
