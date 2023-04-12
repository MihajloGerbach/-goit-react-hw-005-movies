const genresConvertor = (genre_ids) => {
    const parcedGenres = localStorage.getItem('genresList') ? JSON.parse(localStorage.getItem('genresList')) : {};
    const result = genre_ids.map(id => parcedGenres[id]).filter(item => item !== undefined);

    if (result.length > 2) {
      result.splice(3, result.length - 2).push("Others");

    } else if (result.length === 0) {
      result.push("no genres")
    }

    return result
  }

export default genresConvertor;