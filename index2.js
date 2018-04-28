 "use strict";
        $(document).ready(function() {

            $(".image").mouseenter(function() {
                $(this).addClass("size"); //adds size to pictures when mouse hovers
            });

            $(".image").mouseleave(function() {
                $(this).removeClass("size");
                $(this).addClass("leave"); //keeps the 3s transition when removing the size class
            });

        });