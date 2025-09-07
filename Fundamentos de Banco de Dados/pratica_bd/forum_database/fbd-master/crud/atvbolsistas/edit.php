<?php 	  
require_once('functions.php'); 	  
edit();	
?>	
<?php include(HEADER_TEMPLATE); ?>	
<h2>Atualizar atvbolsista</h2>
<form action="edit.php?id=<?php echo $atvbolsista['id']; ?>" method="post">	  
<hr />	  <div class="row">	    
    <div class="form-group col-md-7">	      <label for="name">Nome </label>	                      <input type="text" class="form-control" name="atvbolsista['name']" value="<?php echo $atvbolsista['name']; ?>">	    </div>	
    <div class="form-group col-md-3">	      <label for="campo2">Horas</label>	              <input type="text" class="form-control" name="atvbolsista['horas']" value="<?php echo $atvbolsista['horas']; ?>">	    </div>	
  	<div id="actions" class="row">	    
    <div class="col-md-12">	      
    <button type="submit" class="btn btn-primary">Salvar</button>	     
     <a href="index.php" class="btn btn-default">Cancelar</a>	    
     </div>	  </div>	
     </form>	
<?php include(FOOTER_TEMPLATE); ?>