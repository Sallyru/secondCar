app.factory('ajaxServer', function ($http, $q) {
    return {
        ajax: function (type, url) {
            var def = $q.defer();
            if (type === 'JSONP' || type === 'jsonp') {
                $.ajax({
                    url: url,
                    dataType: type,
                    success: function (data) {
                        def.resolve(data);
                    },
                    error: function (error) {
                        def.reject(error);
                    }
                });
            } else {
                $http({
                    method: type,
                    url: url
                }).then(function (data) {
                    def.resolve(data);
                }, function (error) {
                    def.reject(error);
                });
            }
            return def.promise;
        }
    }
});