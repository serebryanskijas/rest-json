$(document).on('click', '.deleteBook', function(){
    let id=$(this).attr('id');
    $('#modalDelete').val(id);  
  });
    

    $(document).on('click', '#buttonDelete', function(){
    let id=$('#modalDelete').val();
    deleteBook(id);
    });   
    
    async function deleteBook(id){
 
  var requestOptions = {method:'DELETE',
   headers:{'Content-Type':'application/json'}};

  fetch(`http://127.0.0.1:8080/books/${id}`, requestOptions)
   .catch(error=>console.log('error', error));

  $('#madalDelete').modal().hide();
  location.reload();
}