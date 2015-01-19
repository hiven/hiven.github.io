var placeSearch, autocomplete;
var componentForm = {
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'long_name',
    country: 'long_name',
    postal_code: 'short_name'
};
function clear(){
    console.log("clr");
    $("input.hidden").val("");
}
function initialize() {
    autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')), {
        types: ['geocode']
    });
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        fillInAddress();
    });
}

function fillInAddress() {
    var place = autocomplete.getPlace();   

    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
        }
    }
}

$(document).ready(function(){
    $( "#autocomplete" ).on('keyup',function() { 
        $("input.hidden").val('');
    });
});
