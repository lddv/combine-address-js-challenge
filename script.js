// Pure Javascript
document.getElementsByClassName("button-block")[0].addEventListener('click', function() {
  var addressLine = document.getElementById('address1').value + ', ' + document.getElementById('address2').value,
      state = document.getElementById('state');
  var cityLine = document.getElementById('city').value + ', ' + state.options[state.selectedIndex].text + ' ' + document.getElementById('zip').value;

  document.getElementById("combined").innerHTML = addressLine + '\n' + cityLine;
});

// jQuery version
// $('.button-block').on('click', function() {
//   var addressLine = $('#address1').val() + ', ' + $('#address2').val();
//   var cityLine = $('#city').val() + ', ' + $('#state option:selected').text() + ' ' + $('#zip').val();
//
//   $('#combined').val(addressLine + '\n' + cityLine);
});
