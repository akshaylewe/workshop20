import React from 'react'
import { Typography, makeStyles, Toolbar, Button } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      
    field: 'surgeryType',
    headerName: 'Surgery Type ',
    width: 180 ,
    editable: false,
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 150,
    editable: false,
  },
  {
     
    field: 'anesthesiaType',
    headerName: 'Anesthesia Type',
    width: 200,
    editable: false,
    
  },
  {
    field: 'surgicalComplications',
    headerName: 'Surgical Complications',
    width: 225,
    editable: false,
  },
  {
    field: 'anesthesiaComplications',
    headerName: 'Anesthesia Complications(nausea, vomitting, difficult intubation)',
    width: 500,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    surgeryType: 'Shoulder Reconstruciton',
    Date: 'January 2008',
    anesthesiaType: 'Genral "Breathing Tube"',
    surgicalComplications: 'No',
    anesthesiaComplications: 'No'
  },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  mainScreenHead: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    flexGrow: 1,
   
  },
  image: {
    width: '6rem',
    height: '6rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '.25em',
    
  },
  detailsContainer: {
    marginLeft: '.5em',

  },
  listContainer:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '2rem',
    marginRight: '1rem',
    '&>*':{
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    },

  },
  listTitle:{
    minWidth: '8rem',
    marginRight:'1em'
  },
  mainContainer:{
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  downMenu:{
    display: 'flex',
    marginTop: '2em',
    background: 'white',
    width: '100%',
  },
  infoCard:{
    marginLeft: '1em',
    marginTop: '1em',
    maxWidth: '500px'
  },
  cardDetilTitle:{
    background: 'lightBlue',
    paddingLeft: '.5em'
  },
  downMenuTitles:{
    maxHeight: '5em',
    padding: '.5em',
    textAlign: 'center',
   
  },
  downMenuTitless:{
    maxHeight: '5em',
    padding: '.5em',
    textAlign: 'center',
    color: '#00A0F0'
  },
  active:{
    border: '1px solid #dbdbdb',
    borderBottom: 'none'
  },
  button: {
    marginTop: '1em'
   
  },
 
  listItem:{
    display: 'flex'
  },
  doctorDetails:{
    position: 'relative'
  },
  surgery:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '11rem',
    marginTop:'2rem'
  },
  yes: {
     
    width: '5rem',
    height: '5rem',
    background: '#43C43F',
    color: 'white',
    borderRadius: '50%',
    position: 'relative'
  },
  no: {
    width: '3rem',
    height: '3rem',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    position: 'relative'
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))

export const Body = () => {
  
  const classes = useStyles()

    return (
        <div className={classes.root}>
          <Toolbar />
      
         <div>
          <div className={classes.mainScreenHead} width="100%">
            <Typography className={classes.title} > <b>Patient Information </b></Typography>
            <Typography><b>Last updated 9 Aug 2021 </b> <MoreHorizIcon align="center"/></Typography>
          </div>
          <div className={classes.container}>
            <img className={classes.image} src="./user1.png" alt="" />
              <div className={classes.detailsContainer}>
                <Typography variant="h6"><b>Sara Smith</b></Typography>
                  <div className={classes.mainContainer}>
                    <div className={classes.listContainer} >
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Phone</Typography>
                        <Typography variant="p"><b>302-857-9685</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Surgery Type</Typography>
                        <Typography variant="p"><b>Rotator Cuff Repair </b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Email</Typography>
                        <Typography variant="p"><b>sarasmith@gmail.com</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Surgery Date</Typography>
                        <Typography variant="p"><b>    15 Aug 2020 </b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Gender</Typography>
                        <Typography variant="p"><b>Female</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Height</Typography>
                        <Typography variant="p"><b>163</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Age</Typography>
                        <Typography variant="p"><b>45</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Weight</Typography>
                        <Typography variant="p"><b>110</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p"></Typography>
                        <Typography variant="p"><b></b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">BMI</Typography>
                        <Typography variant="p"><b>19</b></Typography>
                      </div>
                    
                    </div>
                    {/* doctor details */}
                    <div className={classes.doctorDetails}>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Anesthesiologist</Typography>
                        <Typography variant="p"><b>Dr.Christian Hardaway</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                          <Typography className={classes.listTitle} variant="p">Anesthesiologist Phone</Typography>
                          <Typography variant="p"><b>301-896-8745 </b></Typography>
                        </div>
                      <div className={classes.listItem}>
                          <Typography className={classes.listTitle} variant="p">Anesthesiologist Email</Typography>
                          <Typography variant="p"><b>christian@h3a.com</b></Typography>
                        </div>
                    </div>



                    <div className={classes.surgery}>
                      <Typography>Surgery Clearance</Typography>
                      <div className={classes.yes}><Typography className={classes.center}>Yes</Typography></div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
          
        <div className={classes.downMenu}>
          <Typography className={`${classes.downMenuTitles} ${classes.active}`} >List of prior Surgeries</Typography>
          <Typography className={`${classes.downMenuTitles} ${classes.active}`} >List of Medical Diagnosis</Typography>
          <Typography className={`${classes.downMenuTitles} ${classes.active}`} >List of Medications</Typography>
          <Typography className={`${classes.downMenuTitles} ${classes.active}`} >Airway Evaluation</Typography>
          <Typography className={`${classes.downMenuTitles} ${classes.active}`} >Anesthesia Clearance and Recomendations</Typography>
        </div>           
          <div className="">
            <div className={classes.infoCard}>
              <Typography className={classes.cardDetilTitle} >First Time Surgery</Typography>
              <Typography>No</Typography>
            </div>
            <div className={classes.infoCard}>
              <Typography className={classes.cardDetilTitle} >Family History of Surgical Complications?</Typography>
              <Typography>Yes</Typography>
            </div>
            <div className={classes.infoCard}>
              <Typography className={classes.cardDetilTitle} >If Yes, please provide more details</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore quibusdam nesciunt inventore, similique soluta optio at in amet, voluptates laudantium consequatur ipsum? Corporis nemo quaerat suscipit fuga magni beatae sapiente, odio nisi quibusdam officia tempore, odit unde quisquam!</Typography>
            </div>
          </div>
          <div className={classes.title}>
            <Typography  variant='h6'>Previous Surgeries</Typography>
              <div style={{ height: 200, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  disableSelectionOnClick
                />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon />}
              >
                Add Surgery
              </Button>
            </div>
          </div>
        </div>
    )
}
