$(function() {
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getsitenav",
        dataType:"json",
        success:function( info ) {
            console.log(info);
            var sitenavStr = template("sitenavTpl",info);
            $(".link").html( sitenavStr );
        }
    })
})