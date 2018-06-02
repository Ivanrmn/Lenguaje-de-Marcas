$.getJSON('../json/articulo1.json', function(data) {
  var items = [];
 
  $.each(data, function(key, val) {
    items.push('<h3 id="' + key + '">' + val + '</h3');
  });
 
  $('</p>', {
    'class': 'leerJson1',
    html: items.join('')
  }).appendTo('pruebajson');
});