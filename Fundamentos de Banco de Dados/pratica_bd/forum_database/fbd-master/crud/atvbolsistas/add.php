<?php 	  require_once('functions.php'); 	  add();	?>	
<?php include(HEADER_TEMPLATE); ?>	
<h2>Nova Hora</h2>	
<form action="add.php" method="post">	  
<!-- area de campos do form -->	  <hr />	 
 <div class="row">	    
    <div class="form-group col-md-7">	      <label for="name">ID do bolsista</label>	      <input type="text" class="form-control" name="atvbolsista['id_bolsista']">	    </div>	
    <div class="form-group col-md-3">	      <label for="campo2">ID da atividade</label>	      <input type="text" class="form-control" name="atvbolsista['id_atividade']">	    </div>	
     <div id="actions" class="row">	    
    <div class="col-md-12">	      
    <button type="submit" class="btn btn-primary">Salvar</button>	      
    <a href="index.php" class="btn btn-default">Cancelar</a>	    
    </div>	  
    </div>	
    </form>	
<?php include(FOOTER_TEMPLATE); ?>