export default function recordFilters(recordData, recordDataForPaging, genreFilter, searchParams, sortBy) { (genreFilter.length > 5 || genreFilter !== '' ? recordData.filter(
    record => record.genres.includes(genreFilter)): (searchParams.length < 2) ? 
    recordDataForPaging : recordData).filter(record => {
      if(record.name.toLowerCase().includes(searchParams.toLowerCase()) || 
      record.artist.toLowerCase().includes(searchParams.toLowerCase())) {
        return record
      }
    }).sort(function(a, b) {
      if(sortBy === 'Price >') {
        return parseFloat(a.price) - parseFloat(b.price)
      } else if(sortBy === 'Price <') {
        return parseFloat(b.price) - parseFloat(a.price)
      } else if(sortBy === 'ReleaseYear >') {
        return parseFloat(a.releaseYear) - parseFloat(b.releaseYear)
      } else if(sortBy === 'ReleaseYear <') {
        return parseFloat(b.releaseYear) - parseFloat(a.releaseYear)
      }else if(sortBy === 'Artist >') {
        if (a.artist < b.artist) {
          return -1;
        } if (a.artist > b.artist) {
          return 1;
        }
        return -0
      } else if(sortBy === 'Artist <') {
        if (a.artist > b.artist) {
          return -1;
        } if (a.artist <  b.artist) {
          return 1;
        }
        return -0
      } else if(sortBy === 'Record Name >') {
        if (a.name < b.name) {
          return -1;
        } if (a.name > b.name) {
          return 1;
        }
        return -0
      } else if(sortBy === 'Record Name <') {
        if (a.name > b.name) {
          return -1;
        } if (a.name <  b.name) {
          return 1;
        }
        return -0
      }   return recordDataForPaging
  })}