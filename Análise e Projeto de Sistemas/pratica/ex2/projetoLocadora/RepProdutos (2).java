package projetoLocadora;
import java.util.HashMap;
import java.util.Map;
public class RepProdutos {
    private Map<String, Filme> filmes;
    private Map<String, Musica> musicas;
    private String res = "Houve algum problema";
    public RepProdutos() {
    	this.filmes = new HashMap<String, Filme>();
    	this.musicas = new HashMap<String, Musica>();
    	
    }

    //adicionar um Produto
    public boolean adcMusica(String tipo, String codigo, String titulo, String genero, boolean locado, String autor, int numeroFaixas, boolean arranhado, boolean raro){
    	if(tipo.equalsIgnoreCase("cd")) {
    		this.musicas.put(codigo, new Cds( codigo,  titulo,  genero,  locado,  autor,  numeroFaixas,  arranhado));
    		return true;
    	}else if(tipo.equalsIgnoreCase("lps")) {
    		this.musicas.put(codigo, new Lps( codigo,  titulo,  genero,  locado,  autor,  numeroFaixas,  raro));
    		return true;
    	}
    	return false;
    }
    public boolean adcFilme(String tipo, String codigo, String titulo, String genero, boolean locado, int anoLancamento, int duracao, boolean arranhado, String idiomas,  boolean cores) {
    	if(tipo.equalsIgnoreCase("dvd")) {
    		this.filmes.put(codigo, new Dvd( codigo,  titulo,  genero,  locado,  anoLancamento,  duracao,  arranhado));
    		return true;
    	}else if(tipo.equalsIgnoreCase("bluray")) {
    		this.filmes.put(codigo, new BluRays( codigo,  titulo,  genero,  locado,  anoLancamento,  duracao,  idiomas));
    		return true;
    	}else if(tipo.equalsIgnoreCase("vhs")) {
    		this.filmes.put(codigo, new Vhs( codigo,  titulo,  genero,  locado,  anoLancamento,  duracao,  cores));
    		return true;
    	}
    	return false;
    }
    //remover uma produto ja adicionado, retornar erro se nÃ£o existir
    public void removerProduto(){

    }
    //retornar uma produto ja adiconado, retornar erro se nÃ£o existir
    public Musica retornarMusica(String codigo){
    	
    		Musica musica = this.musicas.get(codigo);
    		return musica;
    	
    }
    public Filme retornarFilme(String codigo) {
    	
    		Filme filme = this.filmes.get(codigo);
    		return filme;
    }
    public String listarProdutos() {
    	this.res = "Filmes: \n";
    	this.filmes.forEach((key, value)->{
    		this.res += "Nome: " + value.getTitulo() + " Genero: " + value.getGenero() + " locado: " + value.getLocado() + " duração: " + value.getDuracao() + " ano de lançamento: " + value.getAnoLancamento() + "\n";
    	});
    	this.res += "Musicas: \n";
    	this.musicas.forEach((key, value)->{
    		this.res += "Nome: " + value.getTitulo() + " Genero: " + value.getGenero() + " locado: " + value.getLocado() + " faixas: " + value.getNumeroFaixas() + " autor: " + value.getAutor() + "\n";
    	});
    	return this.res;
    }
}
