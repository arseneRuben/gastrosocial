import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';


const Paginate = ({ page }) => {
 



  return (
    <Pagination
      count={5}
      page={ 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/recipes?page=${1}`} />
      )}
    />
  );
};

export default Paginate;