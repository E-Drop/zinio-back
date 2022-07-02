export default (list, value) =>
  list.filter((listItem) => {
    return listItem.name.includes(value) || listItem.id.toString() === value;
  });
