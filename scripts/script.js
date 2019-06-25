$(document).ready(function(){

$('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('剩下 %D 天 %H 時 %M 分 %S 秒'));
    });
  });
//art-box陰影
$(".art-box").mouseover(function(){
  $(this).css('box-shadow', '9px 9px 7px #888');
});
$(".art-box").mouseout(function(){
  $(this).css('box-shadow', 'none');
});
//art-bid-btn 變暗
$(".art-bid-btn").mouseover(function(){
  $(this).css('background', 'rgb(219, 117, 0)');
});
$(".art-bid-btn").mouseout(function(){
  $(this).css('background', 'rgb(255, 153, 0)');
});

$(document).on("click","#bid-btn",function() {
  var bid = $(this).prev().prev("#bid-price").val();
  $(this).parent().parent().parent().find("#new-bid-price").html(bid);
});


})
/*
function bidding(){
  var bid=document.getElementById("bid-price").value;
  document.getElementsById("new-bid-price").innerHTML='$'+bid;
}
*/