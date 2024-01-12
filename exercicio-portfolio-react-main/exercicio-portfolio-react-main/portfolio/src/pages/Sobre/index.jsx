import styles from './Sobre.module.css'
import avatar from './images/minhaImagem.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
import csharp from './images/icon-csharp.png'
import php from './images/icon-php.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" width="300px" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Me chamo <span>Letícia França</span> <br />
                    <strong>Dev e Estudante</strong> </p>

                    <p>Estudo Desenvolvimento Web desde 2021.</p>

                    <p>
                        Meu nome é Letícia França e eu sou uma estudante do 3º Ano do curso de Desenvolvimento Web e Mobile do Ensino
                        Médio
                        e Técnico de Informática do Colégio Cotemig. A minha escolha em relação a essa área, foi devido na pandemia eu
                        me descobrir
                        com bastante interesse em tecnologia, principalmente na área de criação visual.
                        E o curso técnico em informática me abriu horizontes para muitas outras áreas
                        também, na qual tenho gostado bastante, como Front-End e Back-End, e agora no terceiro ano, a criação de
                        aplicativos,
                        tanto para dispositivos Android quanto para IOS.
                        </p>
                        <br />
                        <p>
                        Mas, além de ser apaixonada por tecnologia, há algo que amo ainda mais,
                        que é roça (e tudo que envolve ela). Principalmente os animais de grande porte, como vacas e cavalos, sou
                        fascinada por esses animais.
                        No entanto, tenho comigo que vou conseguir unir essas duas áreas que amo tanto, que é a tecnologia com o
                        campo.
                        </p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                    <img src={csharp} alt="Ícone do csharp" />
                    <img src={php} alt="Ícone do php" />
                </div>
            </div>

        </section>
    )
}

export default Sobre