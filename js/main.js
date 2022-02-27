let renderTableDSSV = () => {
  sinhVienService
    .sinhVienList()
    .then((res) => {
      convertedArr = res.data.map((item) => {
        let { id, ten, mail, toan, ly, hoa, ma } = item;
        return new sinhVien(id, ten, mail, toan, ly, hoa, ma);
      });
      console.log("convertedArr", convertedArr);
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
