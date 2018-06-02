/*
    * 商品为单一时将商品作为第一列，并合并
    * 地区为单一时将地区为第一列，并合并
    * 都为一个时，商品第一，地区第二
    * 都多于一个时，商品第一，地区第二，并合并
    */

var showTable = function(data,countProduct,countRegion){
    //画折线图
    drawLine(data,true)
    //进行判断
    if (countProduct <= countRegion){
        makeTable(countProduct,countRegion,true,data.sort(sortByProduct))
    } else {
        makeTable(countRegion,countProduct,false,data.sort(sortByRegion))
    }
};

var makeTable = function (numOfFirst, numOfSecond, tableType, data) {
    var tabNode = document.createElement("table");
    //插入表头
    var trHead = tabNode.insertRow();

    //插入数据
    var count = 0;
    if (!tableType) {
        trHead.innerHTML = `<table id="result-table"><tr><td id="head">地区</td><td>产品</td><td>一月</td><td>二月</td><td>三月</td><td>四月</td><td>五月</td><td>六月</td><td>七月</td><td>八月</td><td>九月</td><td>十月</td><td>十一月</td><td>十二月</td></tr>`;
        for (var x = 0; x < numOfFirst; x++) {
            for (var y = 0; y < numOfSecond; y++) {
                var regions = data[count].region;
                var products = data[count].product;
                var sales = data[count].sale;
                var trBody = tabNode.insertRow();
                var tableFirst = '';
                if (y == 0) {
                    tableFirst = `<tr><td id="first-col" rowspan = ${numOfSecond}>${regions}</td><td>${products}</td>`
                } else {
                    tableFirst = `<tr><td id="other">${products}</td>`
                }
                var t = `<td>${sales[0]}</td><td>${sales[1]}</td><td>${sales[2]}</td><td>${sales[3]}</td><td>${sales[4]}</td><td>${sales[5]}</td><td>${sales[6]}</td><td>${sales[7]}</td><td>${sales[8]}</td><td>${sales[9]}</td><td>${sales[10]}</td><td>${sales[11]}</td></tr>`;
                trBody.innerHTML = tableFirst + t;
                count++
            }
        }
    } else {
        trHead.innerHTML = `<table id="result-table"><tr><td id="table">产品</td><td>地区</td><td>一月</td><td>二月</td><td>三月</td><td>四月</td><td>五月</td><td>六月</td><td>七月</td><td>八月</td><td>九月</td><td>十月</td><td>十一月</td><td>十二月</td></tr>`;
        for (var x = 0; x < numOfFirst; x++) {
            for (var y = 0; y < numOfSecond; y++) {
                var regions = data[count].region;
                var products = data[count].product;
                var sales = data[count].sale;
                var trBody = tabNode.insertRow();
                var tableFirst = '';
                if (y == 0) {
                    tableFirst = `<tr><td id="first-col" rowspan = ${numOfSecond}>${products}</td><td>${regions}</td>`
                } else {
                    tableFirst = `<tr><td>${regions}</td>`
                }
                var t = `<td>${sales[0]}</td><td>${sales[1]}</td><td>${sales[2]}</td><td>${sales[3]}</td><td>${sales[4]}</td><td>${sales[5]}</td><td>${sales[6]}</td><td>${sales[7]}</td><td>${sales[8]}</td><td>${sales[9]}</td><td>${sales[10]}</td><td >${sales[11]}</td></tr>`;
                trBody.innerHTML = tableFirst + t;
                count++
            }
        }
    }
    //页面插入表格
    document.getElementById("table-wrapper").appendChild(tabNode)
};