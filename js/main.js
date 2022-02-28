let renderTableDSSV = () => {
  sinhVienService
    .sinhVienList()
    .then((res) => {
      convertedArr = res.data.map((item) => {
        let { id, ten, mail, toan, ly, hoa, ma } = item;
        return new sinhVien(id, ten, mail, toan, ly, hoa, ma);
      });
      sinhVienController.renderTable(convertedArr);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
renderTableDSSV();
document.querySelector("#btn-add").addEventListener("click", () => {
  let svObject = sinhVienController.layThongTinTuForm();
  let isValue = true;
  validator.kiemTraSo(svObject.ma, "spanMaSV");
  validator.kiemTraChu(svObject.ten, "spanTenSV");
  validator.kiemTraMail(svObject.mail, "spanEmailSV");
  validator.kiemTraDiem(svObject.toan, "spanToan");
  validator.kiemTraDiem(svObject.ly, "spanLy");
  validator.kiemTraDiem(svObject.hoa, "spanHoa");

  sinhVienService
    .sinhVienAdd(svObject)
    .then((res) => {
      renderTableDSSV();
    })
    .catch((err) => {
      console.log("err", err);
    });
});

function deleteSinhVien(id) {
  sinhVienService
    .sinhVienDelete(id)
    .then((res) => {
      renderTableDSSV();
    })
    .catch((err) => {
      console.log("err", err);
    });
}

function updateSinhVien(id) {
  sinhVienService
    .sinhVienDetail(id)
    .then((res) => {
      let svInfo = res.data;
      document.querySelector("#txtMaSV").value = svInfo.ma;
      document.querySelector("#txtTenSV").value = svInfo.ten;
      document.querySelector("#txtEmail").value = svInfo.mail;
      document.querySelector("#txtDiemToan").value = svInfo.toan;
      document.querySelector("#txtDiemLy").value = svInfo.ly;
      document.querySelector("#txtDiemHoa").value = svInfo.hoa;
    })
    .catch((err) => {
      console.log("err", err);
    });
}

document.querySelector("#btnSearch").addEventListener("click", () => {
  var tenSVValue = document.getElementById("txtSearch").value;
  var tableSV = document.querySelectorAll("#tbodySinhVien tr");
  var trTimKiem = tableSV[0];

  for (var i = 0; i < tableSV.length; i++) {
    const currentTr = tableSV[i];
    const currentListTd = currentTr.querySelectorAll("td");
    const currentTdName = currentListTd[1].innerText;

    if (currentTdName == tenSVValue) {
      trTimKiem = currentTr;
    }
  }
  document.querySelector("#tbodySinhVien").innerHTML = trTimKiem.getInnerHTML();
});

function reseta() {
  document.querySelector("#txtMaSV").value = "";
  document.querySelector("#txtTenSV").value = "";
  document.querySelector("#txtEmail").value = "";
  document.querySelector("#txtDiemToan").value = "";
  document.querySelector("#txtDiemLy").value = "";
  document.querySelector("#txtDiemHoa").value = "";
}
