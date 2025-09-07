import projetoLocadora.ArrayLocacoes;
import projetoLocadora.RepPessoas;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
import projetoLocadora.RepProdutos;
public class Main {
	private static Scanner myc = new Scanner(System.in);
	private static Scanner myc2 = new Scanner(System.in);
	private static Scanner myc3 = new Scanner(System.in);
	private static RepPessoas pessoas = new RepPessoas(); 
	private static RepProdutos produtos = new RepProdutos();
	private static ArrayLocacoes locacoes = new ArrayLocacoes();
	public static String controller(String c) {
		String resposta = "comando inválido";
		if(c.equalsIgnoreCase("1")) {
			
			System.out.println("Digite a matricula:");
			String mat = myc2.next();
			if(pessoas.retornarFuncionario(mat) == null) {
				resposta = "User não encontrado";
				return resposta;
			}
			
			System.out.println("Digite a senha:");
			String password = myc2.next();
			if(pessoas.retornarFuncionario(mat).getSenha().equalsIgnoreCase(password)  && pessoas.retornarFuncionario(mat).isGerente()){
				resposta = Gerente();
			}
			return resposta;
		}else if(c.equalsIgnoreCase("2")) {
			System.out.println("Digite a matricula:");
			String mat = myc2.next();
			if(pessoas.retornarFuncionario(mat) == null) {
				resposta = "User não encontrado";
				return resposta;
			}
			
			System.out.println("Digite a senha:");
			String password = myc2.next();
			if(pessoas.retornarFuncionario(mat).getSenha().equalsIgnoreCase(password) && pessoas.retornarFuncionario(mat).isOperador()){
				resposta = Operador();
			}
			return resposta;
		}else if(c.equalsIgnoreCase("3")) {
			resposta = "Você escolheu a opção 3";
			return resposta;
		}
		return resposta;
	}
	
