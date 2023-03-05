import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Center, Wrap, WrapItem, Input } from '@chakra-ui/react';
import { products } from '../../products';
import ProducstCard from './ProductsCard/ProducstCard';
import ReactPaginate from 'react-paginate';
import '../../styles/styles.css'

function ProductsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermGlobal, setSearchTermGlobal] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 3;

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchTermGlobal(value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTermGlobal.toLowerCase())
  );

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  const offset = currentPage * productsPerPage;

  const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <Input variant='filled' md='md' mt={5} placeholder="Buscar productos" value={searchTerm} onChange={handleSearchChange} />
      <Wrap spacing="30px" justify="center" minHeight="100vh">
        {currentProducts.map((product) => (
          <WrapItem key={uuid()}>
            <Center w="250px" h="550px">
              <ProducstCard product={product} />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousClassName="previous"
        nextClassName="next"
        pageClassName="page"
        breakClassName="break"
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        previousLabel="<"
        nextLabel=">"
      />
    </>
  );
}

export default ProductsList;