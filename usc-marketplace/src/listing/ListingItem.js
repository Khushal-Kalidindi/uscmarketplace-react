import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const ListingItem = (props) => {
  return (
    <ImageListItem key={props.img}>
        <img
          src={`${props.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${props.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={props.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={props.title}
          subtitle={props.author}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${props.title}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
  );
}

export default ListingItem;