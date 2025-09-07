package projetoLocadora;

public class Dvd extends Filme{
    private boolean arranhado;

    public Dvd(String codigo, String titulo, String genero, boolean locado, int anoLancamento, int duracao, boolean arranhado){
    	super(codigo, titulo, genero, locado, anoLancamento, duracao);
        this.arranhado = arranhado;
    }
    public boolean getArranhado(){
        return arranhado;
    }
    public void setArranhado(boolean arranhado){
        this.arranhado = arranhado;
    } 
}

