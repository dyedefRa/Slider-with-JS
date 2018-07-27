//TOPLAM RESIM SAYISINI ALALIM
var toplamresimsayisi=$("#slider-resim li").length;
//Kaç resim varsa ona göre #slider-buton a  buton ekleyeceğiz
$("#slider-resim li").each(function(){
var index=$(this).index();
$("#slider-buton").append("<li><a href='#'>"+(index+1)+"</a></li>");
    
});

//Butonların a linklerini ve li lerini manuel oluşturduğumuz için csslerini görmüyor burdan yapmamız gerek 
$("#slider-buton li").css({
    "float":"left",
  
    "-webkit-border-radius":"6px",
    "-moz-border-radius":"6px",
    "margin-right":"5px",
     "border-radius":"6px",
});
$("#slider-buton li a").css({
    "text-decoration":"none",
    "display":"block",
    "padding":"3px 6px",
    "color":"white",
   
});

//sayfa yüklendiğinde ilk manuel li'mize aktif classını verelim
$("#slider-buton li:first").addClass("aktif");

//her manul li yi gizleyip sadece ilkini gösterelim
$("#slider-resim li").hide();
$("#slider-resim li:first").show();


//numaralara(#slider-buton li) tıkladıgımızda ,tıkladıgımız yerden devam etsin
$("#slider-buton li").click(function(){
    var index=$(this).index();
   
    $("#slider-buton li").removeClass("aktif");
    $(this).addClass("aktif");
    $("#slider-resim li").hide();
    $("#slider-resim li:eq("+index+")").fadeIn(600);
    sliderr=index;
});
//resme(#slider-resim li) tıkladıgımızda ,tıkladıgımız yerden devam etsin
$("#slider-resim li").click(function(){
    var index=$(this).index();
   
   
   if(index==toplamresimsayisi-1){
       index=-1;
   }
    $("#slider-buton li").removeClass("aktif");
    $("#slider-buton li:eq("+(index+1)+")").addClass("aktif");
    $("#slider-resim li").hide();
    $("#slider-resim li:eq("+(index+1)+")").fadeIn(600);
  sliderr=index+1;
   
});


//Zaman fonksiyonunu tanımladık
var sliderr=0;
$.slider =function(toplam){
    $("#slider-buton li").removeClass("aktif");
    $("#slider-resim li").hide();
    if(sliderr<toplam-1){
        sliderr++;
       
    $("#slider-buton li:eq("+sliderr+")").addClass("aktif");

    $("#slider-resim li:eq("+sliderr+")").fadeIn(900);
    }
    else{
    $("#slider-buton li:first").addClass("aktif");
    $("#slider-resim li:first").fadeIn(900);
   sliderr=0;
    }
}
//fonksiyonu burada calıstırdık
var fonksiyon=setInterval("$.slider("+toplamresimsayisi+")",2000);

//fare resmin üzerindeyken fonksiyonu durdurduk..
$("#slider").hover(function(){
    clearInterval(fonksiyon);
},function(){
    fonksiyon = setInterval("$.slider("+toplamresimsayisi+")",2000);
});



