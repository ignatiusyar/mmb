$(function (){
    var productId = getSearch('productid');
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        dataType:"json",
        data:{
            productid:productId,
        },
        success:function( info ){
            console.log ( info );
            var discountStr = template("discountTpl",info);
            $(".discount_wrapper").html( discountStr );
        }
    })
})