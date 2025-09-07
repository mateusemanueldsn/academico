package projetoLocadora;

public class Lps extends Musica {
    private boolean raro;

    public Lps(String codigo, String titulo, String genero, boolean locado, String autor, int numeroFaixas, boolean raro){
    	super(codigo, titulo, genero, locado, autor, numeroFaixas);
        this.raro = raro;
    }

    public boolean getRaro(){
        return raro;
    }
    public void setRaro(boolean raro){
        this.raro = raro;
    }    
}
