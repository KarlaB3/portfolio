import { useNavigate } from "react-router-dom"

export const AboutButton = () => {
    const navigate = useNavigate();

    const navigatetoABout = () => {
        navigate("/about");
    };

    return (
        <button onClick={navigatetoABout}>About Me</button>
    )
};

