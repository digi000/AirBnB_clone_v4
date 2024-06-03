window.addEventListener('load', function () {
  
    let selectedAmenities = {};
  
    $('input[type="checkbox"]').change(function() {
      if ($(this).prop('checked')) {
        selectedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete selectedAmenities[$(this).attr('data-id')];
      }
  
      let amenitiesList = Object.values(selectedAmenities);
      $('div.amenities h4').text(amenitiesList.join(', '));
    });
  
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
    $.get('http://0.0.0.0:5001/api/v1/places_search/', function(data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
  });