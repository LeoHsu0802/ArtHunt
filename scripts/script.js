$(document).ready(function(){
//倒數計時
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

//出價判斷
$("form").submit(function( event ) {
  var newbid = $(this).find("#bid-price").val();
  var newbid = parseInt(newbid)
  var oldbid = $(this).parent().parent().parent().find("#new-bid-price").html();
  var oldbid = parseInt(oldbid)

  if(newbid>oldbid){
    $(this).parent().parent().parent().find("#new-bid-price").html(newbid);
    $(this).parent().parent().parent().find("#bid-ok").text( "出價成功!" ).show().fadeOut( 2000 );
    event.preventDefault();
    return;
    }
    alert("出價需大於當前出價");
    $(this).parent().parent().parent().find("#bid-ok").text( "出價無效!" ).show().fadeOut( 2000 );
    event.preventDefault();
 
});

});
