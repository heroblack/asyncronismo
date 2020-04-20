const axios = require("axios");

class RestAPI {
  constructor(baseURL) {
    this.service = axios.create({
      //withCredentials: true,
      //crossdomain: true,
      //timeout: 5000,
      headers: { csrf: "token" },
      responseType: "json",
      responseEncoding: "utf8"
    });
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    this.service.interceptors.request.use(
      function(config) {
        // Do something before request is sent
        return config;
      },
      function(error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
    this.baseURL = baseURL;
    this.headers = {
      "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN",
      //"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
      //'Authorization':'Bearer ' + token,
      //'X-Requested-With': 'XMLHttpRequest'
    };
  }

  setHeaders(headers = {}) {
    this.headers = Object.assign(this.headers, headers);
  }

  setToken(token) {
    this.headers = Object.assign(this.headers, {
      Authorization: "Bearer " + token
    });
  }

  async callApi(endPoint, options) {
    this.pokemon = {
      nombre: "pikachu"
    };
    options.baseURL = this.baseURL;
    options.headers = this.headers;
    //console.log(options)
    let response = await this.service(endPoint, options);
    return response;
  }

  async callApiGet(endPoint, payload = {}) {
    const options = {};
    options.method = "get";
    options.timeout = 60000;
    options.baseURL = this.baseURL;
    options.headers = this.headers;
    options.data = payload;

    let response = await this.service(endPoint, options);
    return response;
  }

  async callApiPost(endPoint, payload = {}) {
    const options = {};
    options.method = "post";
    options.timeout = 60000;
    options.baseURL = this.baseURL;
    options.headers = this.headers;
    options.data = payload;

    let response = await this.service(endPoint, options);
    return response;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, "/");
        break;
      case 404:
        this.redirectTo(document, "/404");
        break;
      default:
        this.redirectTo(document, "/500");
        break;
    }
    return Promise.reject(error);
  };
}
const apiRick = new RestAPI("https://rickandmortyapi.com/api");
apiRick
  .callApiGet("/character/")
  .then(response => console.log(response.data))
  .catch(error => console.log(error.response.data));
// .catch(err => console.log(err))
//module.exports = RestAPI;
