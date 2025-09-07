<!DOCTYPE html>	
<html>	
<head>	    
<meta charset="utf-8">	    
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
 
<title>SISTEMAS DE HORAS</title>	
 <meta name="description" content="">	   
  <meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>    
    <style>	        
    body {	            
        padding-top: 50px;	            
        padding-bottom: 20px;	       
         }	    
    @import "scss/bootstrap";  
        
    </style>	    
    <link rel="stylesheet" href="<?php echo BASEURL; ?>css/style.css">	    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">	
    </head>	
    <body>	
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">	     
     <div class="container">	        <div class="navbar-header">	         
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">	            
      <span class="sr-only">Toggle navigation</span>	            
      <span class="icon-bar"></span>	            
      <span class="icon-bar"></span>	            
      <span class="icon-bar"></span>	          
      </button>	   
       <a href="<?php echo BASEURL; ?>index.php" class="navbar-brand">HORAS DE BOLSISTAS</a>	 </div>	        
       <div id="navbar" class="navbar-collapse collapse">	         
        <ul class="nav navbar-nav">          	            
        <li class="dropdown">	                
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">	                   
         Bolsistas <span class="caret"></span>	                
         </a>	               
          <ul class="dropdown-menu">	                    
        <li><a href="<?php echo BASEURL; ?>bolsistas">Gerenciar bolsistas</a></li>	                    
        <li><a href="<?php echo BASEURL; ?>bolsistas/add.php">Novo bolsista</a></li>	                
        </ul>	            
        </li>	          
        </ul>	        
        
        <div id="navbar" class="navbar-collapse collapse">	         
        <ul class="nav navbar-nav">          	            
        <li class="dropdown">	                
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">	                   
         Atividades <span class="caret"></span>	                
         </a>	               
          <ul class="dropdown-menu">	                    
        <li><a href="<?php echo BASEURL; ?>atividades">Gerenciar atividades</a></li>	                    
        <li><a href="<?php echo BASEURL; ?>atividades/add.php">Nova atividade</a></li>	                
        </ul>	            
        </li>	          
        </ul>	        
        </div><!--/.navbar-collapse -->
          </div>	    
          </nav>	
    <main class="container">