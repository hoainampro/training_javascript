var list =  new Array();
    var items  =  document.getElementById('name');
    var submit = document.getElementById('submit');
    var ds = document.getElementById('list');

    submit.addEventListener('click', function() {
      var html ='';
      var item = items.value;
      list.push(item);
      console.log(list);
      // list.forEach(function(s){
      //   html += '<li>'  +list +'</li>';

      // });
      //ds.innerHTML = html;

      for (let value of list){
        html += '<li>'  +value+ '<input type="submit" name="del" id="del">' + '</li>';
      }
      ds.innerHTML = html;
    });
