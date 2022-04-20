var table =$('<table>');
        table.addClass('table table-striped m-3');
        $('#container').append(table);
        var tbody=$('<tbody>');
        table.append(tbody);

        var requestOptions = {method:'GET',redirect:'follow'};
        fetch("http://127.0.0.1:8080/books", requestOptions)
        .then(response=>response.json())
        .then(response=>showBook(response));

        function showBook(response){
            //Zagolovok
            var tr = $('<tr>');
                tbody.append(tr);
                tr.append($('<th>').html('Title'));
                tr.append($('<th>').html('Isbn'));
                tr.append($('<th>').html('Year'));
                tr.append($('<th>').html('Authors'));

                //Data
            for (let i=0; i<response.length; i++){
                var tr = $('<tr>');
                tbody.append(tr);
                var id = response[i].id;
                var title = $('<td>').html(response[i].title);
                var isbn = $('<td>').html(response[i].isbn);
                var year = $('<td>').html(response[i].year);
                var authors = $('<td>').html(response[i].authors);
                    tr.append(title);
                    tr.append(isbn);
                    tr.append(year);
                    tr.append(authors);


                    var updateButton=$('<td>').append(
                        `<a href="" id="${id}" class="updateBook"           
                        data-bs-toggle="modal" data-bs-target="#modalUpdate">
                        <span class="btn-label"><i class="fa fa-pen"></i></span>            
                        </a>`);
                            tr.append(updateButton);

                    var deleteButton=$('<td>').append(
                        `<a href="" id="${id}" class="deleteBook"           
                        data-bs-toggle="modal" data-bs-target="#modalDelete">
                        <span class="btn-label"><i class="fa fa-eraser"></i></span>            
                        </a>`);
                            tr.append(deleteButton);

                            
                            tbody.append(tr);
                    }
        }