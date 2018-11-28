$(function(){
    proRender();
    function proRender() {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcategorytitle",
            dataType:"json",
            success:function( info ) {
                // console.log(info);
                var proTitleStr = template("proTitleTpl",info);
                $('.product_list').html( proTitleStr );
            } 
        });
    };

    $(".product_list").on("click",".title",function () {
        var id = $(this).data('id');
        $(this).find("ul").toggle()
        console.log(id)
        proListRender(id);
        // console.log(id);
    })

    function proListRender( id ) {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcategory",
            dataType:"json",
            data:{
                titleid:id,
            },
            success:function( info ) {
                var proListStr = template("proListTpl",info);
                $('.title ul').html( proListStr );
                console.log(info);
            }
        });
    }

    // 回到顶部
    $(".goTop").on("click",function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });

})