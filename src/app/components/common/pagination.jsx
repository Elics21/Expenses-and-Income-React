import React from "react";
import PropTypes from "prop-types";
const Pagination = ({ currentPage, pageSize, count, onChangePage }) => {
    const pageCount = Math.ceil(count / pageSize);
    if (pageCount === 1) return null;

    const pages = [];
    let j = 0;
    for (let i = 1; i < pageCount + 1; i++) {
        pages[j] = i;
        j++;
    }
    return (
        <ul className="pagination">
            {pages.map((page) => (
                <li
                    key={"page-" + page}
                    className={currentPage === page ? "active" : ""}
                >
                    <button onClick={() => onChangePage(page)}>{page}</button>
                </li>
            ))}
        </ul>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired
};

export default Pagination;
