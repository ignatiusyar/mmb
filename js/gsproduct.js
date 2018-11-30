$(function (){
    var shopId = 0;
    var areaId = 0;
    getgsshop();
    getgsshoparea();
    getgsproduct(shopId,areaId);
    
        // $(".second_ul").css({
        //     display:"block"
        // });
        // 切换商城并渲染
        $(".level1_li.jd").on("click",function(){
            $(".second_ul").toggle();
            $(".level2_li").click(function(){
                // console.log(1)
                shopId = $(this).data("shopid");
                // console.log(shopId);
                getgsproduct(shopId,areaId);
            })
        })
        // 切换地区并渲染
        $(".level1_li.hb").on("click",function(){
            $(".second_ul_hb").toggle();
            $(".level2_li2").click(function(){
                areaId = $(this).data("areaid");
                console.log(areaId);
                getgsproduct(shopId,areaId);
                console.log(shopId);
            })
        })
        getgsproduct(shopId,areaId);

    function getgsshop() {
        $.ajax({
            type:"get",
            dataType:"json",
            url:"http://127.0.0.1:9090/api/getgsshop",
            success:function( info ){
                console.log(info);
                var shopNameStr = template("shopNameTpl",info);
                $(".second_ul").html( shopNameStr )
            }
        })
    };
    function getgsshoparea() {
        $.ajax({
            type:"get",
            dataType:"json",
            url:"http://127.0.0.1:9090/api/getgsshoparea",
            success:function( info ){
                console.log(info);
                var shopareaStr = template("shopareaTpl",info);
                $(".second_ul_hb").html( shopareaStr )
            }
        })
    }

    function getgsproduct (shopId,areaId) {
        $.ajax({
            type:"get",
            dataType:"json",
            url:"http://127.0.0.1:9090/api/getgsproduct",
            data:{
                shopid :shopId,
                areaid :areaId
            },
            success:function( info ){
                // console.log(info);
                var gsproductStr = template("gsproductTpl",info);
                $(".gslist ul").html( gsproductStr );
            }
        })
    };

})