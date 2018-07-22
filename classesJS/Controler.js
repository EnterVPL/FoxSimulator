/**
 * One Class to rule them all. 
 * One Class to find them. 
 * One Class to bring them all and in the darkness bind them.
 * @constructor
 */
function Controller() {

    var self = this;

    /**
     * Created Translate object and translation.
     * @param  {string} lang - Default language
     * @param  {array} langList - List of support languages
     */
    this.translate = function (lang, langList) {
        var trans = new Translate(lang, langList);
        trans.getCountry();
        trans.setLang();
    }
    /**
     * @param  {string} element - Set text cursor on "element". Use jQuery.(element)
     */
    this.setDefaultFocus = function (element) {
        var val = $(element).text();
        $(element).focus();
    }

}