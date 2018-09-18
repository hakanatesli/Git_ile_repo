jQuery(document).ready(function($){
    $(window).scroll(function(){
        var scrollPosition=$(window).scrollTop(),
            navbar=$('.fixed-top');

        if(scrollPosition>400){
            navbar.addClass('change-fix-top');
        }else{
            navbar.removeClass('change-fix-top');
        }
    });
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });


  $(document).ready(function(){
    $("#nerede").click(function(){
        $("#neredep").slideToggle("slow");
    });
    $("#din").click(function(){
      $("#dinp").slideToggle("slow");
    });
    $("#iklim").click(function(){
    $("#iklimp").slideToggle("slow");
    });
    $("#dil").click(function(){
      $("#dilp").slideToggle("slow");
  });
  $("#zaman").click(function(){
    $("#zamanp").slideToggle("slow");
  });
  $("#hediye").click(function(){
  $("#hediyep").slideToggle("slow");
  });
        

});


var mod = angular.module('Modul', []);
          mod.controller('Kontrol', function($scope) {
              $scope.arama='';
              $scope.uyeler=[
                            {tur:'Siyaset',gun:'Pazartesi',haber:'Fransa\'da yeni bir aşırı sağcı parti kuruldu.'},
                            {tur:'Siyaset',gun:'Salı',haber:'Fransa 68 Mayıs\'ının 50. yılında yeniden sorguluyor.'},
                            {tur:'Siyaset',gun:'Cuma',haber:'Fransa\'da grevler turizme darbe vurdu.'},
                            {tur:'Siyaset',gun:'Pazar',haber:'Macron\'un politikaları Paris\'te protesto edildi'},
                            {tur:'Magazin',gun:'Pazartesi',haber:'Alişan Nişanlandı.'},
                            {tur:'Magazin',gun:'Salı',haber:'Yetkin Dikinciler baba oldu.'},
                            {tur:'Magazin',gun:'Cuma',haber:'Kylie Jenner anne oldu.'},
                            {tur:'Magazin',gun:'Pazar',haber:'La Casa De Papel 3.sezon geliyor.'},
                            {tur:'Spor',gun:'Pazartesi',haber:'Fransa Ligine Hamit Altıntopun golü damga vurdu.'},
                            {tur:'Spor',gun:'Salı',haber:'Üçüncü lig takımı Les Herbiers kupada finalde.'},
                            {tur:'Spor',gun:'Cuma',haber:'PSG kupalara ambargo koydu.'},
                            {tur:'Spor',gun:'Pazar',haber:'Reklamı Kapat PSG\'de Emery dönemi sona eriyor.'},
                            ];
          });