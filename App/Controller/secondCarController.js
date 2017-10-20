app.controller('myController', ['$scope', 'ajaxServer', '$stateParams', function ($scope, ajaxServer, $stateParams) {
    var config = {
        type: 'get',
        url: 'http://localhost:8090/?server' + $stateParams.id
    }
    ajaxServer.ajax(config.type, config.url).then(function (result) {
        $scope.shopInfo = result.data;
    });
}]);