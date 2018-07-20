$('document').ready(function () {

    $('#langs').on("click", 'div', function () {
        var trans = new translate();
        var newLang = $(this).attr('class');
        console.log(newLang);
        trans.setLang(newLang);
    });

});

