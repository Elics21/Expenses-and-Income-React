import React from "react";
import PropTypes from "prop-types";
const Pagination = ({ currentPage, pageSize, count, onChagePage }) => {
    const pageCount = Math.ceil(count / pageSize);
    if (pageCount === 1) return null;

    const pages = [];
    let j = 0;
    for (let i = 1; i < pageCount + 1; i++) {
        pages[j] = i;
        j++;
    }
    console.log(typeof currentPage);
    return (
        <ul className="pagination">
            {pages.map((page) => (
                <li
                    key={"page-" + page}
                    className={currentPage === page ? "active" : ""}
                >
                    <button onClick={() => onChagePage(page)}>{page}</button>
                </li>
            ))}
        </ul>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onChagePage: PropTypes.func.isRequired
};

export default Pagination;
