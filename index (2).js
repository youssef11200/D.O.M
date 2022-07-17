var btnplustag=document.getElementsByClassName("plus")
// console.log(btnplustag)
for (let index = 0; index < btnplustag.length; index++) {
    btnplustag[index].addEventListener("click",increment)
}
function increment(event) {
    var btnplus=event.target
    // console.log(btnplus)
    var divtag=btnplus.parentElement
    // console.log(divtag)
    var pqte=divtag.querySelector(".qte")
    // console.log(pqte)
    var qtevalue=pqte.innerHTML
    qtevalue++
    // console.log(qtevalue)
pqte.innerHTML=qtevalue
// var unitPriceTag=divtag.parentElement.nextElementSibling
// console.log(unitPriceTag)
// var pricetag=unitPriceTag.nextElementSibling
// console.log(pricetag)
var trtag=divtag.parentElement.parentElement
var unitPriceTag=trtag.querySelector(".unitPrice")
// console.log(unitPriceTag)
var pricetag=trtag.querySelector('.Price')
// console.log(pricetag)
var unipricevalue=unitPriceTag.innerHTML
console.log(unipricevalue)
pricetag.innerHTML=qtevalue*unipricevalue
}

var checkboxtag=document.getElementsByClassName("check")
// console.log(checkboxtag)
for (let index = 0; index < checkboxtag.length; index++) {
checkboxtag[index].addEventListener("click",Total)
    
}
function Total(e) {
  var pricevalue=  e.target.parentElement.parentElement.querySelector(".Price").innerHTML
// console.log(pricetag)
var totaltag=document.getElementById("total")
var totalvalue=totaltag.innerHTML
// console.log(typeof(pricevalue))
// console.log(typeof totalvalue)

// console.log(totalvalue)
var btnplus= e.target.parentElement.parentElement.querySelector(".plus")
console.log(btnplus)
if (e.target.checked==true) {
    totaltag.innerHTML=Number(totalvalue)+Number(pricevalue)
btnplus.setAttribute("disabled",true)
} else {
    totaltag.innerHTML=Number(totalvalue)-Number(pricevalue)
    btnplus.removeAttribute("disabled")
}
}
var addbtn=document.getElementsByClassName('add')
console.log(addbtn)
for (let index = 0; index < addbtn.length; index++) {
addbtn[index].addEventListener('click',add_card)

}
function add_card(event) {
    var product=document.createElement('div')
    var basket_el=document.getElementById('basket')
    basket_el.appendChild(product)
    var tr_target=event.target.parentElement.parentElement
    var img_el=tr_target.getElementsByTagName('img')[0]
    console.log(img_el)
   product.appendChild(img_el)
}