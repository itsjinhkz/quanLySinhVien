const BASE_URL = "https://620e4f65585fbc3359ddafd3.mockapi.io/sinhvien";

const sinhVienService = {
  sinhVienList: function () {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  sinhVienDetail: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  sinhVienAdd: function (_data) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: _data,
    });
  },
  sinhVienUpdate: function (id, _data) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: PUT,
      data: _data,
    });
  },
  sinhVienDelete: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
};
