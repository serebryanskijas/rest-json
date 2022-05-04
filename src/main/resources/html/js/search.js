function showSearch(title){
    container.empty();
    table.empty();
    tbody.empty();
    table.addClass('table table-striped m-3');
    container.append(table);
    table.append(tbody);

    var requestOptions = {method:'GET',redirect:'follow'};
      fetch(`http://127.0.0.1:8080/books/search?title=${title}`, requestOptions)
      .then(response=>response.json())
      .then(response=>showBook(response));

  }
  function search(){
    let value = document.forms.form.elements.text.value;
    showSearch(value);
  }