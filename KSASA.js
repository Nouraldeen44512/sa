$("style").last().append(`
#users .uzr.saad1 .fitimg.u-pic {
border-radius: 100px !important;
margin-top: 12px !important;
height: 55px !important;
margin-left: 9px !important;
width: 55px;
margin-bottom: 13px;
margin-right: 10px;
box-shadow: 0 0 0px rgb(255, 255, 255), inset 0 0 10px rgb(0, 0, 0), 0 0 0 0px #000;
}
#users .uzr.ngem1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.ngem1 .u-msg {
  margin-left: 10px;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.ngem1 .ustat {
width: 12px !important;
border-radius: 50px !important;
height: 12px !important;
min-height: 0% !important;
z-index: 0 !important;
}
#users .uzr.ngem1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.ngem1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.ngem1 {
border: 1px solid #efc33d;
margin-bottom: 3px !important;
margin-top: 2px !important;
border-radius: 4px;
background-image: url(https://up6.cc/2024/02/170890013596941.png);
background-size: cover;
box-shadow: 0 0 0px rgb(255, 255, 255), inset 0 0 5px rgb(255, 255, 255), 0 0 0 0px #000;
}
#users .uzr.ngem1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.ngem1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.ngem1 .u-topic {
  margin-left: 5px;
}
#users .uzr.ngem1 .ngem_star1 {
width: 90px;
margin-top: -11px;
margin-left: -21px;
}


`);
var l_itvngem=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvngem);
        $("#users .uzr:contains('نَغــــــــــــــــم')").addClass('ngem1');
        $("#users .uzr.ngem1 .fitimg.u-pic").append('<img class="ngem_star1" src="https://up6.cc/2024/02/170890024321641.gif">');
		$("#users .uzr.ngem1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://i.ibb.co/47VS4nY/image.png">');
        $("#users .uzr.ngem1 span.uhash, #users .uzr.ngem1 img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.ngem1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('athb1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/nfTocUD0puI" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
