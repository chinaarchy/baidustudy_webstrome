function showsvg(tableResult) {
    //clear rectangles
    var bar = document.getElementById('svg-table')
    bar.innerHTML = `<line x1="0" x2="300" y1="180" y2="180" stroke="black" fill="black" stroke-width="2"/>
    <line x1="5" x2="5" y1="0" y2="300" stroke="black" fill="transparent" stroke-width="2"/>`

    var maxSale = tableResult.reduce(function (x,y) {
        if (x > y){
            return x
        } else {
            return y
        }
    })
    var data = tableResult.map(function (x) {
        var tablePoint = {}
        tablePoint.height= (x / maxSale) * 150
        tablePoint.xPoint = 180 - tablePoint.height
        return tablePoint
    })

    for (var month in data){
        var xPoint = 10 + 25 * month
        var rect = document.createElementNS("http://www.w3.org/2000/svg","rect")
        rect.setAttribute("width",15)
        rect.setAttribute("height",data[month].height)
        rect.setAttribute("x",xPoint)
        rect.setAttribute("y",data[month].xPoint)
        rect.setAttribute("style","fill:blue")

        document.getElementById('svg-table').appendChild(rect)
    }
}