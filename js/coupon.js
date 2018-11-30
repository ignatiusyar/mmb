$( function(){
    couponRender();
    function couponRender() {
        $.ajax({
            type:"get",
            dataType:"json",
            url:"http://127.0.0.1:9090/api/getcoupon",
            success:function( info ){
                // console.log( info );
                var couponStr = template("couponTpl",info);
                $(".coupon_wrapper ul").html( couponStr );
            }
        })
    }
})