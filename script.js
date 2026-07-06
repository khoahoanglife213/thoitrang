$(document).ready(function () {

  // Gửi bình luận
  $("#formBinhLuan").on("submit", function (e) {
    e.preventDefault(); // không load lại trang

    var ten = $("#tenNguoiDung").val().trim();
    var noiDung = $("#noiDungBinhLuan").val().trim();

    if (ten === "" || noiDung === "") {
      $("#thongBao").text("Vui lòng nhập đầy đủ tên và nội dung bình luận.");
      return;
    }
    $("#thongBao").text("");

    // Tạo dòng bình luận mới và thêm vào đầu danh sách
    var binhLuanMoi = "<li>" +
      "<span class='ten'></span>" +
      "<span class='thoi-gian'>Vừa xong</span>" +
      "<p></p>" +
      "</li>";

    var $li = $(binhLuanMoi);
    $li.find(".ten").text(ten);
    $li.find("p").text(noiDung);

    $(".danh-sach-binh-luan").prepend($li);

    // Xóa nội dung trong ô nhập
    $("#tenNguoiDung").val("");
    $("#noiDungBinhLuan").val("");
  });

  // Xử lý đăng nhập (demo, chưa kết nối server)
  $("#formDangNhap").on("submit", function (e) {
    e.preventDefault();

    var taiKhoan = $("#taiKhoan").val().trim();
    var matKhau = $("#matKhau").val().trim();

    if (taiKhoan === "" || matKhau === "") {
      $("#thongBaoLogin").text("Vui lòng nhập tên đăng nhập và mật khẩu.");
      return;
    }

    $("#thongBaoLogin").css("color", "green").text("Đăng nhập thành công!");
  });

});
