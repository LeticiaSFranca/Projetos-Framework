import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <span>Letícia França</span>
                <br />
                <span>Atividade de Memes</span>
            </div>
        </header>
    )    
}

export default Header