document.addEventListener('DOMContentLoaded', function () {
    navbar_menu();
    function navbar_menu() {
        $(".burger").click(function() {
    
            if($(".burger-menu").is(":visible")) {
               $(".burger-menu").removeClass("open");
            }
        
            else {
                $(".burger-menu").addClass("open");
            }
        
        });
    }
});