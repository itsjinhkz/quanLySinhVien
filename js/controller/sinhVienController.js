let sinhVienController = {
  renderTable: function (arr) {
    let tbodyEl = document.querySelector("#tbodySinhVien");
    let contentHTML = "";

    arr.map((item) => {
      let trContent = `
      <tr>
        <td>${item.ma}</td>
        <td>${item.ten}</td>
        <td>${item.mail}</td>
        <td>${item.tinhDTB()}</td>
        <td>
          <button class="btn btn-success" onclick="updateSinhVien(${
            item.id
          })">Cập Nhật</button>
          <button class="btn btn-danger" onclick="deleteSinhVien(${
            item.id
          })">Xóa</button>
        </td>
      </tr>
      `;
      contentHTML += trContent;
    });
    tbodyEl.innerHTML = contentHTML;
  },
  layThongTinTuForm: function () {
    let maSV = document.querySelector("#txtMaSV").value;
    let tenSV = document.querySelector("#txtTenSV").value;
    let mailSV = document.querySelector("#txtEmail").value;
    let toan = document.querySelector("#txtDiemToan").value * 1;
    let ly = document.querySelector("#txtDiemLy").value * 1;
    let hoa = document.querySelector("#txtDiemHoa").value * 1;

    return {
      id: "",
      ma: maSV,
      ten: tenSV,
      mail: mailSV,
      toan: toan,
      ly: ly,
      hoa: hoa,
    };
  },
};
