import logo from '../assets/img/logo.png';
import 'animate.css';
export const Preloader = () => {
return(
    <div className="preloader">
        <img src={logo} className="animate__animated animate__slow  animate__zoomIn" alt='Logo'></img>
    </div>
)
}