//MaT UI
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    footer: {
        textAlign: 'center'
    }
}));

const Footerr = () => {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer}>
                <Typography>All Rights Reserved. Tokyofoam</Typography>
            </footer>
        </div>
    );
};

export default Footerr;
