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
    let parten = new RegExp("[A-Za-z]");
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
    let parten = new RegExp("/S+@S+.S+/");
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
    let parten = new RegExp("^(0|[1-9][0-9]*)$");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng nhập số!";
      return false;
    }
  },
};
