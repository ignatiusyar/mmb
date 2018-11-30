$(function (){
    getSlideMenu();
    proRender();
    var titleid = 0;
    $(".li_list").on("click","li",function(){   
        titleid = $(this).data("id");
        
        console.log(titleid);
        proRender(titleid);
        // console.log($(this).children().siblings())
        $(this).children().addClass("active").siblings().removeClass('active');
    })
    function getSlideMenu(){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
            dataType:"json",
            success:function( info ){
                // console.log(info)
                var slideMenuStr = template("slideMenuTpl",info);
                $(".baicai-title ul").html( slideMenuStr );
                // 设置ul的宽度
                var lis = $(".li_list").children();
                var ullength = 0;
                lis.each(function( v, i ){
                    ullength += $(this).width();
                    // console.log(ullength)
                });
                var ul = $(".li_list").css({
                    "width":ullength
                });
                mui('.mui-scroll-wrapper').scroll({
                    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                });
            }
        })
    };
        // 商品列表渲染
        function proRender(titleid){
            $.ajax({
                type:"get",
                dataType:"json",
                url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
                data:{
                    titleid:titleid
                },
                success:function(info){
                    // console.log(info);
                    var prolistStr = template("proListTpl",info);
                    $(".baicai-list ul").html( prolistStr );
                }
            });
        }
        proRender(titleid);
})