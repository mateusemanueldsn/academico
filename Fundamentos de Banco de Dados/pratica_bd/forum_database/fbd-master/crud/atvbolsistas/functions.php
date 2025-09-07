<?php		
require_once('../conf.php');	
require_once(DBAPI);		
$atvbolsistas = null;	
$atvbolsista = null;

/**	 *  Listagem de atvbolsistas	 */	
function index() {	
    global $atvbolsistas;		
    $atvbolsistas = findjun('atvbolsistas');	
}

/**	 *  Cadastro de atvbolsistas	 */	
function add() {		  
    if (!empty($_POST['atvbolsista'])) {	    	    		    
        $atvbolsista = $_POST['atvbolsista'];	    	    	    
        save('atvbolsistas', $atvbolsista);	    
        header('location: index.php');	 
     }	
    }
    /**	 *	Atualizacao/Edicao de atvbolsista	 */	
    function edit() {		  	  
        if (isset($_GET['id'])) {		    
            $id = $_GET['id'];		    
            if (isset($_POST['atvbolsista'])) {		      
                $atvbolsista = $_POST['atvbolsista'];	      	      
                update('atvbolsistas', $id, $atvbolsista);	      
                header('location: index.php');	    } 
                else {		      
                    global $atvbolsista;	      
                    $atvbolsista = find('atvbolsistas', 
                    $id);	    } 	  } 
                    else {	    
                        header('location: index.php');	  }	}

    /**	 *  Visualização de um atvbolsista	 */	
    function view($id = null) {	  
        global $atvbolsista;
        global $atv;	  
        $atvbolsista = findjun('atvbolsistas', $id);
        $atv=findjuna('atvbolsistas', $id);
        
    }
    /**	 *  Exclusão de um atvbolsista	 */	
    function delete($id = null) {		  
        global $atvbolsista;	 
         $atvbolsista = remove('atvbolsistas', $id);		 
          header('location: index.php');	}