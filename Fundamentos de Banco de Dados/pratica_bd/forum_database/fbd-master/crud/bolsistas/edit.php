<?php 	  
require_once('functions.php'); 	  
edit();	
?>	
<?php include(HEADER_TEMPLATE); ?>	
<h2>Atualizar bolsista</h2>
<form action="edit.php?id=<?php echo $bolsista['id']; ?>" method="post">	  
<hr />	  <div class="row">	    
    <div class="form-group col-md-7">	      <label for="name">Nome </label>	                      <input type="text" class="form-control" name="bolsista['name']" value="<?php echo $bolsista['name']; ?>">	    </div>	
    <div class="form-group col-md-3">	      <label for="campo2">Matrícula</label>	              <input type="text" class="form-control" name="bolsista['mat']" value="<?php echo $bolsista['mat']; ?>">	    </div>	
    <div class="form-group col-md-2">	      <label for="campo3">Curso</label>	      <input type="text" class="form-control" name="bolsista['curso']" value="<?php echo $bolsista['curso']; ?>">	    </div>	  </div>	  
   	<div id="actions" class="row">	    
    <div class="col-md-12">	      
    <button type="submit" class="btn btn-primary">Salvar</button>	     
     <a href="index.php" class="btn btn-default">Cancelar</a>	    
     </div>	  </div>	
     </form>	
<?php include(FOOTER_TEMPLATE); ?>