	public static String Gerente() {
		String resposta = "Logado como gerente";
		System.out.println(resposta);
		String command = "";
		while(!command.equalsIgnoreCase("10")) {
			System.out.println("Bem-vindo Gerente, escolha uma das opções: \n"
					+ "1. Cadastrar Produto \n"
					+ "2. Cadastrar Cliente \n"
					+ "3. Cadastrar Operador \n"
					+ "4. Listar Produtos \n"
					+ "5. Listar Clientes \n"
					+ "6. Listar Operadores \n"
					+ "7. Procurar Produto \n"
					+ "8. Procurar Cliente \n"
					+ "9. Procurar Operador \n"
					+ "10. Sair \n"
					);
			System.out.println("Digite a opcao:");
			command = myc3.next();
			if(command.equalsIgnoreCase("1")) {
				
				System.out.println("Qual produto quer cadastrar? \n 1.Cd \n 2.Lps \n 3.Dvd \n 4.Bluray \n 5.Vhs");
				String select = myc3.next();
				
				if(select.equalsIgnoreCase("1")) {
					System.out.println("Digite o codigo:");
					String codigo = myc3.next();
					System.out.println("Digite o titulo:");
					String titulo = myc3.next();
					System.out.println("Digite o genero:");
					String genero = myc3.next();
					System.out.println("Digite o autor:");
					myc3.nextLine();
					String autor = myc3.nextLine();
					System.out.println("Digite a quantidade de faixas:");
					int numeroFaixas = myc3.nextInt();
					System.out.println("Digite se está arranhado(true or false):");
					boolean arranhado = myc3.nextBoolean();
					if(produtos.adcMusica("cd", codigo, titulo, genero, false, autor, numeroFaixas, arranhado, false)) {
						resposta="Cd adicionado com sucesso";
					}
				}else if(select.equalsIgnoreCase("2")) {
					System.out.println("Digite o codigo:");
					String codigo = myc3.next();
					System.out.println("Digite o titulo:");
					String titulo = myc3.next();
					System.out.println("Digite o genero:");
					String genero = myc3.next();
					System.out.println("Digite o autor:");
					myc3.nextLine();
					String autor = myc3.nextLine();
					System.out.println("Digite a quantidade de faixas:");
					int numeroFaixas = myc3.nextInt();
					System.out.println("Digite se é raro(true or false):");
					boolean raro = myc3.nextBoolean();
					if(produtos.adcMusica("lps", codigo, titulo, genero, false, autor, numeroFaixas, false, raro)) {
						resposta="Cd adicionado com sucesso";
					}
				}else if(select.equalsIgnoreCase("3")) {
					
					System.out.println("Digite o codigo:");
					String codigo = myc3.next();
					System.out.println("Digite o titulo:");
					String titulo = myc3.next();
					System.out.println("Digite o genero:");
					String genero = myc3.next();
					System.out.println("Digite o Ano de lançamento:");
					int ano = myc3.nextInt();
					System.out.println("Digite a duração:");
					int duracao = myc3.nextInt();
					System.out.println("Digite se é arranhado(true or false):");
					boolean arranhado = myc3.nextBoolean();				
					if(produtos.adcFilme("dvd", codigo, titulo, genero, false, ano, duracao, arranhado, "", false)) {
						resposta="DVD adicionado com sucesso";
					}
				}else if(select.equalsIgnoreCase("4")) {
					System.out.println("Digite o codigo:");
					String codigo = myc3.next();
					System.out.println("Digite o titulo:");
					String titulo = myc3.next();
					System.out.println("Digite o genero:");
					String genero = myc3.next();
					System.out.println("Digite o Ano de lançamento:");
					int ano = myc3.nextInt();
					System.out.println("Digite a duração:");
					int duracao = myc3.nextInt();
					System.out.println("Digite os idiomas: ");
					myc.nextLine();
					String idiomas = myc3.nextLine();				
					if(produtos.adcFilme("bluray", codigo, titulo, genero, false, ano, duracao, false, idiomas, false)) {
						resposta="Bluray adicionado com sucesso";
					}
				}else if(select.equalsIgnoreCase("5")) {
					System.out.println("Digite o codigo:");
					String codigo = myc3.next();
					System.out.println("Digite o titulo:");
					String titulo = myc3.next();
					System.out.println("Digite o genero:");
					String genero = myc3.next();
					System.out.println("Digite o Ano de lançamento:");
					int ano = myc3.nextInt();
					System.out.println("Digite a duração:");
					int duracao = myc3.nextInt();
					System.out.println("Digite se é colorido(true or false):");
					boolean cores = myc3.nextBoolean();				
					if(produtos.adcFilme("vhs", codigo, titulo, genero, false, ano, duracao, false, "", cores)) {
						resposta="Vhs adicionado com sucesso";
					}
				}
				
			}else if(command.equalsIgnoreCase("2")) {
				resposta = "2 - Cadastrar Cliente";
				System.out.println("Digite o nome:");
				String nome = myc3.next();
				System.out.println("Digite a matricula:");
				String matricula = myc3.next();
				System.out.println("Digite o endereço:");
				myc3.nextLine();
				String endereco= myc3.nextLine();
				System.out.println("Digite a idade:");
				int idade=myc3.nextInt(); 
				System.out.println("Digite o sexo:");	
				String sexo = myc3.next();
				if(pessoas.adcPessoa("cliente", nome, matricula, "", "", endereco, idade,sexo)) {
					resposta = "cliente cadastrado com sucesso";
				}
				
			}else if(command.equalsIgnoreCase("3")) {
				resposta = "3 - Cadastrar Operador";
				System.out.println("Digite o nome:");
				String nome = myc3.next();
				System.out.println("Digite a matricula:");
				String matricula = myc3.next();
				System.out.println("Digite o login:");
				String login= myc3.next();
				System.out.println("Digite a senha:");
				String senha=myc3.next(); 
				if(pessoas.adcPessoa("operador", nome, matricula, login, senha, "", 0,"")) {
					resposta = "operador cadastrado com sucesso";
				}
				
			}
			else if(command.equalsIgnoreCase("4")) {
				resposta = "4 - Listar produtos";
				resposta = produtos.listarProdutos();
			}
			else if(command.equalsIgnoreCase("5")) {
				resposta = "5 - Listar clientes";
				resposta = pessoas.listarPessoas();
			}
			else if(command.equalsIgnoreCase("6")) {
				resposta = "6 - Listar operadores";
				resposta = pessoas.listarFuncionarios();
				
			}
			else if(command.equalsIgnoreCase("7")) {
				resposta = "7 - Procurar produto";
				System.out.println("Digite qual produto você quer: \n 1.Musica \n 2.Filme");
				String select = myc3.next();
				System.out.println("Digite o codigo:");
				String codigo = myc3.next();
				if(select.equalsIgnoreCase("1")) {
					if(produtos.retornarMusica(codigo)!=null) {
						projetoLocadora.Musica musica = produtos.retornarMusica(codigo);
						resposta = "Nome: " + musica.getTitulo() + " Genero: " + musica.getGenero() + " locado: " + musica.getLocado() + " faixas: " + musica.getNumeroFaixas() + " autor: " + musica.getAutor() + "\n";
					}
				}else if(select.equalsIgnoreCase("2")) {
					if(produtos.retornarFilme(codigo)!=null) {
						projetoLocadora.Filme filme = produtos.retornarFilme(codigo);
						resposta = "Nome: " + filme.getTitulo() + " Genero: " + filme.getGenero() + " locado: " + filme.getLocado() + " duração: " + filme.getDuracao() + " ano de lançamento: " + filme.getAnoLancamento() + "\n";
					}
				}
				
			}
			else if(command.equalsIgnoreCase("8")) {
				resposta = "8 - Procurar cliente";
				System.out.println("Digite a matricula:");
				String matricula = myc3.next();
				if(pessoas.retornarPessoa(matricula)!=null) {
					projetoLocadora.Pessoa cliente = pessoas.retornarPessoa(matricula);
					resposta = "Nome: " + cliente.getNome() + " idade: " + cliente.getIdade() + " endereço: " + cliente.getEndereco() +" sexo: " + cliente.getSexo() + "\n";
				}
			}
			else if(command.equalsIgnoreCase("9")) {
				resposta = "9 - Procurar operador";
				System.out.println("Digite a matricula:");
				String matricula = myc3.next();
				if(pessoas.retornarFuncionario(matricula)!=null) {
					projetoLocadora.Funcionario funcionario = pessoas.retornarFuncionario(matricula);
					resposta = "Nome: " + funcionario.getNome();
					if(funcionario.isGerente()) {
						resposta += " Gerente \n";
					}else {
						resposta += " Operador \n";
					}
				}
			}else if(command.equalsIgnoreCase("10")) {
				resposta = "10 - sair";
				return resposta;
				
			}
			System.out.println(resposta);
		}
		
		System.out.println("Digite a opcao:");
		return resposta;
	}
	
