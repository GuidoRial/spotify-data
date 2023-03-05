const filterOutKeys = (track, filterCb) => {
  return Object.fromEntries(Object.entries(track).filter(filterCb));
};

const aux = {
  filterOutKeys,
};

module.exports = aux;
