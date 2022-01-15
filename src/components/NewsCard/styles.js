import { makeStyles } from "@material-ui/core/styles";
import transitions from "@material-ui/core/styles/transitions";

export default makeStyles({
    media:{
        height: 180,
    },
    spaceBetween:{
        
        display:'flex',
        justifyContent:'space-between',
        marginLeft:15,
        margin:10
    },
    spaceBetween2:{
        marginBottom:-10,
        display:'flex',
        justifyContent:'space-between',
        margin:5
    },
    title:{
        margin:'1rem'

    },
    gapBetween:{
        boxShadow:'8px 8px 10px #888888',
        display:'flex',
        flexDirection:'column',    
        justifyContent:'space-between'
    },
    activeCard:{
        
        
        borderBottom:'10px solid black',           
        transition: '2s',
    right: 0,
          }
})