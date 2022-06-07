import styles from "../../styles/services.module.css";
import Service_card from "./service_card";

export default function Services (){
    return(
        <div className={styles.card_container}>
<Service_card title='reactjs developer' className={styles.Yellow} image={'web.png'}/>
<Service_card title='html , css' color={'red'} image={'mob.png'}/>
<Service_card title='react native developer' color={'red'} image={'design.png'}/>
        </div>
    )
}