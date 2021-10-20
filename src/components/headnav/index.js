//MaT UI
import AppBar from '@mui/material/AppBar';
//MaT UI
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.secondary,
        '& a': {
            color: '#ffffff',
            marginLeft: 10
        }
    }
}));

const Headnav = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>Amazona</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Headnav;
