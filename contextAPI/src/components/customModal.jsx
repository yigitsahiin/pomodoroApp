import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useGlobalStateContext } from '../store/globalState/context';

export const CustomModal = ({ open, setOpen }) => {
  const { state, dispatch } = useGlobalStateContext();

  const handleClose = () => setOpen(false);

  const handleTimeChange = (key, value) => {
    dispatch({ type: 'changeTime', payload: { key, value } });
  };

  const handleColorModeChange = (e) => {
    dispatch({ type: 'changeColorMode', payload: e.target.value });
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Ayarlar</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          {/* Pomodoro Zamanı */}
          <Typography variant="subtitle1">Pomodoro Zamanı</Typography>
          <TextField
            label="Pomodoro"
            value={state.time.pomodoro}
            onChange={(e) => handleTimeChange('pomodoro', e.target.value)}
            fullWidth
          />

          {/* Short Break Zamanı */}
          <Typography variant="subtitle1">Short Break Zamanı</Typography>
          <TextField
            label="Short Break"
            value={state.time.shortBreak}
            onChange={(e) => handleTimeChange('shortBreak', e.target.value)}
            fullWidth
          />

          {/* Long Break Zamanı */}
          <Typography variant="subtitle1">Long Break Zamanı</Typography>
          <TextField
            label="Long Break"
            value={state.time.longBreak}
            onChange={(e) => handleTimeChange('longBreak', e.target.value)}
            fullWidth
          />

          {/* Font Ayarları */}
          <Typography variant="subtitle1">Font Ayarları</Typography>
          <hr />

          {/* Renk Seçimi */}
          <Typography variant="subtitle1">Renk Seçimi</Typography>
          <hr />
          <TextField
            select
            label="Renk Seç"
            value={state.colorMode}
            onChange={handleColorModeChange}
            fullWidth
          >
            <MenuItem value="primary">Birincil</MenuItem>
            <MenuItem value="secondary">İkincil</MenuItem>
            <MenuItem value="default">Varsayılan</MenuItem>
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Kapat
        </Button>
      </DialogActions>
    </Dialog>
  );
};
