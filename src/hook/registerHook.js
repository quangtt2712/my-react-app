import { useState } from "react";
import register from "../service/registerService";

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [conflictError, setConflictError] = useState(null);
    const [registeredUser, setRegisteredUser] = useState(null);

    const registerUser = async (userData) => {
        setLoading(true);
        setError(null);
        console.log(userData);
        try {
            const response = await register(userData);
            setRegisteredUser(response.data);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                setError(err.response.data.errors);
                console.log(err.response.data.errors);
            } else if (err.response.status === 409) {
                setConflictError(err.response.data.Message || 'Conflict occurred. Username might be taken.');
                console.log({ general: [err.response.data.Message || 'Conflict occurred.'] });
            }
            else {
                setError({ general: 'An error occurred while registering.' });
            }
        } finally {
            setLoading(false);
        }
    };

    const resetErrors = () => {
        setError(null);
        setConflictError(null);
    };

    return { registerUser, loading, error, registeredUser, conflictError, resetErrors };
};

export default useRegister;
