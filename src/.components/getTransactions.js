const getTransactions = (data, name) => {
  let accountList;
  let transactionList;
  let sortedtransactionList;

  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].account_holder === name) {
        accountList = data[i].account_list;
        for (let j = 0; j < accountList.length; j++) {
          if (!transactionList) {
            transactionList = accountList[j].transactions;
          } else {
            transactionList = transactionList.concat(
              accountList[j].transactions
            );
          }
        }
        sortedtransactionList = transactionList.sort(
          (transaction1, transaction2) =>
            new Date(transaction2.date) - new Date(transaction1.date)
        );
        return [accountList, transactionList];
      }
    }
  } else {
    return 'getTransactions failed.';
  }
};

export default getTransactions;
