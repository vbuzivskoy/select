export default (data, sortKeys) => (
  data.sort((item1, item2) => {
    let comparsionResult = 0;
    sortKeys.some((sortKey) => {
      if (item1[sortKey] > item2[sortKey]) {
        comparsionResult = 1;
        return true;
      }
      if (item1[sortKey] < item2[sortKey]) {
        comparsionResult = -1;
        return true;
      }
      return false;
    });

    return comparsionResult;
  })
);
