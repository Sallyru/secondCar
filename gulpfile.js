var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require('url');
var path = require('path');
var fs = require('fs');
gulp.task("Server", function () {
    gulp.src("./Data")
        .pipe(webserver({
            host: "localhost",
            port: 8090,
            livereload: true,
            directoryListing: {
                path: "./",
                enable: true
            },
            open: true,
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url);
                var mockUrl = path.join(__dirname, "Data", urlObj.query + ".json");
                fs.exists(mockUrl, function (exist) {
                    if (!exist) {
                        res.writeHead(404, {
                            "Content-Type": "text/json;charset=utf8"
                        });
                        res.write("Can not find this File:" + urlObj.query + ".json");
                        res.end();
                    } else {
                        fs.readFile(mockUrl, function (err, data) {
                            if (err) return console.error(err);
                            res.writeHead(200, {
                                "Content-Type": "text/json;charset=utf8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(data.toString());
                        });
                    }
                });
            }
        }));
});