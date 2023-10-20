import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParamater = (key) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(key);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const replaceQueryParameter = (key, value) => {
        const searchParams = new URLSearchParams(location.search);
        if (value) {
            searchParams.set(key, value)
        } else {
            searchParams.delete(key)
        }
        navigate(`${location.pathname}`,{ replace: true, search: searchParams.toString()})
    };

    return replaceQueryParameter;
};