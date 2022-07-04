export default (list, value) =>
  list.filter((listItem) =>listItem.name.toLowerCase().includes(value.toLowerCase()) || listItem.description.toLowerCase().includes(value.toLowerCase()));
