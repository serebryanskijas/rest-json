$(document).on('click','#buttonAdd',
async function(){
    let id=$('#modalAdd #Id').val();
    let title=$('#modalAdd #Title').val();
    let isbn=$('#modalAdd #ISBN').val();
    let year=$('#modalAdd #Year').val();
    let authors=[].concat($('#modalAdd #Authors').val());

    var requestOptions = {method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({id,title,isbn,year,authors})};

 fetch("http://127.0.0.1:8080/books", requestOptions)
 .catch(error=>console.log('error', error));

 $('#madalAdd').modal().hide();
 location.reload();
});