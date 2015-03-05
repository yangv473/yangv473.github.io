var headers = ["WASH", "PAY", "DRY"];
var headerposition = 0;

$('.link').click(function() {
  var windows_array = $(this).data('windows');

  open_windows(windows_array);
  move_headers();
  $(this).hide();

});


function open_windows(windows_array) {
  windows_array = eval(windows_array);

  for (x = 0; x < windows_array.length; x++) {
    var page   = windows_array[x][0],
        width  = windows_array[x][1],
        height = windows_array[x][2],
        top    = windows_array[x][3],
        left   = windows_array[x][4];

    window.open(page, 'page-' + x, "menubar=0, resizable=0, scrollbars=0, width=" + width + ",height=" + height +", top=" + top + ",left=" + left);
  }
}

var audio = $("#mySoundClip")[0];
$("nav a").mouseenter(function() {
  audio.play();
});

function move_headers() {
  headers.unshift(headers.pop());
  console.log(headers);
  $(".header-left").html(headers[0]);
  $(".header-top").html(headers[1]);
  $(".header-right").html(headers[2]);

}
