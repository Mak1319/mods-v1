var basename = function (pathstring, ext) {
    var separator = '/';
    var pathArray = pathstring.split(separator);
    var base = pathArray[pathArray.length - 1];
    if (ext)
        return base.replace(ext, '');
    return base;
};
var dirname = function (pathstring) {
    var separator = '/';
    var pathWithOutLastSeparator = pathstring.replace(/\/$/gi, '');
    var pathArray = pathWithOutLastSeparator.split(separator);
    pathArray.length -= 1;
    return pathArray.join(separator);
};
var extname = function (pathstring) {
    var separator = '/';
    var pathArray = pathstring.split(separator);
    var base = pathArray[pathArray.length - 1];
    var result = base.match(/(\.[a-zA-Z0-9]+)$/gi);
    return result ? result[0] : '';
};
var join = function () {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    var allPathsArray = [];
    paths.forEach(function (path) {
        allPathsArray = allPathsArray.concat(path.split('/'));
    });
    console.log(allPathsArray);
    return "";
};
join('/msjsk', 'jsks', '../hsjsjj');
// join()
