window.addEventListener('load', function ()  {
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
});