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
        for (var i in data){
            ctx.beginPath()
            ctx.arc(30+i*20,data[i],3,0,Math.PI,true)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()

            ctx.beginPath()
            if (i == 0){
                ctx.moveTo(30+i*20,data[i])
            } else{
                ctx.moveTo(30+(i-1)*20,data[i-1])
                ctx.lineTo(30+i*20,data[i])
            }
            ctx.closePath()
            ctx.strokeStyle = color
            ctx.stroke()
        }
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