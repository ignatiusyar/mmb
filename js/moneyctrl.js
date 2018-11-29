$(function () {
    var pageid; // 分页id
    var totalPage; // 总页数
    var currentPage = 1; // 当前页

    // 进入页面 调用 渲染
    getMoneyCtrlList();


    // 通过ajax获取省钱列表
    function getMoneyCtrlList() {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            dataType: "json",
            data: {
                pageid: currentPage,
            },
            success: function (info) {
                // console.log(info);
                var moneyCtrlStr = template("moneyctrlTpl", info);
                $(".recommen_product ul").html(moneyCtrlStr);
                totalPage = Math.ceil(info.totalCount / info.pagesize);
                // console.log(totalPage);
                setNextPages(currentPage);
            }
        });
    };

    function setNextPages() {
        // 遍历循环 select 内容
        var htmlString = "";
        for (var i = 0; i < totalPage; i++) {
            if (i + 1 == currentPage) {
                htmlString += "<option selected value='" + currentPage + "'>" + currentPage + "/" + totalPage + "</option>"
            } else {
                htmlString += "<option value='" + (i + 1) + "'>" + (i + 1) + "/" + totalPage + "</option>"
            }
        }
        $("#selectPage").html(htmlString)
    };

    $(".next").on("click", function () {
        if (currentPage > totalPage) {
            return false;
        }
        currentPage++;
        setNextPages();
        getMoneyCtrlList();
    });
    $(".prev").on("click", function () {
        if (currentPage <= 0) {
            return false;
        } else
        currentPage--;
        setNextPages();
        getMoneyCtrlList();
    });

    // 更改 select 内容进行更改
    $("#selectPage").change(function () {
        currentPage = $("#selectPage option:selected").val()
        getMoneyCtrlList() // 渲染页面
    })
})