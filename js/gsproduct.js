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
        $(".jd").on("click",function(){
            $(".second_ul").toggle();
            $(".level2_li").click(function(e){
                // console.log(1)
                // console.log(e)
                e.stopPropagation()
                // e.preventDefault()
            
                $(".second_ul").css({
                    display:"none"
                });
                shopId = $(this).data("shopid");
                console.log(shopId)
                getgsproduct(shopId,areaId);
            })
        });
        // 切换地区并渲染
        $(".hb").on("click",function(){
            // console.log(shopId);
            $(".second_ul_hb").toggle();
            $(".level2_li2").click(function(e){
                e.stopPropagation()
                // e.preventDefault()
                areaId = $(this).data("areaid");
                console.log(areaId);
                
                $(".second_ul_hb").css({
                    display:"none"
                })
                getgsproduct(shopId,areaId);

            })
        });

        // getgsproduct(shopId,areaId);

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