package projetoLocadora;
import java.util.HashMap;
import java.util.Map;
public class RepPessoas {
    private Map<String, Pessoa> pessoas ;
    private Map<String, Funcionario> funcionarios ;
    private String res ="Algum erro aconteceu";
    public RepPessoas() {
    	this.pessoas= new HashMap<String, Pessoa>();
    	this.funcionarios = new HashMap<String, Funcionario>();
    	this.adcPessoa("gerente", "admin", "0", "admin", "admin", "", 0,"M");
    }
    //metodos exigidos no trabalho

    //adicionar uma Pessoa
    public boolean adcPessoa(String tipo, String nome, String matricula, String login, String senha, String endereco, int idade, String sexo){
    	if(tipo.equalsIgnoreCase("cliente")) {
    		this.pessoas.put(matricula, new Cliente( nome,  matricula,  endereco,  idade,  sexo));
    		return true;
    	}else if(tipo.equalsIgnoreCase("gerente")) {
    		this.funcionarios.put(""+matricula, new Gerente(nome, matricula, login,senha));
    		return true;
    	}else if(tipo.equalsIgnoreCase("operador")) {
    		this.funcionarios.put(""+matricula, new OperadorSistema(nome, matricula, login,senha));
    		return true;
    	}
    	return false;
    }
    //remover uma pessoa ja adicionada, retornar erro se não existir
    public boolean removerPessoa(String tipo, String matricula){
    	if(tipo.equalsIgnoreCase("cliente")) {
    		if(this.pessoas.remove(matricula, this.pessoas.get(""+matricula))) {
        		return true;
        	}
    	}else {
    		if(this.pessoas.remove(matricula, this.funcionarios.get(""+matricula))) {
        		return true;
        	}
    	}
    	
    	return false;
    }
    //retornar uma pessoa ja adiconada, retornar erro se não existir
    public Funcionario retornarFuncionario(String matricula){
    	return this.funcionarios.get(matricula);
    }
    public Pessoa retornarPessoa(String matricula){
    	return this.pessoas.get(matricula);
    }
    public String listarPessoas() {
    	this.res = "";
    	this.pessoas.forEach((key, value)->{
    		this.res += "Nome: " + value.getNome() + " idade: " + value.getIdade() + " endere�o: " + value.getEndereco() +" sexo: " + value.getSexo() + "\n";
    	});
    	return res;
    }
    public String listarFuncionarios() {
    	this.res = "";
    	this.funcionarios.forEach((key, value)->{
    		this.res += "Nome: " + value.getNome();
    		if(value.isGerente()) {
    			this.res += " Gerente \n";
    		}else {
    			this.res += " Operador \n";
    		}
    	});
    	return res;
    }
}
