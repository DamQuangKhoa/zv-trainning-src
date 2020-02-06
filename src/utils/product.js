import axios from 'axios';
import BaseApi from './base';

export default class ProductAPI extends BaseApi {
  getSpecialList = params =>
    axios
      .get(`${this.endpoint}/special-list`, { params })
      .then(response => ({ response }))
      .catch(error => ({ error }));
}
