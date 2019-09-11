
var dd_date = document.getElementById("dBirth")
for (let index = 1; index < 32; index++) {
    var opt = document.createElement('option')
    opt.appendChild(document.createTextNode(index))
    opt.value = index
    dd_date.appendChild(opt)
}

var mm_date = document.getElementById("mBirth")
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

for (let index = 0; index < month.length; index++) {
    const element = month[index];
    var opt = document.createElement('option')
    opt.appendChild(document.createTextNode(element))
    opt.value = index+1
    mm_date.appendChild(opt)
}

var yy_date = document.getElementById("yBirth")
cur_year = 2019
for (let index = 2019; cur_year-index < 100; index--) {
    var opt = document.createElement('option')
    opt.appendChild(document.createTextNode(index))
    opt.value = index
    yy_date.appendChild(opt)
}