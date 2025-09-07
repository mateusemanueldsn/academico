package projetoLocadora;

public class BluRays extends Filme{
    private String idiomas;

    public BluRays(String codigo, String titulo, String genero, boolean locado, int anoLancamento, int duracao, String idiomas){
    	super(codigo, titulo, genero, locado, anoLancamento, duracao);
        this.idiomas = idiomas;
    }
    public String getIdiomas() {
        return idiomas;
    }
    public void setIdiomas(String idiomas) {
        this.idiomas = idiomas;
    }
}
