$('document').ready(function () {

    $('#langs').on("click", 'div', function () {
        var newLang = $(this).attr('class');
        console.log(newLang);
        controller.setLanguage(newLang);
    });

    $('#consoleCommands').on("click", "p", function () {
        console.log($(this).attr("command"));
        $("#consoleInput").text($(this).attr("command"));

        controller.setRandomColor("div#consoleOutput, div#consoleInput", "border-color");
        controller.setRandomColor("div#consoleCommands, div#consoleCommands *", "border-color");
        controller.setRandomColor("div#langs *", "border-color");
    });

});

