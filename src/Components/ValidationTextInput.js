import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ValidationTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8416c4',
        borderWidth: 2
      },
      '&:hover fieldset': {
        borderColor: '#8416c4',
      }
    }
  },
})(TextField);

export default ValidationTextField;