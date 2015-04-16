var Scrolly = {
	phrase : null,
	phrase_num : 1,
	clicks : 0
};

$('.button').click(function(event) {
	event.preventDefault();
	Scrolly.phrase = '.phrase' + Scrolly.phrase_num;
	Scrolly.phrase_num += 1;

	$('.column').each(function(index, value) {
		var column_name = '#c' + index,
			phrase      = $(this).children(Scrolly.phrase);

		if (phrase[0] != undefined) {
			var offset_y = Math.floor($(phrase).parent().scrollTop() + Math.floor($(phrase).position().top));
			if (offset_y != 0) {
				$(column_name).animate({ 'scrollTop': offset_y });
			}
			console.log(column_name, offset_y);
		}	
	});

});

$(function() {
  $(".popup").delay(3000).show(0);
});

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block' || e.style.display=='') e.style.display = 'none';
    else e.style.display = 'block';
}


