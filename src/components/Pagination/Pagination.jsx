import { PaginationStyled } from './Pagination.styled'

const Pagination= ({ location, itemsPerPage, totalItems, setSearchParams, params })=> {
  const isValidNumber = val => typeof val === 'number' && !isNaN(val);
  const pageCount = isValidNumber(totalItems) && isValidNumber(itemsPerPage) ? Math.ceil(totalItems / itemsPerPage) : 0;

    const handlePageClick = event => {
        const nextPageNumber = event.selected + 1;
        const nextSearchParams = new URLSearchParams(location.search);
        nextSearchParams.set('page', nextPageNumber || 1);
        setSearchParams(nextSearchParams);
      };

    return (
        <>
        <PaginationStyled
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        onPageActive={window.scrollTo({
          top: 0,
          behavior: "smooth"
      })}

        activeClassName={'active'}
        activeLinkClassName={'activeLink'}
        previousClassName={"prev"}
        nextClassName={"prev"}
        pageClassName={"page"}
      />
        </>
    )

}

export default Pagination;