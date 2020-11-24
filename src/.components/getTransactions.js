const getTransactions = (data, name) => {
  let accountList;
  let transactionList;

  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].account_holder === name) {
        accountList = data[i].account_list;
        for (let j = 0; j < accountList.length; j++) {
          if (!transactionList) {
            transactionList = accountList[j].transactions;
          } else {
            transactionList = transactionList.concat(accountList[j].transactions);
          }
        }
        return [accountList, transactionList];
      }
    }
  }
  else{
    console.log("getTransactions failed.")
  }
};

export default getTransactions;
