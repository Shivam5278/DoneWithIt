const { useContext } = require("react")
import jwtDecode from 'jwt-decode';

import authStorage from './storage';
import authContext from "./context";

export default useAuth = () => {
    const {user, setUser } = useContext(authContext);

const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
}

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    return {user, logIn, logOut };
}