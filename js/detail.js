$(function (){
    var productId = getSearch("productId");
    var categoryId;
    var proName;
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproduct",
        dataType:"json",
        data:{
            productid:productId,
        },
        success:function( info ){
            // console.log(info);
            categoryId = info.result[0].categoryId;
            // console.log(info.result[0].productName);
            proName = info.result[0].productName;
            // console.log(proName)
            proName = proName.split(" ")[0];
            // console.log(proName)
            getProNameById();
            getComment();
            // console.log(categoryId);
            var proDetailStr = template("proDetailTpl",info);
            $(".product_list").html( proDetailStr );
        }
    });
    function getProNameById (){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcategorybyid",
            dataType:"json",
            data:{
                categoryid : categoryId,
            },
            success:function( info ){
                // console.log( info );
                // console.log(categoryId)
                // console.log(proName);
                var BreadStr = template("BreadTpl",info);
                $(".product_title ul").html( BreadStr );
                $('.product_title li:last-of-type a').text( proName + " > " );
            }
        })
    };
    function getComment() {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getproductcom",
            dataType:"json",
            data:{
                productid:productId,
            },
            success:function( info ) {
                console.log(info);
                var CommentStr = template("commentTpl",info);
                $(".product-com-list ul").html( CommentStr );
            }
        })
    }
})