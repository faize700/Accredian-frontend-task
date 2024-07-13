import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import ReferralModal from './ReferralModal';

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Refer & Earn
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferralModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default LandingPage;
