$(function (){
    var couponId = getSearch("couponid");
    getConTitle();
    getCouponList();
    function getConTitle(){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcoupon",
            dataType:"json",
            success:function( info ){
                console.log( info );
                // var colistTitleStr = template("colistTitleTpl",info);
                colistTitleStr = info.result[ couponId ];
                console.log(colistTitleStr.couponTitle);
                $(".header h3").html( colistTitleStr.couponTitle + "优惠券" );
            }
        });
    }
    function getCouponList() {
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcouponproduct",
            dataType:"json",
            data:{
                couponid : couponId
            },
            success:function( info ){
                console.log( info );
                var couponListStr = template("colistTpl",info);
                $(".couList ul").html( couponListStr );
            }
        })
    }
})