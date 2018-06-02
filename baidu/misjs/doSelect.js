

var doSelect = function (flag,changeThing,targetClassName) {
    var resultTable = document.getElementById('table-wrapper');
    resultTable.innerText = "";
    //checkbox的状态判断
    if (targetClassName == 'all') {
        toggleCheckbox(flag,changeThing)
    }else{
        checkCheckbox(changeThing)
    }
    //数据处理

    var x = getResult()
    showTable(x.result,x.countProduct,x.countRegion)
    drawLine(x.result,true)

};
function getResult() {
    var result = [];
    var countRegion = 0;
    var countProduct = 3;
    var sourceResult = {}
    for (var i = 0; i < selectRegion.length - 1; i++){
        if (selectRegion[i].checked) {
            countRegion++;
            for (var j in sourceData){
                if (sourceData[j].region == selectRegion[i].value) {
                    result.push(sourceData[j])
                }
            }
        }
    }
    for (var k = 0; k < selectproduct.length - 1; k++) {
        if (!selectproduct[k].checked) {
            countProduct--;
            for (var l in result) {
                if (result[l].product == selectproduct[k].value) {
                    result.splice(l, 1)
                }
            }
        }
    }
    sourceResult.result = result
    sourceResult.countRegion = countRegion
    sourceResult.countProduct = countProduct
    return sourceResult
}
//点击全选的状态切换
var toggleCheckbox = function (flag,changeThing) {
    if (flag){
        if (changeThing == '全选地区'){
            for (var i = 0; i < selectRegion.length - 1; i++){
                selectRegion[i].checked = flag
            }
        }
        if (changeThing == '全选商品') {
            for (var i = 0; i < selectproduct.length - 1; i++){
                selectproduct[i].checked = flag
            }
        }
    }
};
//判断选择的状态
var checkCheckbox = function(changething){
    var count = 3;
    var checkNode = document.querySelector(`input[value='${changething}']`).parentNode.getElementsByTagName('input');
    for(var i = 0; i < checkNode.length - 1; i++){
        if (checkNode[i].checked != true){
            count--;
            checkNode[3].checked = false
        }
    }
    if (count == 0){
        for(var i = 0; i < checkNode.length - 1; i++) {
            if (checkNode[i].value == changething){
                checkNode[i].checked = true
            }
        }
    }
    if (count == 3){
        checkNode[3].checked = true
    }
};