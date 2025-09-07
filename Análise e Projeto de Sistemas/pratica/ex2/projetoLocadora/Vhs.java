package projetoLocadora;

public class Vhs extends Filme{
    private boolean cores;

    public Vhs(String codigo, String titulo, String genero, boolean locado, int anoLancamento, int duracao, boolean cores){
    	super(codigo, titulo, genero, locado, anoLancamento, duracao);
        this.cores = cores;
    }
    public boolean getCores(){
        return cores;
    }
    public void setCores(boolean cores){
        this.cores = cores;
    } 
    
}
