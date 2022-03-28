import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  dialog: {
    "& .MuiPaper-rounded": {
      width: 560,
      padding: "35px 20px"
    }
  },
  dialogContent: {
    paddingTop: 0,
    paddingBottom: 13
  }
}));

const ReceptionDialog = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Recommencer la réception
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        className={classes.dialog}
      >
        <DialogTitle id="alert-dialog-title">
          Voulez-vous recommencer la réception de cette article ?
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Typography>
            Tous les lots et avoirs générés pour cette référence seront
            supprimés.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Recommencer
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            variant="contained"
          >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReceptionDialog;
