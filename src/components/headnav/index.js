import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

//MaT UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BagIcon from '@mui/icons-material/LocalMall';
import { makeStyles } from '@mui/styles';

//Icons
import WhistlistIcon from '@mui/icons-material/FavoriteBorder';
import AccountIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CallIcon from '@mui/icons-material/WifiCalling3Outlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';

import Logo from '../../../public/assets/images/logo-tokyofoam.png';
import MyButton from '../../utils/MyButton';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#FFFFFF',
        '& a': {
            color: '#616161',
            marginLeft: 10
        }
    },
    theTopestHeadnav: {
        width: '100%',
        backgroundColor: '#F7F7F7'
    },
    slightlyBelowNavbar: {
        width: '100%',
        backgroundColor: '#F7F7F7'
    },
    phoneNumber: {
        width: '85%',
        height: 40,
        // backgroundColor: 'red',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    callIcon: {
        color: '#A6A6A6',
        marginRight: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 15
        }
    },
    pPhoneNumberEmail: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 12
        }
    },
    emailIcon: {
        color: '#A6A6A6',
        marginLeft: 20,
        marginRight: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 15
        }
    },
    contToolbar: {
        width: '89%',
        // backgroundColor: 'red',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    contLiNav: {
        display: 'flex',
        listStyle: 'none',
        color: '#616161',

        // backgroundColor: 'purple',
        '& .eachLi': {
            marginLeft: 50,
            fontSize: 15
        },
        '& .eachLi:last-child': {
            marginRight: 50
        }
    },
    contIconButton: {
        display: 'flex'
    },
    menuIcon: {
        color: 'black'
    }
}));

const Headnav = () => {
    const classes = useStyles();
    const router = useRouter();
    const currentPath = router.pathname;

    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    const handleClickSignIn = (e) => {
        e.preventDefault();
        router.push('/sign-in');
    };

    let normalNav = (
        <div className={classes.contLiNav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about-us">
                <a className="eachLi">About Us</a>
            </Link>
            <Link href="/product-page">
                <a className="eachLi">Product</a>
            </Link>
            <Link href="/how-to-buy">
                <a className="eachLi">How To Buy</a>
            </Link>
            <Link href="/contact-us">
                <a className="eachLi">Contact Us</a>
            </Link>
        </div>
    );

    let belowNav =
        currentPath === '/about-us' ? null : (
            <div className={classes.slightlyBelowNavbar}>
                <div className={classes.phoneNumber}>
                    <p>percobaan</p>
                </div>
            </div>
        );

    let desktopTabletAccount = (
        <div className={classes.contIconButton}>
            <MyButton tip="Notification">
                <NotificationsIcon color="#545454" />
            </MyButton>
            <MyButton tip="Whistlist">
                <WhistlistIcon color="#545454" />
            </MyButton>
            <MyButton tip="Bag">
                <BagIcon color="#545454" />
            </MyButton>
            <MyButton tip="Sign In" onClick={handleClickSignIn}>
                <AccountIcon color="#545454" />
            </MyButton>
        </div>
    );

    let mobileAccount = (
        <div className={classes.contIconButton}>
            <MyButton tip="Notification">
                <NotificationsIcon color="#545454" />
            </MyButton>
            <MyButton tip="Account">
                <AccountIcon color="#545454" />
            </MyButton>
        </div>
    );
    return (
        <div>
            <div className={classes.theTopestHeadnav}>
                <div className={classes.phoneNumber}>
                    <CallIcon className={classes.callIcon} /> <p className={classes.pPhoneNumberEmail}>085718565195</p>
                    <MailIcon className={classes.emailIcon} />{' '}
                    <p className={classes.pPhoneNumberEmail}>tokyofoam@gmail.com</p>
                </div>
            </div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar className={classes.contToolbar}>
                    <div>
                        <Image src={Logo} alt="Logo" width={80} height={45} />
                    </div>
                    {isMobile ? (
                        isTablet ? (
                            isDesktop ? (
                                normalNav
                            ) : (
                                <MenuIcon className={classes.menuIcon} />
                            )
                        ) : (
                            <MenuIcon className={classes.menuIcon} />
                        )
                    ) : (
                        <MenuIcon className={classes.menuIcon} />
                    )}

                    {isMobile
                        ? isTablet
                            ? isDesktop
                                ? desktopTabletAccount
                                : desktopTabletAccount
                            : mobileAccount
                        : mobileAccount}
                </Toolbar>
            </AppBar>
            {belowNav}
        </div>
    );
};

export default Headnav;
