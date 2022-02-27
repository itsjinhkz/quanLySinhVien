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
  validator.kiemTraDiem(svObject.toan, "spanToan");
  validator.kiemTraDiem(svObject.ly, "spanLy");
  validator.kiemTraDiem(svObject.hoa, "spanHoa");
  validator.kiemTraChu(svObject.ten, "spanTenSV");
  validator.kiemTraMail(svObject.mail, "spanEmailSV");

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

function updateSinhVien(id) {}

let regexNumber = new RegExp("^(0|[1-9][0-9]*)$");

console.log(sinhVienController.layThongTinTuForm().id);
