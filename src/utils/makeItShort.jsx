const shortReview = (str) => {
    if (str.length > 270) {
      let newStr = str.slice(0, 270);
      return `${newStr}...`;
    }
    return str;
  }

export default shortReview;
