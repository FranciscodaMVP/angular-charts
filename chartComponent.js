angular
.module ('chartMaker', [])
.controller('chartMakerController', chartMakerController)
//.factory('chartMakerService', chartMakerService);
.directive('customChart', chart);


function chartMakerController($scope, title, dataSource, type, width, height) {
    $scope.title = title;
    $scope.dataSource = dataSource;
    $scope.type = type;
    $scope.width = width;
    $scope.height = height;
    char($scope);
}

function chart($scope) {
    var ctx = document.getElementById(originCanvas);
    ctx.width = width;
    ctx.height = height;

    var theChart = new Chart (ctx, {
        type: type,
        datasets: [{
            labal: title,
            data: data,
            borderWidth: 1
        }]
    })


}

