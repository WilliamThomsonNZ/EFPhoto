export const debounce = (fn, delay) => {
  //Use closure here as we want to hold on to this variable even after the function has executed
  //must be closure other wise it will create a new variable each time and the if statement will never run.
  let timeID;

  return () => {
    if (timeID) {
      clearTimeout(timeID);
    }
    timeID = setTimeout(() => {
      fn();
    }, delay);
  };
};
