package projetoLocadora;

//O GERENTE SO TEM ACESSO A PESSOAS E PRODUTOS

public class Gerente extends Funcionario {

    public Gerente(String nome, String matricula, String login, String senha) {
    	super(nome, matricula, login, senha);
    }
    public boolean isGerente() {
    	return true;
    }
    // metodo para adicionar clientes
    public void AdcCliente(){

    }
    
    //metodo para adicionar produtos
    public void AdcProduto(){

    }

    //metodo para adicionar operador
    public void AdcOperador(){
    	

    }
    
    //metodo para listar clientes, produtos, operadores, (um toString por exemplo?)
    
    //metodo para procurar clientes, produtos, operadores por código ou matrícula...
    
}
