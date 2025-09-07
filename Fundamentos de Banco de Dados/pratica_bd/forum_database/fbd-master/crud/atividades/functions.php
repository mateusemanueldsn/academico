<?php		
require_once('../conf.php');	
require_once(DBAPI);		
$atividades = null;	
$atividade = null;

/**	 *  Listagem de atividades	 */	
function index() {	
    global $atividades;		
    $atividades = find_all('atividades');	
}

/**	 *  Cadastro de atividades	 */	
function add() {		  
    if (!empty($_POST['atividade'])) {	    	    		    
        $atividade = $_POST['atividade'];	    	    	    
        save('atividades', $atividade);	    
        header('location: index.php');	 
     }	
    }
    /**	 *	Atualizacao/Edicao de atividade	 */	
    function edit() {		  	  
        if (isset($_GET['id'])) {		    
            $id = $_GET['id'];		    
            if (isset($_POST['atividade'])) {		      
                $atividade = $_POST['atividade'];	      	      
                update('atividades', $id, $atividade);	      
                header('location: index.php');	    } 
                else {		      
                    global $atividade;	      
                    $atividade = find('atividades', 
                    $id);	    } 	  } 
                    else {	    
                        header('location: index.php');	  }	}

    /**	 *  Visualização de um atividade	 */	
    function view($id = null) {	  
        global $atividade;	  
        $atividade = find('atividades', $id);	
    }
    /**	 *  Exclusão de um atividade	 */	
    function delete($id = null) {		  
        global $atividade;	 
        $bolsista = remove('atividades', $id);	 
        header('location: index.php');
    	}