$('document').ready(function () {

    $('#langs').on("click", 'div', function () {
        var trans = new Translate();
        var newLang = $(this).attr('class');
        console.log(newLang);
        trans.setLang(newLang);
    });

    $('#consoleCommands').on("click", "p", function () {
        console.log($(this).attr("command"));
        $("#consoleInput").text($(this).attr("command"));
    });

});

