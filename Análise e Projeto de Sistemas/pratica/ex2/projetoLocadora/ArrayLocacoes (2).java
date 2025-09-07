package projetoLocadora;

import java.text.SimpleDateFormat;
import java.util.ArrayList;

//salvando locacoes em um ArrayList
public class ArrayLocacoes {
    private ArrayList <RepLocacoes> locacoes;
    private String res = "Houve algum problema";
    private SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy"); 
    public ArrayLocacoes(){
        this.locacoes = new ArrayList<RepLocacoes>();
    }
    public boolean adcLocacao(RepLocacoes locacao) {
    	this.locacoes.add(locacao);
    	return true;
    }
    public boolean baixa(String matricula, String codigo) {
    	for(int i = 0;i<locacoes.size();i++) {
    		if(locacoes.get(i).getCodigoProduto().equalsIgnoreCase(codigo) &&  locacoes.get(i).getMatriculaCliente().equalsIgnoreCase(matricula)) {
    			RepLocacoes locacao = locacoes.get(i);
    			System.out.println("O valor total da locação foi:" + locacoes.get(i).calculaMulta());
    			this.locacoes.remove(i);
    			return true;
    		}
    	}
    	return false;
    }
    public String listarLocacoes() {
    	this.res = "";
    	for(int i =0;i<locacoes.size();i++) {
    		RepLocacoes loc = locacoes.get(i);
    		
    		this.res += "Codigo do produto: " + loc.getCodigoProduto() + " Matricula do Cliente: " + loc.getMatriculaCliente() + " Data para entrega: " + this.formato.format(loc.getDataEntrega()) + " Valor atual da locacao: " + loc.calculaMulta();
    	}
    	return res;
    }
}