	public static String Operador() {
		String resposta = "Logado como operador";
		System.out.println(resposta);
		String command = "";
		while(!command.equalsIgnoreCase("6")) {
			System.out.println("Bem-vindo Operador, escolha uma das opções: \n"
					+ "1. Fazer locação \n"
					+ "2. Dar baixa em locação \n"
					+ "3. Excluir locação \n"
					+ "4. Procurar Produto \n"
					+ "5. Procurar Cliente \n"
					+ "6. Sair \n"
					);
			System.out.println("Digite a opcao:");
			command = myc3.next();
			if(command.equalsIgnoreCase("1")) {
				resposta = "1 - Fazer locação";
				System.out.println("Digite a matricula:");
				String matricula = myc3.next();
				if(pessoas.retornarPessoa(matricula) == null) {
					resposta = "cliente n existe";
					break;
				}
				System.out.println("Qual o tipo de produto que voce quer locar? \n 1.Musica \n 2.Filme");
				String select = myc3.next();
				System.out.println("Digite o codigo:");
				String codigo = myc3.next();
				if(select.equalsIgnoreCase("1")) {
					if(produtos.retornarMusica(codigo)!=null) {
						projetoLocadora.Musica musica = produtos.retornarMusica(codigo);
						if(musica.getLocado().equals(true)) {
							resposta = "Já está locado";
							break;
						}
						locacoes.adcLocacao(new projetoLocadora.RepLocacoes(codigo, matricula));
						musica.setLocado(true);
						resposta = "Musica locada";
					}else {
						resposta = "Musica n existe";
						break;
					}
				}else if(select.equalsIgnoreCase("2")) {
					if(produtos.retornarFilme(codigo)!=null) {
						projetoLocadora.Filme filme = produtos.retornarFilme(codigo);
						if(filme.getLocado().equals(true)) {
							resposta = "Já está locado";
							break;
						}
						locacoes.adcLocacao(new projetoLocadora.RepLocacoes(codigo, matricula));
						filme.setLocado(true);
						resposta = "Filme locado";
					}else {
						resposta = "Filme n existe";
						break;
						
					}
				}
				
			}else if(command.equalsIgnoreCase("2")) {
				resposta = "2 - Dar baixa em locação";
				System.out.println("Digite a matricula:");
				System.out.println("Qual o tipo de produto que voce quer dar baixa? \n 1.Musica \n 2.Filme");
				String select = myc3.next();
				String matricula = myc3.next();
				System.out.println("Digite o codigo:");
				String codigo = myc3.next();
				if(locacoes.baixa(matricula, codigo)) {
					if(select.equalsIgnoreCase("1")) {
						produtos.retornarMusica(codigo).setLocado(false);
					}else if(select.equalsIgnoreCase("2")) {
						produtos.retornarFilme(codigo).setLocado(false);
					}
				}
				
			}else if(command.equalsIgnoreCase("3")) {
				resposta = "3 - Listar locação";
				resposta = locacoes.listarLocacoes();
			}
			else if(command.equalsIgnoreCase("4")) {
				resposta = "4 - Procurar produto";
				System.out.println("Digite qual produto você quer: \n 1.Musica \n 2.Filme");
				String select = myc3.next();
				System.out.println("Digite o codigo:");
				String codigo = myc3.next();
				if(select.equalsIgnoreCase("1")) {
					if(produtos.retornarMusica(codigo)!=null) {
						projetoLocadora.Musica musica = produtos.retornarMusica(codigo);
						resposta = "Nome: " + musica.getTitulo() + " Genero: " + musica.getGenero() + " locado: " + musica.getLocado() + " faixas: " + musica.getNumeroFaixas() + " autor: " + musica.getAutor() + "\n";
					}
				}else if(select.equalsIgnoreCase("2")) {
					if(produtos.retornarFilme(codigo)!=null) {
						projetoLocadora.Filme filme = produtos.retornarFilme(codigo);
						resposta = "Nome: " + filme.getTitulo() + " Genero: " + filme.getGenero() + " locado: " + filme.getLocado() + " duração: " + filme.getDuracao() + " ano de lançamento: " + filme.getAnoLancamento() + "\n";
					}
				}
			}
			else if(command.equalsIgnoreCase("5")) {
				resposta = "5 - Procurar cliente";
				System.out.println("Digite a matricula:");
				String matricula = myc3.next();
				if(pessoas.retornarPessoa(matricula)!=null) {
					projetoLocadora.Pessoa cliente = pessoas.retornarPessoa(matricula);
					resposta = "Nome: " + cliente.getNome() + " idade: " + cliente.getIdade() + " endereço: " + cliente.getEndereco() +" sexo: " + cliente.getSexo() + "\n";
				}
			}
			else if(command.equalsIgnoreCase("6")) {
				resposta = "6 - Sair";
				return resposta;
			}
			System.out.println(resposta);
		}
		
		System.out.println("Digite a opcao:");
		return resposta;
	}
	

	public static void main(String[] args) {
		String command = "";
		
		while(!command.equalsIgnoreCase("3")) {
			
		    
			System.out.println("Bem-vindo, escolha o perfil abaixo: \n"
					+ "1.Gerente \n"
					+ "2.Operador de Sistema \n"
					+ "3.Sair \n"
					);
			System.out.println("Digite a opcao:");
			 command= myc.next();
			 System.out.println(controller(command));
	 }

	}

}