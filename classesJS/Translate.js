/**
 * Get language and set in tags what have attriute [translate] translation.
 * @constructor
 * @param  {string} coun - Default country (default value is "en").
 * @param  {Array} lanList - List of support languages (default value is ["en", "pl"]).
 */
function Translate(coun = "en", lanList = ["en", "pl"]) {

    var self = this;
    var country = coun;
    var langsList = lanList;

    /**
      * Autodetect country and set language.
      * That use IP addres to detect country.
      * After detect set language.
      */
    this.getCountry = function () {
        $.get("https://ipinfo.io", function (response) {
            console.log(response.country);
            country = response.country.toLowerCase();
            self.setLang(country);
        }, "jsonp");
    }

    /**
     * Translation all tags what have attribute [translate].
     * If lang === 0 then set default language.
     * @param  {mixed} lang=0
     */
    this.setLang = function (lang = 0) {
        if (lang !== 0)
            country = lang;
        $('html').attr('lang', country);
        $.get('json/langs/' + country + '.json', function (response) {
            $('[translate]').each(function () {
                var tran = $(this).attr('translate');
                toTran = $(this)[0].firstChild;
                toTran.textContent = response[tran];
            });
            //self.setFlags(lang);
        });
    }

    /**
     * Set all flags what have a class name country in elemet what have id langs.
     * That needs images (language.png and languageOff.png) in folder: images/flags/  
     * @param  {string} flag="en"
     */
    this.setFlags = function (flag = "en") {
        for (var i = 0, len = langsList.length; i < len; i++) {
            if (flag == langsList[i]) {
                $('#langs .' + langsList[i]).css('background-image', 'url(images/flags/' + langsList[i] + '.png)');
                continue;
            }
            $('#langs .' + langsList[i]).css('background-image', 'url(images/flags/' + langsList[i] + 'Off.png)');
        }
    }

}