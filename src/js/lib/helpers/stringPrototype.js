
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
};

//String camelize
if (!String.prototype.camelize) {
    String.prototype.camelize = function () {
        return this.substring(0, 1).toUpperCase() + this.substring(1, this.length).toLowerCase();
    };
};

//Cuts of a string after a specific character
if (!String.prototype.stripAllAfter) {
    String.prototype.stripAllAfter = function (delimiter) {
        return this.substring(0, this.lastIndexOf(delimiter));
    }
};

//Creates a contains pollyfill
// determines whether one string may be found within another string
if (!String.prototype.contains) {
    String.prototype.contains = function () {
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
};

if (!String.prototype.hashCode) {
    String.prototype.hashCode = function () {
        var hash = 0, i, chr, len;
        if (this.length == 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
};