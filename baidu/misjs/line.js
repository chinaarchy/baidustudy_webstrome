function drawLine(data,flag) {
    //console.log(data)
    var canvas = document.getElementById('canvas')
    canvas.getContext('2d').clearRect(0,0,300,200)
    let lineColor = ['red','green','blue','orange','pink','purple','yellow','gray','cyan']
    if (flag){
        var maxSale = findMax(data)
        for (var i in data)
            draw(data[i].sale,lineColor[i],maxSale)
    } else
        var maxSale = data.reduce(function (x,y) {
            if (x > y)
                return x
            else
                return y
        })
        draw(data,lineColor[0],maxSale)

}


function draw(saledata,color,maxSale) {
    data = saledata.map(function (x) {
        return 180 - (x / maxSale) * 180
    })
    if (canvas.getContext){
        var ctx = canvas.getContext('2d')
        ctx.beginPath()
        ctx.strokeStyle = color
        for (let month in data) {
            if (month == 0)
                ctx.moveTo(30 + month * 20, data[0])
            else
                ctx.lineTo(30 + month * 20, data[month])
        }
        ctx.stroke()
    }
}
function findMax(data) {
    var max = 0
    for (var i in data){
        for (var j in data[i].sale){
            if (max < data[i].sale[j]){
                max = data[i].sale[j]
            }
        }
    }
    return max
}