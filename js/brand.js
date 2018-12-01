$(function(){
    var brandtitleID = getSearch("brandtitleid");
    var productId;
    getTopBrand();
    getBrandProuctList();
    getProductCom();
    function getTopBrand() {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getbrand",
            dataType:"json",
            data:{
                brandtitleid:brandtitleID,
            },
            success:function( info ){
                console.log(info);
                var topBrandStr = template("topBrandTpl",info);
                $(".brandListT10 ul").html( topBrandStr );
            }
        });
    };

    function getBrandProuctList() {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getbrandproductlist",
            dataType:"json",
            data:{
                brandtitleid:brandtitleID,
                pagesize:4
            },
            success:function( info ){
                console.log(info);
                var brandProuctStr = template("brandProuctListTpl",info);
                $(".product_list_wrap").html( brandProuctStr );
                productId = info.result[0].productId;
                // console.log(productId)
                getProductCom(productId);
            } 
        });
    };

    function getProductCom(productId) {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getproductcom",
            dataType:"json",
            data:{
                productid : productId
            },
            success:function( info ){
                console.log(info);
                var productcomStr = template("productcomTpl",info);
                $(".ul-wrapper ul").html( productcomStr );
            } 
        });
    }
})