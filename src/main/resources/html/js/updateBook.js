$(document).on('click','.updateBook',
function(){
 let id=$(this).attr("id");
 $("#modalUpdate").val(id);

 var requestOptions = {method:'GET',
    headers:{'Content-Type':'application/json'},
    };

fetch(`http://127.0.0.1:8080/books/${id}`, requestOptions)
.then(response=>response.json())
.then(response=>{
$("#modalUpdate #Title").val(response.title)
$("#modalUpdate #ISBN").val(response.isbn)
$("#modalUpdate #Year").val(response.year)
$("#modalUpdate #Authors").val(response.authors)
})
.catch(error=>console.log('error', error));
   });

 $(document).on('click','#buttonUpdate',
async function(){ 

let id=$("#modalUpdate").val();
let title=$('#modalUpdate #Title').val();
let isbn=$('#modalUpdate #ISBN').val();
let year=$('#modalUpdate #Year').val();
let authors=[].concat($('#modalUpdate #Authors').val());

var requestOptions = {method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({id,title,isbn,year,authors})};

    fetch(`http://127.0.0.1:8080/books/${id}`, requestOptions)
   .catch(error=>console.log('error', error));
    
    //console.log(JSON.stringify({id,title,isbn,year,authors}))        

 $('#modalUpdate').modal().hide();
 location.reload();

});