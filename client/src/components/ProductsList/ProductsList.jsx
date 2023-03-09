import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Center, Wrap, WrapItem, Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/ProductsActions';
import { useEffect } from 'react';
import ProducstCard from './ProductsCard/ProducstCard';
import ReactPaginate from 'react-paginate';
import '../../styles/styles.css';

function ProductsList() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermGlobal, setSearchTermGlobal] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('name');
  const productsPerPage = 10;

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchTermGlobal(value);
  };

  const handleSort = (sortKey) => {
    if (sortBy === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(sortKey);
      setSortOrder('asc');
    }
  };
// eslint-disable-next-line
  const sortedProducts = products.slice().sort((a, b) => {
    if (sortBy === 'name') {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
      if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    } else if (sortBy === 'relevance') {
      return sortOrder === 'asc' ? a.relevance - b.relevance : b.relevance - a.relevance;
    } else if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    }
  });

  const filteredProducts = sortedProducts.filter((product) =>
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
      <Input
        variant="filled"
        md="md"
        mt={5}
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Wrap style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button colorScheme='teal' variant='ghost' onClick={() => handleSort('name')}>Ordenar por Nombre</Button>
        {/* <Button colorScheme='teal' variant='ghost' onClick={() => handleSort('relevance')}>Ordenar por Relevancia</Button> */}
        <Button colorScheme='teal' variant='ghost' onClick={() => handleSort('price')}>Ordenar por Precio</Button>
      </Wrap>
      <Wrap spacing="30px" justify="center" minHeight="100vh">
        {currentProducts.map((product) => (
          <WrapItem key={uuidv4()}>
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
