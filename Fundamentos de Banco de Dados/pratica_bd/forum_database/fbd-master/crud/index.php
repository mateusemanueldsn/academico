<?php require_once 'conf.php'; ?>	
<?php require_once DBAPI; ?>	
<?php include(HEADER_TEMPLATE); ?>	
<?php $db = open_database(); ?>	
<h1>Sistema de horas de bolsistas</h1>	<hr/>	
<?php if ($db) : ?>	
<div class="row">		
<div class="col-xs-6 col-sm-3 col-md-2">			
<a href="atvbolsistas/add.php" class="btn btn-primary">				
<div class="row">					
<div class="col-xs-12 text-center">						
<i class="fa fa-plus fa-5x"></i>					
</div>					
<div class="col-xs-12 text-center">						
<p>Cadastrar horas</p>					
</div>				
</div>			
</a>		
</div>	
	<div class="col-xs-6 col-sm-3 col-md-2">			
    <a href="bolsistas" class="btn btn-default">				
    <div class="row">					
    <div class="col-xs-12 text-center">						
    <i class="fa fa-user fa-5x"></i>					
    </div>					
    <div class="col-xs-12 text-center">						
    <p>Bolsistas</p>					
    </div>				
    </div>			
    </a>		
    </div>	
   	

    <div class="col-xs-6 col-sm-3 col-md-2">			
    <a href="atividades" class="btn btn-default">				
    <div class="row">					
    <div class="col-xs-12 text-center">						
    <i class="fa fa-bars fa-5x"></i>					
    </div>					
    <div class="col-xs-12 text-center">						
    <p>Atividades</p>					
    </div>				
    </div>			
    </a>		
    </div>	
   	

    <div class="col-xs-6 col-sm-3 col-md-2">			
    <a href="atvbolsistas" class="btn btn-default">				
    <div class="row">					
    <div class="col-xs-12 text-center">						
    <i class="fa fa-hourglass fa-5x"></i>					
    </div>					
    <div class="col-xs-12 text-center">						
    <p>Horas de bolsistas</p>					
    </div>				
    </div>			
    </a>		
    </div>	
    </div>

<?php else : ?>		
<div class="alert alert-danger" role="alert">			
<p><strong>ERRO:</strong> Não foi possível Conectar ao Banco de Dados!</p>		
</div>	
<?php 
endif;
 ?>	
<?php 
include(FOOTER_TEMPLATE); 
?>