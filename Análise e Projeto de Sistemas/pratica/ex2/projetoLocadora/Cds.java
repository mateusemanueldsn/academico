package projetoLocadora;

public class Cds extends Musica{
    private boolean arranhado;

    public Cds(String codigo, String titulo, String genero, boolean locado, String autor, int numeroFaixas, boolean arranhado){
    	super(codigo, titulo, genero, locado, autor, numeroFaixas);
        this.arranhado = arranhado;
    }

    public boolean getArranhado(){
        return arranhado;
    }
    public void setArranhado(boolean arranhado){
        this.arranhado = arranhado;
    } 
    
}
