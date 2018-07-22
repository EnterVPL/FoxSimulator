$('document').ready(function () {

    $("#consoleInput").keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            var command = $(this).text();
            $(this).text("");
        }
    });

});