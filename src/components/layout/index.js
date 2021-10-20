//MaT UI
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

import Headnav from '../headnav';
import Footerr from '../footerr';

const useStyles = makeStyles(() => ({
    main: {
        minHeight: '80vh'
    },
    footer: {
        textAlign: 'center'
    }
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <Headnav />
            <Container className={classes.main}>{children}</Container>
            <Footerr />
        </div>
    );
};

export default Layout;
