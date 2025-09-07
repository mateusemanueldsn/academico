package projetoLocadora;

public class Musica extends Produto{
    private String autor;
    private int numeroFaixas;

    public Musica(String codigo, String titulo, String genero, boolean locado, String autor, int numeroFaixas){
    	super(codigo, titulo, genero, locado);
        this.autor = autor;
        this.numeroFaixas = numeroFaixas;
    }

    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public int getNumeroFaixas() {
        return numeroFaixas;
    }
    public void setNumeroFaixas(int numeroFaixas) {
        this.numeroFaixas = numeroFaixas;
    }
}
