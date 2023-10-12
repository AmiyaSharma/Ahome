String.prototype.capitalize = function() {
    var c = '';
    var s = this.split(' ');
    for (var i = 0; i < s.length; i++) {
        c+= s[i].charAt(0).toUpperCase() + s[i].slice(1) + ' ';
    }
    return c;
}
var name = "john doe";
console.log(name.capitalize());
