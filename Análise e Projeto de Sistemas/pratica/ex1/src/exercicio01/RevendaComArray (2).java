package exercicio01;

import java.util.ArrayList;

public class RevendaComArray {
	private ArrayList<Produto> produtoList;
	private String IDloja;
	public RevendaComArray(String IDloja) {
		this.produtoList = new ArrayList<Produto>();
		this.IDloja = IDloja;
	}
	public boolean addProduto(String codigo, String descricao, double custo, double valorCompra, double lucro, int qtdEstoque) {
		this.produtoList.add(new Produto(codigo,descricao,custo,valorCompra,lucro,qtdEstoque));
		return true;
	}
	
	public boolean venderProduto(String codigo, int qtd) {
		for(int i = 0; i< this.produtoList.size(); i++) {
			if(codigo.equalsIgnoreCase(this.produtoList.get(i).getCodigo())) {
				if(this.produtoList.get(i).getEstoque() >= qtd) {
					this.produtoList.get(i).venda(qtd);
					return true;
				}
			}
		}
		return false;
	}
	public boolean comprarProduto(String codigo, int qtd) {
		for(int i = 0; i< this.produtoList.size(); i++) {
			if(codigo.equalsIgnoreCase(this.produtoList.get(i).getCodigo())) {
				this.produtoList.get(i).compra(qtd);
				return true;
			}
		}
		return false;
	}
	public String consultarProduto(String codigo) {
		for(int i = 0; i< this.produtoList.size(); i++) {
			if(codigo.equalsIgnoreCase(this.produtoList.get(i).getCodigo())) {
				return  "Valor: "+this.produtoList.get(i).calculaPreco();
			}
		}
		return "Produto não encontrado.";
	}
	public String listarProdutos() {
		String toString = "";
		Produto produto;
		for(int i = 0; i< this.produtoList.size(); i++) {
			produto = this.produtoList.get(i);
			toString += "Código: "+ produto.getCodigo() + " Descrição: " + produto.getDesc() + " Valor: " + produto.calculaPreco() + "\n";
		}
		return toString;
	}
	
}

