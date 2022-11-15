import type { user } from "../intaerface";
import axios, { Axios } from "axios";
const BASE_URL = "http://localhost:8000";

export class Auth {
  static signUp(data: user) {
    return fetch(`${BASE_URL}/register`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
  static signIn(data: any) {
    return fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

export class Store {
  static getStores() {
    return fetch(`${BASE_URL}/get-stores`, {
      method: "GET",
    });
  }

  static createStore(data: any) {
    // return fetch(`${BASE_URL}/image-uploads`, {
    //   method: "POST",
    //   body: data,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    return axios({
      url: `${BASE_URL}/ccreate-store`,
      method: "POST",
      data,
    });
  }
}

export class Product {

  static token = localStorage.getItem("token");

  static uploadProduct(data: any) {
    return axios({
      url: `${BASE_URL}/upload-product`,
      method: "POST",
      data,
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    });
      // return fetch(`${BASE_URL}/upload-product`, {
      //   headers: {
      //     // Authorization: "Bearer " + localStorage.getItem("token"),   
      //     'Content-Type': 'multipart/form-data',

      //   },
      //   method:"POST"
      // });
  }
}
