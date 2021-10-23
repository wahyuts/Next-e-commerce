import Headnav from '../headnav';
import Footerr from '../footerr';

const GeneralLayout = ({ children }) => {
    return (
        <div>
            <Headnav />
            {children}
            <Footerr />
        </div>
    );
};

export default GeneralLayout;
