function sinhVien(id, ten, mail, toan, ly, hoa, ma) {
  this.id = id;
  this.ten = ten;
  this.mail = mail;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.ma = ma;
  this.tinhDTB = function () {
    return (this.toan + this.hoa + this.ly) / 3;
  };
}
