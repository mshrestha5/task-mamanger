import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

//IProfile interface for specifying the props accepted by the Profile component, 
//which is a good practice for type safety.
interface IProfile//generic type
 {
    name?: string;
  }


export const Profile: FC<IProfile> = (
    props,
    ): ReactElement => {
    //  Destructure props
    const {name = 'John'} = props;
    return (
        
        <Box  
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
            <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
        {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome ${name}!`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager.
      </Typography>
        </Box>
       
    );
};

//PropTypes to document the expected types of props, which is helpful
// for developers using your component. and for type checking
Profile.propTypes = {
    name: PropTypes.string,
  };
  