// document.getElementById('loader').style.display="block"
// document.getElementById('data').style.display="none"
document.getElementById('sb').addEventListener('click',fun1)
function fun1(){
    const a = document.getElementById('sname').value
    const b = parseInt(document.getElementById('pm').value)
    const c = parseInt(document.getElementById('cm').value)
    const d = parseInt(document.getElementById('mm').value)
    const e = parseInt(((b+c+d)/300)*100)
    document.getElementById('mydata').innerHTML += `
    <td>${a}</td>
    <td>${b}</td>
    <td>${c}</td>
    <td>${d}</td>
    <td>${e}</td>`
    // document.getElementById('loader').style.display="none"
    // document.getElementById('data').style.display="block"
}