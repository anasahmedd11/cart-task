const isEmptyOrNull = function(str) {
    return !str || str.trim() === '';
  };
  
  const validateInputs = function (productName, price, quantity) {
    if(!(isEmptyOrNull(productName) || isEmptyOrNull(price) || isEmptyOrNull(quantity))) {
      if (!(!(isNaN(productName)) || isNaN(price) || isNaN(quantity))) {
        if(price < 0 || quantity <= 0) {
          return false;
        } else {
          return true;
        }
      }
    }
    return false;
  };