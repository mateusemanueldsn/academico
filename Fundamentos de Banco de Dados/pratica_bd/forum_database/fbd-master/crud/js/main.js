/**	 * Passa os dados do bolsista para o Modal, e atualiza o link para exclusão	 */	
$('#delete-modal').on('show.bs.modal', function (event) {	  	 
     var button = $(event.relatedTarget);	  
     var id = button.data('bolsista');	  	  
     var modal = $(this);	  
     modal.find('.modal-title').text('Excluir bolsista #' + id);	  
     modal.find('#confirm').attr('href', 'delete.php?id=' + id);	
    })