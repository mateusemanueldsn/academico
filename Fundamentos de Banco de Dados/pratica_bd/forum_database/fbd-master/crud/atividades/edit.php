<?php 	  
require_once('functions.php'); 	  
edit();	
?>	
<?php include(HEADER_TEMPLATE); ?>	
<h2>Atualizar atividade</h2>
<form action="edit.php?id=<?php echo $atividade['id']; ?>" method="post">	  
<hr />	  <div class="row">	    
    <div class="form-group col-md-7">	      <label for="name">Nome </label>	                      <input type="text" class="form-control" name="atividade['nome']" value="<?php echo $atividade['nome']; ?>">	    </div>	
    <div class="form-group col-md-3">	      <label for="campo2">Horas</label>	              <input type="text" class="form-control" name="atividade['horas']" value="<?php echo $atividade['horas']; ?>">	    </div>	
  	<div id="actions" class="row">	    
    <div class="col-md-12">	      
    <button type="submit" class="btn btn-primary">Salvar</button>	     
     <a href="index.php" class="btn btn-default">Cancelar</a>	    
     </div>	  </div>	
     </form>	
<?php include(FOOTER_TEMPLATE); ?>