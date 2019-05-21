const localize = {
  out_of_stock: "Нет в наличии",
  in_stock: "В наличии",
  pednding: "Ожидается"
};

const Status = ({ status }) => {
  return localize[status] || status;
};

export default Status;