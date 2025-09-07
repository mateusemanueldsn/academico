package exercicio01;

public class Produto {
	private String codigo;
	private String descricao;
	private double valorCompra;
	private double custo;
	private double lucro;
	public double getValorCompra() {
		return valorCompra;
	}

	public void setValorCompra(double valorCompra) {
		this.valorCompra = valorCompra;
	}


	public void setCusto(double custo) {
		this.custo = custo;
	}

	private int qtdEstoque;
	
	public Produto(String codigo, String descricao, double custo, double valorCompra, double lucro, int qtdEstoque) {
		this.codigo = codigo;
		this.descricao = descricao;
		this.custo = custo;
		this.lucro = lucro;
		this.valorCompra = valorCompra;
		this.qtdEstoque = qtdEstoque;
		}
	
	void compra(int quant) {
		this.qtdEstoque = this.qtdEstoque + quant;
	}
	
	void venda(int quant) {
		this.qtdEstoque = this.qtdEstoque - quant;
	}
	
	public double calculaPreco() {
		return this.valorCompra + this.custo + (this.lucro * (this.valorCompra + this.custo));
	}

	public int getEstoque() {
		// TODO Auto-generated method stub
		return this.qtdEstoque;
	}

	public String getCodigo() {
		// TODO Auto-generated method stub
		return this.codigo;
	}

	public String getDesc() {
		// TODO Auto-generated method stub
		return this.descricao;
	}

	public double getCusto() {
		// TODO Auto-generated method stub
		return this.custo;
	}
	
	
}
