$(document).ready(function(){
  $('#submit').click(function(event){
    event.preventDefault();
    var name=$('#search-name').val();
    search(name);
  })
})

function search(name) {
  var api = 'http://www.strudel.org.uk/lookUP/json/?name='+name;
  // requires "jsonp" datatype.
  // debugger
  $.ajax({
    method: "GET",
    url: api,
    dataType: "jsonp",
    jsonpCallback: "showimage"
  });
}

function showimage(json){
  // console.log("hello")
  // debugger
  var url = json.image.src;
  $('#preview').html(`<div><img src="${url}"/></div>`);
}


