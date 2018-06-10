function CheckboxCreator(props) {
    this.divs = props.divs
    this.charactor = props.charactor
    this.datas = props.datas
}
CheckboxCreator.prototype.createCheckbox = function () {
    for (var i in this.datas){
        let inputDiv = document.getElementById(this.divs)
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox')
        checkBox.setAttribute('id',this.datas[i])
        checkBox.value = this.datas[i]
        checkBox.charactor = this.charactor
        let checkBoxLabel = document.createElement('label');
        checkBoxLabel.setAttribute('for',this.datas[i])
        checkBoxLabel.innerText = this.datas[i]
        checkBox.addEventListener('change',function () {
            console.log(this.parentElement.children)
            console.log(checkBox.checked)
            console.log(checkBox.charactor)
            if (checkBox.id == '全选'){
                checkIsAll(checkBox.checked,checkBox.charactor)
            } else{
                checkOther(this.parentElement.children,checkBox.id)
            }
        })
        inputDiv.appendChild(checkBox)
        inputDiv.appendChild(checkBoxLabel)
    }
}

function checkIsAll(flag,part) {
    if (flag){
        if (part == '地区'){
            var temp = document.getElementById('region-selector').children
            } else  {
            var temp = document.getElementById('product-selector').children
        }
        console.log(temp)
        for (let x in temp) {
            if (temp[x].tagName == 'INPUT') {
                temp[x].checked = true
            }
        }
    }
}

function checkOther(node,id) {
    var count = 0
    for (let x in node){
        if (node[x].tagName == 'INPUT'&&node[x].id != '全选'&&node[x].checked){
            count++
        }
    }
    if (count == 3){
        for (let x in node){
            if (node[x].tagName == 'INPUT'&&node[x].id == '全选'){
                node[x].checked = true
            }
        }
    } else if (count == 0){
        for (let x in node){
            if (node[x].tagName == 'INPUT'&&node[x].id == id){
                node[x].checked = true
            }
        }
        for (let x in node){
            if (node[x].tagName == 'INPUT'&&node[x].id == '全选'){
                node[x].checked = false
            }
        }
    } else {
        for (let x in node){
            if (node[x].tagName == 'INPUT'&&node[x].id == '全选'){
                node[x].checked = false
            }
        }
    }
}