import { Outlet } from "react-router-dom";
function Dashlayout() {
    return (
        <div>
            <h1>Welcome to dashbord</h1>
            <Outlet />
        </div>
    );
}
export default Dashlayout;