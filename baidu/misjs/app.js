var selectRegion = document.getElementsByName('region');
var selectproduct = document.getElementsByName('product');
var resultTable = document.getElementById('table-wrapper');

var sortByProduct =function (a,b) {
    if (a.product >= b.product){
        return 1
    } else if (a.product < b.product){
        return -1
    } else{
        return 0
    }
};
var sortByRegion = function (a,b) {
    if (a.region >= b.region){
        return 1
    } else if (a.region < b.region){
        return -1
    } else{
        return 0
    }
};

function getSales(data){
    var result = []
    for (var i in sourceData){
        if ((sourceData[i].product == data[0] || sourceData[i].region == data[0])&&(sourceData[i].product == data[1] || sourceData[i].region == data[1])){
            result = sourceData[i].sale
        }
    }

    showsvg(result)
    drawLine(result,false)
}
let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];

var main = function(){
    showTable(sourceData,3,3)
    toggleCheckbox(true,'全选地区')
    toggleCheckbox(true,'全选商品')

    for (var i = 0; i < selectRegion.length; i++){
        selectRegion[i].addEventListener('click',function (e) {
            doSelect(e.target.checked,e.target.value,e.target.className)
        })
    }
    for (var i = 0; i < selectproduct.length; i++){
        selectproduct[i].addEventListener('click',function (e) {
            doSelect(e.target.checked,e.target.value,e.target.className)
        })
    }

    var table = document.getElementById('table-wrapper')
    table.addEventListener('mouseover',function (e) {
        console.log('x')
        var data = []
        if ((e.path.length == 9)){
            if (e.path[1].childNodes.length == 14){
                if (!(e.path[1].childNodes[0].innerText == '产品' || e.path[1].childNodes[0].innerText == '地区')){
                    data.push(e.path[1].childNodes[0].innerText)
                    data.push(e.path[1].childNodes[1].innerText)
                    getSales(data)
                }
            }else{
                var y = e.path[1]
                while(y.cells.length == 13){
                    y = y.previousSibling
                }
                data.push(y.cells[0].innerText)
                data.push(e.path[1].childNodes[0].innerText)
                getSales(data)
            }
        }
    })

    var refresh = document.getElementById('refresh-btn')
    refresh.addEventListener('click',function () {
        drawLine(getResult().result,true)
    })
}
