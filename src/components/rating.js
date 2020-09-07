import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function SimpleRating(props) {
  const [value] = React.useState(props.rate);

  return (
    <div>
      <Box borderColor="transparent">
        <Rating value={value} readOnly size="small" />
      </Box>
    </div>
  );
}