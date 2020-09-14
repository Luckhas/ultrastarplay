$(document).ready(function(){
    $(".carousel").carousel({
        interval: 10000,
    });

    $(".icon-wrapper").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"/></svg>');

    localStorage.setItem("status", "0");

    $(".whats-logo").click(
        function() {
            status = localStorage.getItem("status")
            if(status == 0) {
                $("#whastsapp").css({"background-color" : "white", "box-shadow" : "0 0 15px"});
                $(".whats-numbers").css("display", "initial");
                localStorage.setItem("status", "1")
            } else {
                $("#whastsapp").css({"background-color" : "transparent", "box-shadow" : "none"});
                $(".whats-numbers").css("display", "none");
                localStorage.setItem("status", "0");

            }
        }
    )
});
