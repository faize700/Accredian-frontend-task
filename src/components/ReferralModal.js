import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ReferralModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    referredName: '',
    referredEmail: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/referral`, form);
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  console.log(BASE_URL);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Referred Friend's Name"
          name="referredName"
          value={form.referredName}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Referred Friend's Email"
          name="referredEmail"
          value={form.referredEmail}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Course"
          name="course"
          value={form.course}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
