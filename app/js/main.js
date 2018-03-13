/*(window).on('resize',function(){
        var win=$(this);
        console.log(win.innerWidth);

        if(win.innerWidth <= 768){
            $('.primary_nav a').css('color','#FF0000');
        }
        else{
            $('.primary_nav a').css('color','#000000');
        }

    }
);*/



function menuresize() {
    var width = $(window).width();
    if (width <= 768) {
     console.log("sadasd");
        $('.luxsitetwo').css('display', 'none');
        $('.work').css('height', '200px');
        $('.endgoing').css('display', 'none');
        $('.luxsite').css('height', '264px');
        $('.luxdesk').css('display', 'none');
        $('.luxoffices').css('display', 'none');
        if(!($('#luxworktwodit').hasClass("col-fhd-1")))
        {
            $('#luxworkoneedit').after('<div class="col-fhd-1" id="luxworktwodit"><div class="work"><div class="goingend" ><div class="endgoingimg"><img src="img/svg/ev.svg"></div><div class="endgoingcontent"><p class="bbaslik">TAMAMLANAN</p><p class="baltbaslik">PROJELER</p></div><div class="btnok"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div></div></div>');
           $('#goingend').css('display', '');
        }


    }

    else {

        $('.luxsitetwo').css('display', 'inline-block');
        $('.endgoing').css('display', '');
        $('.luxsite').css('height', '520px');
        $('.work').css('height', '520px');
        $('.luxdesk').css('display', '');
        $('.luxoffices').css('display', '');
        $('#luxworktwodit').remove();
    }
};

$(document).ready(function(){

        menuresize();

        $(window).on("resize" ,function(){

                menuresize();


            }



        );



    }

);

