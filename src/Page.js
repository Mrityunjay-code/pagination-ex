// import React, { useState } from 'react'

// const Page = ({data, itemsPerPage}) => {
//     const [current,setCurrent] =useState(1);

//     const indexOfLastItem =current*itemsPerPage;
//     const indexOfFirstItem =indexOfLastItem-itemsPerPage;
//     const currentItems = data.slice(indexOfFirstItem,indexOfLastItem);

//     const handlePrevPage=()=>{
//         setCurrent(current-1);
//     }
//     const handlNextPage=()=>{
//         setCurrent(current+1);
//     }
//   return (
//     <div>
//       <div>
//         {currentItems.map((item,index)=>(
//             <div key={index}>{item}</div>
//         ))}

//         <button onClick={handlePrevPage} disabled={current === 1}>
//             previous
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (

// <button

//   key={index}

//   onClick={() => handlePageChange(index + 1)}

//   className={currentPage === index + 1 ? 'active' : ''}

// >

//   {index + 1}

// </button>

// ))}
//         <button onClick={handlNextPage} disabled={indexOfLastItem>=data.length}>next</button>
//       </div>
//     </div>
//   )
// }

// export default Page

import React, { useState } from 'react';

import './App.css'

const itemsPerPage = 10; // Number of items to show per page

const Page = ({ data }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {

    if (newPage >= 1 && newPage <= totalPages) {

      setCurrentPage(newPage);

    }

  };

  const handlePrevClick = () => {

    handlePageChange(currentPage - 1);

  };

  const handleNextClick = () => {

    handlePageChange(currentPage + 1);

  };

  return (

    <div>

      <ul>

        {currentItems.map((item, index) => (

          <div key={index}>{item}</div>

        ))}

      </ul>

      <div className="pagination">

        <button onClick={handlePrevClick} disabled={currentPage === 1}>

          Previous

        </button>

        {Array.from({ length: totalPages }, (_, index) => (

          <button

            key={index}

            onClick={() => handlePageChange(index + 1)}

            className={currentPage === index + 1 ? 'active' : ''}

          >

            {index + 1}

          </button>

        ))}

        <button onClick={handleNextClick} disabled={currentPage === totalPages}>

          Next

        </button>

      </div>

    </div>

  );

};

export default Page;
