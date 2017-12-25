function show() {
  /* Cache the collection. */
  var extra = document.getElementsByClassName('extra');

  /* Iterate over every element in the collection. */
  [].forEach.call(extra, function (element) {
     element.style.display = 'block';
  });
}

function hide() {
  /* Cache the collection. */
  var extra = document.getElementsByClassName('extra');

  /* Iterate over every element in the collection. */
  [].forEach.call(extra, function (element) {
     element.style.display = 'none';
  });
}
