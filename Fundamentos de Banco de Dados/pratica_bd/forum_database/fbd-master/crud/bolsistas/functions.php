<?php		
require_once('../conf.php');	
require_once(DBAPI);		
$bolsistas = null;	
$bolsista = null;

/**	 *  Listagem de bolsistas	 */	
function index() {	
    global $bolsistas;		
    $bolsistas = find_all('bolsistas');	
}

/**	 *  Cadastro de bolsistas	 */	
function add() {		  
    if (!empty($_POST['bolsista'])) {	    	    		    
        $bolsista = $_POST['bolsista'];	    	    	    
        save('bolsistas', $bolsista);	    
        header('location: index.php');	 
     }	
    }
    /**	 *	Atualizacao/Edicao de bolsista	 */	
    function edit() {		  	  
        if (isset($_GET['id'])) {		    
            $id = $_GET['id'];		    
            if (isset($_POST['bolsista'])) {		      
                $bolsista = $_POST['bolsista'];	      	      
                update('bolsistas', $id, $bolsista);	      
                header('location: index.php');	    } 
                else {		      
                    global $bolsista;	      
                    $bolsista = find('bolsistas', 
                    $id);	    } 	  } 
                    else {	    
                        header('location: index.php');	  }	}

    /**	 *  Visualização de um bolsista	 */	
    function view($id = null) {	  
        global $bolsista;	  
        $bolsista = find('bolsistas', $id);	
    }
    /**	 *  Exclusão de um bolsista	 */	
    function delete($id = null) {		  
        global $bolsista;	 
         $bolsista = remove('bolsistas', $id);		 
          header('location: index.php');	}