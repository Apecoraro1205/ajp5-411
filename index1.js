"use strict";
        $(document).ready(function() {

            $(".image").mouseenter(function() {
                $(this).stop().animate({ //adds height and width when hovering
                    height: "400px",
                    width: "500px",
                }, 3000);
            });

            $(".image").mouseleave(function() {
                $(this).stop().animate({ //takes image back to normal size when mouse leaves
                    height: "200px",
                    width: "250px",
                }, 3000);
            });

        });