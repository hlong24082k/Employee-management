function kiemtra(){
    var tai_khoan = document.getElementById("input-user");
    var mat_khau = document.getElementById("input-pass");

    if(tai_khoan.value == "" || mat_khau.value == ""){
        document.getElementById("error").innerHTML = "Vui long nhap day du thong tin !!!";
    } else if (tai_khoan.value == "ddtuanMT" && mat_khau.value == "123456789"){
        location.href="http://quangnam.freevnn.com/";
    } else{
        document.getElementById("error").innerHTML = "Tai khoan hoac mat khau khong dung !!!";
        tai_khoan.value = "";
        mat_khau.value = "";
    }
}