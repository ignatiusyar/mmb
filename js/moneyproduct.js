$(function (){
    var productId = getSearch('productid');
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
        dataType:"json",
        data:{
            productid:productId,
            productCity:"",
        },
        success:function( info ){
            console.log ( info );
            var moneyProductStr = template("moneyproductTpl",info);
            $(".moneyproduct_wrapper").html( moneyProductStr );
        }
    })
})