const convertDate = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const oclock =
    date.slice(11, 12) +
    (parseInt(date.slice(12, 13)) + 1) +
    date.slice(13, 16);

  return year + '.' + month + '.' + day + ' ' + oclock;
};

export default convertDate;
