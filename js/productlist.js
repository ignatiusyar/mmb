$(function (){
    var categoryId = getSearch("categoryId");
    // console.log(categoryId)
    var totalPage;
    var currentPage = 1;
    breadRender();
    prolistRender();
    function breadRender(){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcategorybyid",
            dataType:"json",
            data:{
                categoryid: categoryId,
            },
            success:function ( info ) {
                console.log(info);
                var cateNameStr = template("BreadTpl",info);
                $('.product_title ul').html( cateNameStr );
            }
        });
    };
    function prolistRender(pageid){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getproductlist",
            dataType:"json",
            data:{
                categoryid:categoryId,
                pageid: 1 || pageid,
            },
            success:function( info ){
                console.log(info);
                var prolistStr = template("prolistTpl",info);
                $('.product_list ul').html( prolistStr );
                totalPage = Math.ceil(info.totalCount / info.pagesize); 
            }
        });
    };
    $(".next").on("click",function(){
        if( currentPage >= totalPage ){
            return false;
        }
        currentPage++;
        prolistRender(currentPage);
    });
    $(".prev").on("click",function(){
        if(currentPage <= 0){
            return false;
        }
        currentPage--;
        prolistRender(currentPage);
    });
})