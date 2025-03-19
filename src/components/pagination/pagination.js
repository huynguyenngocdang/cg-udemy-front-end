import React from 'react';

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination' style={{
                margin: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
                gap: '10px'

            }}>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number);
                        }} href='' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
