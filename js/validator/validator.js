let validator = {
  kiemTraSo: function (value, idErr) {
    let errEl = document.getElementById(idErr);
    let parten = new RegExp("^[0-9]+$");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng chỉ nhập số!";
      return false;
    }
  },
  kiemTraChu: function (value, idErr) {
    let errEl = document.getElementById(idErr);
    let parten = new RegExp("[^0-9]");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng chỉ nhập chữ!";
      return false;
    }
  },
  kiemTraMail: function (value, idErr) {
    let errEl = document.getElementById(idErr);
    let parten = new RegExp(
      "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
    );
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng nhập mail!";
      return false;
    }
  },
  kiemTraDiem: function (value, idErr) {
    let errEl = document.getElementById(idErr);
    let parten = new RegExp("^[^0-9]");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng nhập số!";
      return false;
    }
  },
};
