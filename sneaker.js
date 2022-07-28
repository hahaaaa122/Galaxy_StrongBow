// function imgSlider(anything) {
//     document.querySelector('.card__img').src = anything;
//     alert(anything)
// }

var shoping = new Array();
document.getElementById("showshoping").style.display = "none";

function addtocart(x) {
    var cart = x.parentElement.children;
    var img = cart[2].children[0].src;
    var name = cart[3].innerText;
    var price = cart[4].innerText;
    var size = cart[5].children[1].innerText;
    //Mảng con
    var item = { img, name, price, size };

    shoping.push(item);
    // show chi tiết giỏ hàng
    showlengthShongping();
    // show số icon trong giỏ hàng
    showshopingg();
    //lưu giỏ hàng trên STR
    sessionStorage.setItem("shoping", JSON.stringify(shoping));
    showthanhtoan();



}

function showshopingg() {
    var cart = "";
    var tongcart = 0;
    for (let i = 0; i < shoping.length; i++) {
        // const itemm=arry[i];
        var tt = parseInt(shoping[i]["price"]);
        tongcart += tt;
        let j = i + 1;
        let imgg = "<img src='" + shoping[i]["img"] + "' width='50'>";
        let name = shoping[i]["name"];

        let size = shoping[i]["size"];
        let price = shoping[i]["price"];


        cart += '<tr>';
        cart += '<td>' + j + '</td>';
        cart += '<td>' + imgg + '</td>';
        cart += '<td>' + name + '</td>';
        cart += '<td>' + size + '</td>';
        cart += '<td>' + price + '</td>';
        cart += '<td><button onclick="xoasp(this)">Xóa</button></td>';
        cart += '</tr>';

    }
    cart += ' <tr>' +
        '<th colspan="5">Tổng Đơn Hàng</th>' +
        '<th>' +
        '<div>' + tongcart + '$' + '</div>' +
        '</th>' +
        '</tr>';

    document.getElementById("giohangchitiet").innerHTML = cart;

}

function xoasp(x) {
    var tr = x.parentElement.parentElement;
    var namesp = tr.children[2].innerText;
    tr.remove();
    // alert(namesp)
    // xóa sp trong shoping
    for (let i = 0; i < shoping.length; i++) {
        if (shoping[i][1] == namesp) {
            shoping.splice(i, 1);
        }
    }

}

function showlengthShongping() {
    var countsp = shoping.length;
    document.getElementById("soluonghang").innerHTML = countsp;
    console.log(countsp);
}

function showhidecart() {
    let showcart = document.getElementById("showshoping");
    if (showcart.style.display == "")
        showcart.style.display = "none";
    else
        showcart.style.display = "";
}

function showthanhtoan() {
    var gh = sessionStorage.getItem("shoping");
    var shoping = JSON.parse(gh);
    var cart = "";
    var tongcart = 0;
    for (let i = 0; i < shoping.length; i++) {
        // const itemm=arry[i];
        var tt = parseInt(shoping[i]["price"]);
        tongcart += tt;
        let j = i + 1;
        let imgg = "<img src='" + shoping[i]["img"] + "' width='50'>";
        let name = shoping[i]["name"];
        let size = shoping[i]["size"];
        let price = shoping[i]["price"];


        cart += "<tr>";
        cart += "<td>" + j + "</td>";
        cart += "<td>" + imgg + "</td>";
        cart += "<td>" + name + "</td>";
        cart += "<td>" + size + "</td>";
        cart += "<td>" + price + "</td>";
        cart += "<td></td>";
        cart += "</tr>";

    }
    cart += ' <tr>' +
        '<th colspan="5">Tổng Đơn Hàng</th>' +
        '<th>' +
        '<div>' + tongcart + '$' + '</div>' +
        '</th>' +
        '</tr>';

    document.getElementById("giohangchitiet1").innerHTML = cart;

}
function dongydathang() {
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;

    var nguoinhan = new Array(hoten, diachi, dienthoai, email);
    console.log(nguoinhan)

    sessionStorage.setItem("nguoinhan", JSON.stringify(nguoinhan));

    window.location.assign("donhang.html")

}

function showthongtinnguoinhan() {
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);
    var tt = ' <tr>' +
        '<td> Họ tên</td>' +
        '<td>' + thongtin[0] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td> Địa chỉ</td>' +
        '<td>' + thongtin[1] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td> Số điện thoại</td>' +
        '<td>' + thongtin[2] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td> Email</td>' +
        '<td>' + thongtin[3] + '</td>' +
        '</tr>';
    document.getElementById("thongtinnhanhang").innerHTML = tt;


}