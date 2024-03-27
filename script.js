document.addEventListener('DOMContentLoaded', function () {
    navbar_menu();
    function navbar_menu() {
        $(".burger").click(function() {
            $(this).toggleClass('open');
            if($(".burger-menu").is(":visible")) {
               $(".burger-menu").removeClass("open");
            }
        
            else {
                $(".burger-menu").addClass("open");
            }
        });
    }
    $('.burger-menu__link').click(function(e) {
        e.preventDefault();
        
        var $list = $(this).find('.burger-menu__dropdown');
        var $image = $(this).find('.vector');
    
        $list.toggle();
        
        // Переворачиваем изображение на 180 градусов
        $image.toggleClass('rotate180');
      });
});