$(document).ready(function(){

$('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('剩下 %D 天 %H 時 %M 分 %S 秒'));
    });
  });

$(".art-box").mouseover(function(){
  $(this).css('box-shadow', '9px 9px 7px #888');
});
$(".art-box").mouseout(function(){
  $(this).css('box-shadow', 'none');
});

var bla = $('#bid-price').val();
$('#new-bid-price').val(bla);






})
/*
function bidding(){
  var bid=document.getElementById("bid-price").value;
  document.getElementsById("new-bid-price").innerHTML='$'+bid;
}
*/