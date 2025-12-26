import client_img from '../../../assets/services/images/Frame1000012388.png'
import home_icon from '../../../assets/services/images/Frame1000012229.png'
import './HappyClients.css'
export default function HappyClients({openForm}){

    return(
        <>
            <section>
                <div className="happyclients__con3">
                    <div className="happyclients__img3">
                        <img src={client_img} alt="" />
                    </div>
                    <div className="happyclients_head3">
                        <img src={home_icon} alt="" />
                        <h1>Trusted by  <span>1000+</span> Happy Clients – KPK Enterprises   Satisfied Clients</h1>
                        <p>With over 1000 happy clients in Pondicherry, KPK Enterprises has earned a reputation for delivering stylish, functional, and client-focused interior solutions across homes and commercial spaces.</p>
                        <button onClick={openForm}>Build My Dream Interior</button>
                    </div>
                </div>
            </section>
        </>
    )
}