import SearchIcon from "@material-ui/icons/Search";

import { TextField  } from "@material-ui/core";
    const SearchBar = () => (
        <div>
        <h3 className="bcd"> Patients </h3>
        <div  style={{  position: 'relative', display: 'inline-block'  }}>
            
     <SearchIcon style={{position: 'absolute', right: 0, top: 16, width: 35, height: 35}}/> 
        
      <div classname="bcd" > 
      <TextField label="Search Patient"
      color="white"
      variant="outlined"
      fullwidth
      type="text"
     
/> 
</div>
   </div>
  
          
   </div>

);



export default SearchBar;