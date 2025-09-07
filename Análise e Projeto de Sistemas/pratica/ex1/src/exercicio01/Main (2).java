package exercicio01;
import java.util.Scanner;
public class Main {
	private static Scanner myc = new Scanner(System.in);
	private static RevendaComArray loja = new RevendaComArray("LojaCao");
	
	public static String controller(String c) {
		String resposta = "comando inválido";
		Scanner myc2 = new Scanner(System.in);
		if(c.equalsIgnoreCase("1")) {
			System.out.println("Informe o código do produto: ");
		    String codigo = myc2.next();
		    
		    System.out.println("Informe a descrição do produto: ");
		    String descricao = myc2.nextLine();
		    descricao = myc2.nextLine();
		    
		    System.out.println("Informe o valor do produto: ");
		    double valor = myc2.nextDouble();
		    
		    System.out.println("Informe o valor do imposto do produto: ");
		    double custo = myc2.nextDouble();
		    
		    System.out.println("Informe o lucro do produto: ");
		    double lucro = myc2.nextDouble();
		    
		    System.out.println("Informe o a quantidade em estoque: ");
		    int estoque = myc2.nextInt();
		    if(loja.addProduto(codigo, descricao, valor, custo, lucro, estoque)) {
		    	resposta = "Produto adicionado com sucesso";
		    }else {
		    	resposta = "erro ao adicionar produto";
		    }
		}else if(c.equalsIgnoreCase("2")) {
			System.out.println("Informe o código do produto: ");
		    String codigo = myc2.next();
		    
		    System.out.println("Informe a quantidade do produto: ");
		    int qtd = myc2.nextInt();
		    
		    if(loja.comprarProduto(codigo, qtd)) {
		    	resposta = "Compra bem sucedida :)";
		    }else {
		    	resposta = "Erro ao comprar produto :(";
		    }
		}else if(c.equalsIgnoreCase("3")) {
			System.out.println("Informe o código do produto: ");
		    String codigo = myc2.next();
		    
		    System.out.println("Informe a quantidade do produto: ");
		    int qtd = myc2.nextInt();
		    
		    if(loja.venderProduto(codigo, qtd)) {
		    	resposta = "Sua venda foi efetuada com sucesso";
		    }else {
		    	resposta = "erro ao vender produto";
		    }
		}else if(c.equalsIgnoreCase("4")) {
			System.out.println("Informe o código do produto: ");
		    String codigo = myc2.next();
		    
		    resposta = loja.consultarProduto(codigo);
		    
		    
		}else if(c.equalsIgnoreCase("5")) {
			resposta = loja.listarProdutos();
		}
//		myc2.close();
		return resposta;
	}
	
	public static void main(String[] args)  {
		String command = "";
		
		while(!command.equalsIgnoreCase("fim")) {
			
		    
			System.out.println("Digite o número da função desejada: \n"
					+ "1.CriarProduto \n"
					+ "2.ComprarProduto \n"
					+ "3.VenderProduto \n"
					+ "4.ConsultarProduto \n"
					+ "5.Listar Produtos \n"
					);
			System.out.println("Digite o número");
		    
		    
		    command = myc.next();
		    if(command.equalsIgnoreCase("fim")) {
		    	break;
		    }
		    System.out.println(controller(command));
		  
		    
		}
		
		  myc.close();	
		
		
	 }
}
