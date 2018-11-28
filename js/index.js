$(function(){
    MenuRender();  // 进入页面并渲染菜单
    onSaleRender(); // 进入页面并渲染菜单


    // 获取菜单数据
    function MenuRender() {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getindexmenu",
            dataType:"json",
            success:function ( info ) {
                // console.log(info);
                var MenuStr = template("menuTpl", info);
                $('.nav .menu').html( MenuStr );
            }
        })
    };
    
    // 获取促销数据
    function onSaleRender(){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            dataType:"json",
            success:function( info ) {
                // console.log(info);
                var saleStr = template("saleTpl",info);
                $('.sale_content ul').html( saleStr );
                // console.log(info);
                info.result.forEach(function( v, i ){
                    var str = v.productComCount.slice(1,2);
                    // console.log(str)
                })
            }
        })
    };
    // var moreBtn = $('li:nth-child(8)');
    
    // 获取更多,点击关闭和打开其他
    $('.menu').on("click","li:nth-child(8) a",function( e ){
        e.preventDefault();
        $('.menu li:nth-last-child( -n + 4 )' ).toggle();
    });

    $(".goTop").on("click",function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });


})