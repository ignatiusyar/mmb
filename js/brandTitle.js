$(function(){
    $.ajax({
        type:"get",
        dataType:"json",
        url:"http://127.0.0.1:9090/api/getbrandtitle",
        success:function( info ){
            console.log(info );
            var brandTitleStr = template("brandTitleTpl",info);
            $(".ul-wrapper ul").html( brandTitleStr );
        }
    })
})