import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato comigo!</h3>
                    <p>E vamos conversar mais sobre!</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:leticiasilvafranca17@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://www.instagram.com/leticia.s.franca/?hl=pt-br' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                        <a href='https://www.youtube.com/channel/UC9JsPt7GUawll1QUUsPmBDA' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                        </a>

                        <a href='https://github.com/LeticiaSFranca' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/leticiasfranca/' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
        </>
    )
}

export default Contatos