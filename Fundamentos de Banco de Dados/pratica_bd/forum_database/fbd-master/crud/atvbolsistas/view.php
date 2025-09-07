<?php 		require_once('functions.php'); 		
view($_GET['id']);	?>	
<?php include(HEADER_TEMPLATE); ?>	
<h2>Bolsista <?php echo $atvbolsista['id']; ?></h2>	<hr>	
<?php if (!empty($_SESSION['message'])) : ?>		
<div class="alert alert-<?php echo $_SESSION['type']; ?>"><?php echo $_SESSION['message']; ?></div>
	<?php endif; ?>	
<dl class="dl-horizontal">		
<?php if ($atv) : ?>
	<?php foreach ($atv as $atvb) : ?>	
			
	<dt>Atividade :</dt>		<dd><?php echo $atvb['nome']; ?></dd>	
	<dt>Horas:</dt>		<dd><?php echo $atvb['horas']; ?></dd>		
    <?php 
    endforeach;
     ?>	
     <?php else : ?>		
     <tr>			
     <td colspan="6">Nenhum registro encontrado.</td>		
     </tr>	
     <?php 
    endif; 
    ?>	
	<dt>Nome :</dt>		<dd><?php echo $atvbolsista['name']; ?></dd>	
	<dt>Total:</dt>		<dd><?php echo $atvbolsista['total']; ?></dd>
<div id="actions" class="row">		
<div class="col-md-12">		 
<a href="index.php" class="btn btn-default">Voltar</a>		
</div>	</div>	
<?php include(FOOTER_TEMPLATE); ?>