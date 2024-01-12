import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import foto from './images/bolhadatorre.png'

function Home() {
    return (
       <>
          <section className={styles.home}>
            <div className={styles.apresentacao}>
              <p>
                Oiie! Meu nome é <br/>
                <span>Letícia França</span> <br/>
                Designer e Dev FullStack
              </p>
              <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                Saiba mais sobre mim
              </Link>
            </div>
            <figure>
              <img className={styles.img_home} src={foto} alt="Imagem de Home" />
            </figure>
          </section>
        </> 
    )
}

export default Home