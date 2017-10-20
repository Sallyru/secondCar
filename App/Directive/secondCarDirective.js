app.directive('shopping', function () {
    return {
        restrict: 'EA',
        templateUrl: './App/View/temp/secondCar.html',
        link: function (scope, ele, attr, ctrl) {
            // tab切换
            $('.title').on('click', 'a', function () {
                $(this).addClass('bg').siblings('a').removeClass('bg');
            });
            // 轮播图
            new Swiper(".swiper-container",{
                autoplay: 1000,
                loop: true,
                observer: true,
                pagination:".swiper-pagination"
            });
            // 横向滚动
            if ($(".scroller>dl").length > 2) {
                $('.scroller').width($('.scroller>dl').width() * $('.scroller>dl').length                       + 200);
                var mySwiper = new IScroll('.time-list',{
                    mouseWheel: true,
                    scrollX:true,
                    click:true
                })
            }
            // 点击加载
            $('#load').on('click', function () {
                $(this).html('加载中...');
                var str = '';
                for (var i=0;i<scope.shopInfo.length; i++){
                    str += '<tr>';
                    for (var k in scope.shopInfo[i].car1){
                        str += '<td> <img src="' + scope.shopInfo[i].car1[k].image + '" alt=""> <h2>' + scope.shopInfo[i].car1[k].name + '</h2> <p>' + scope.shopInfo[i].car1[k].content + '</p> <span>' + scope.shopInfo[i].car1[k].price + '<s>' + scope.shopInfo[i].car1[k].size + '</s></span> </td>';
                    }
                    str += '</tr>';
                }
                setTimeout(function () {
                    $('.like-content table').append(str);
                    $('#load').html('点击加载');
                }, 1000)
            });
        }
    }
});