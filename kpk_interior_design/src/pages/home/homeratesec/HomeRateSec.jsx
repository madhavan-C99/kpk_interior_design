import './HomeRateSec.css'
import { useNavigate } from 'react-router-dom';
export default function HomeRateSec(){
    const navigate = useNavigate();
    const handleNavigate= () => {
  navigate("/pricing");
  window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    return(
        <>
            <section>
                <div className='home_rate_sec__con3'>
                    <h1>2BHK Interiors Starts From 2.5Lakhs</h1>
                    <h1>3BHK Interiors Starts From 3.5Lakhs</h1>
                    <button onClick={handleNavigate}>Start My Interior Plan </button>
                </div>
            </section>
        </>
    )
}

