import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import statusCode from 'http-status';

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: 'http://localhost:8000/api/v1/users',
});
// const authContext = useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const router = useNavigate();
    const [userData, setUserData] = useState(null);

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post('/register', {
                name: name,
                username: username,
                password: password,
            });
            if (request.status == statusCode.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    const handleLogin = async(username,password) =>{
        try {
            let request = await client.post("/login",{
                username:username,
                password:password
            });
            if(request.status == statusCode.OK){
                localStorage.setItem("token",request.data.token);
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    

    const data = {
        userData,
        setUserData,
        handleRegister,
        handleLogin
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
