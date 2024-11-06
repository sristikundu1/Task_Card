import { Outlet } from 'react-router-dom';

const MainLayOut = (props) => {
    return (
        <div>
        <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;