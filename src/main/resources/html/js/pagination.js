function setPage(count,disp,page){
    var arr=[];
    if (page==1)
      arr.push(['Previous',0]);
    else
      arr.push(['Previous',1]);
      arr.push([page,2]);
    let last = (disp+page<count)?disp+page:count;
    for (let i = page+1; i < last; i++)
      arr.push([i,1]);
    if(count>disp+page+1)
      arr.push(['...',0]);
    if (count>disp && page<count)
      arr.push([count,1]);
    if (page==count) 
      arr.push(['Next',0]);
    else
      arr.push(['Next',1]);
    return arr;
    }
  
    function showPagination(page){
      var pagination = $('#pagination');
  
        $('#pagination').empty();
        let arr=setPage(10,3,page);
        for (let i=0; i<arr.length; i++){
        let li = $('<li>').addClass('page-item');
        pagination.append(li);
        let a = $('<a>').addClass('page-link').html(`${arr[i][0]}`);
          li.append(a);
          var offset, next;
          if (arr[i][0]=='Previous'){
            offset=(page-2)*10;
            next=page-1;
          }
          else if (arr[i][0]=='Next'){
            offset=page*10;
            next=page+1;
          }
          else{
            offset=(arr[i][0]-1)*10;
            next=arr[i][0];
          }
          a.attr('href',`javascript:showBooks(10,${offset}); showPagination(${next});`);
  
          if (arr[i][1]==0){
            a.attr('href','#');
            li.addClass('disabled');
          }
          if (arr[i][1]==2){
            li.addClass('active');
          }
  
        }
    }