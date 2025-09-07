package projetoLocadora;

public class Filme extends Produto{
    private int anoLancamento;
    private int duracao;

    public Filme(String codigo, String titulo, String genero, boolean locado, int anoLancamento, int duracao){
    	super(codigo, titulo, genero, locado);
        this.anoLancamento = anoLancamento;
        this.duracao = duracao;
    }

    public int getAnoLancamento() {
        return anoLancamento;
    }
    public void setAnoLancamento(int anoLancamento) {
        this.anoLancamento = anoLancamento;
    }
    public int getDuracao() {
        return duracao;
    }
    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }
}
