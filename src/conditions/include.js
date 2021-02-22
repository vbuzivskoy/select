export default (data, conditionParams) => (
  data.filter((item) => (
    conditionParams.every((paramGroup) => (
      Object.entries(paramGroup).every(([key, value]) => (
        item[key] === value
      ))
    ))
  ))
);
