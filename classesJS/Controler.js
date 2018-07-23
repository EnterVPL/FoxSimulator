/**
 * One Class to rule them all. 
 * One Class to find them. 
 * One Class to bring them all and in the darkness bind them.
 * @constructor
 */
function Controller() {

    var self = this;
    var trans;

    /**
     * Created Translate object and translation.
     * @param  {string} lang - Default language
     * @param  {array} langList - List of support languages
     */
    this.translate = function (lang, langList) {
        trans = new Translate(lang, langList);
        trans.getCountry();
        trans.setLang();
    }

    /**
     * !!! After use translate !!! 
     * @param  {string} lang
     */
    this.setLanguage = function (lang) {
        trans.setLang(lang);
    }


    /**
     * @param  {string} element - Set text cursor on "element". Use jQuery.(element)
     */
    this.setDefaultFocus = function (element) {
        var val = $(element).text();
        $(element).focus();
    }

    /**
     * @returns {string} HEX color
     */
    this.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * Set random color for <element style="css">
     * @param  {string} element
     * @param  {string} css
     */
    this.setRandomColor = function (element, css) {
        $(element).css(css, self.getRandomColor());
    }

}