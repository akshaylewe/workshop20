import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import TypoGraphy from '@material-ui/core/Typography'
import { CssBaseline } from '@material-ui/core';

import { Toolbar } from '@material-ui/core';



const Headerbar = () => {
    return (
        <>
        <CssBaseline>
 <div>
 <AppBar color="" > 
 <List component="nav">
       <ListItem component="div">
       <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
               <img src="/com.png" alt=""/>

          </TypoGraphy>
           </ListItemText>
           <Toolbar/>
           <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
              <b> <input type="button" class="button1" value="PATIENTS">
                   </input> </b>
          </TypoGraphy>
           </ListItemText>
           <Toolbar/>

           <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
                 <b> CALENDAR </b>
          </TypoGraphy>
           </ListItemText>
         
           <Toolbar/>
           <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
                 <b>USERS </b>
          </TypoGraphy>
           </ListItemText>
           <Toolbar/>

           <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
                  <p id="a"> <h4><b>BILLING </b></h4> </p>
          </TypoGraphy>  
           </ListItemText>
           <Toolbar/>

           <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
            <right> <img src="/abcm.png" alt=""/> </right> 
          </TypoGraphy>
           </ListItemText>
           
           
           
       </ListItem >
     
</List>

   </AppBar>
   
   
   </div>
   </CssBaseline>
   </>
    );
  
    }

export default Headerbar;