        "use strict";
        $(document).ready(function() {
            $(".slidingimage").click(function() {
                var imgPosition = $(this).position(); // position returns left

                if (imgPosition.left >= 300) {
                    $(this).stop().animate({
                        left: 1
                    }, 2000);
                } else {
                    $(this).stop().animate({
                        left: 300 //slides image right
                    }, 2000);
                }

            });
        });