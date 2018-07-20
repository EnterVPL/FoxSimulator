function translate() {

    var self = this;
    var country = 'en';
    var langsList = ["en", "pl"];

    this.getCountry = function() {
        $.get("https://ipinfo.io", function(response) {
            console.log(response.country);
            country = response.country.toLowerCase();
            self.setLang(country);
        }, "jsonp");
    }

    this.setLang = function(lang = 0) {
        if(lang !== 0)
            country = lang;
        $('html').attr('lang', country);
        $.get('json/langs/'+country+'.json', function(response){
            $('[translate]').each(function(){
                var tran = $(this).attr('translate');
                toTran = $(this)[0].firstChild;
                toTran.textContent = response[tran];
            });
            self.setFlags(lang);
        });
    }
   
    this.setFlags = function(flag = "en") {
        for(var i = 0, len = langsList.length; i < len; i++) {
            if(flag == langsList[i]) {
                $('#langs .'+langsList[i]).css('background-image', 'url(images/flags/'+langsList[i]+'.png)');
                continue;
            }
            $('#langs .'+langsList[i]).css('background-image', 'url(images/flags/'+langsList[i]+'Off.png)');
        }
    }

}