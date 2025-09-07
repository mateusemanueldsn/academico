package projetoLocadora;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class RepLocacoes {
    private String codigoProduto;
    private String matriculaCliente;
    private Date dataSaida;
    private Date dataEntrega;

    public RepLocacoes(String codigoProduto,String matriculaCliente){
    	this.matriculaCliente = matriculaCliente;
        this.codigoProduto = codigoProduto;
        this.dataSaida = new Date();
        int auxday = dataSaida.getDate()+2;
        try {
			this.dataEntrega = new SimpleDateFormat("dd-MM-yyyy").parse(""+auxday+"-"+dataSaida.getMonth()+"-"+dataSaida.getYear());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
    
    public String getCodigoProduto() {
        return codigoProduto;
    }
    public String getMatriculaCliente() {
        return matriculaCliente;
    }
    public void setCodigoProduto(String codigoProduto) {
        this.codigoProduto = codigoProduto;
    }
    public Date getDataEntrega() {
        return dataEntrega;
    }
    public void setDataEntrega(Date dataEntrega) {
        this.dataEntrega = dataEntrega;
    }
    public Date getDataSaida() {
        return dataSaida;
    }
    public void setDataSaida(Date dataSaida) {
        this.dataSaida = dataSaida;
    }

    // metodos exigidos no trabalho

    // verifica se a data de entrega é menor ou igual a da entrega, caso nao seja calcula a multa
    public String calculaMulta(){
    	Date data = new Date();
    	double valorBase = 5;
    	double multa = valorBase;
    	if(this.dataEntrega.getTime() > data.getTime()) {
    		 multa = ((this.dataEntrega.getTime() - data.getTime()) * 0.04) + valorBase;
    	}
    	return "R$"+multa;
    }

    //adicionar uma locacao
    public void adcLocacao(){

    }
    //remover uma locação ja adicionada, retornar erro se não existir locação
    public void removerLocacao(){

    }
    //retornar uma locação ja adiconada, retornar erro se não existir locação
    public void retornarLocacao(){

    }

}
