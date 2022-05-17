const IncCounter = (incBy) => {
  return {
    type: "INCREMENT",
    payload: incBy
  };
};

const DecCounter = (decBy) => {
  return {
    type: "DECREMENT",
    payload: decBy
  };
};

export default { IncCounter, DecCounter };
