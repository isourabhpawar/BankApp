import React from 'react';
import axios from 'axios';
import { apiUrl } from '../common/constant';


class AccountsService {
  getAccount(accountId, page, size) {
    return axios.get(`${apiUrl}/accounts/${accountId}/pageOperations?page=${page}&size=${size}`)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
  }

  makeDebit(accountId, amount, description) {
    const data = { accountId, amount, description };
    return axios.post(`${apiUrl}/accounts/debit`, data)
      .catch(error => {
        console.log(error);
      });
  }

  makeCredit(accountId, amount, description) {
    const data = { accountId, amount, description };
    return axios.post(`${apiUrl}/accounts/credit`, data)
      .catch(error => {
        console.log(error);
      });
  }

  makeTransfer(accountDestination, accountSource, amount, description) {
    const data = { accountSource, accountDestination, amount, description };
    return axios.post(`${apiUrl}/accounts/transfer`, data)
      .catch(error => {
        console.log(error);
      });
  }

  updateAccount(bankAccount) {
    return axios.put(`${apiUrl}/accounts/${bankAccount.id}`, bankAccount)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
  }
}

export default  AccountsService;
