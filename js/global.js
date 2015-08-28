/**
 * Global.js
 **/

//Namespacing
var namespace = function (name, separator, container) {
    var ns = name.split(separator || '.'),
        o = container || window,
        i,
        len;
    for (i = 0, len = ns.length; i < len; i++) {
        o = o[ns[i]] = o[ns[i]] || {};
    }
    return o;
};

//String formatting
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}