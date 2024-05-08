import styles from './Login.module.css'

function Login() {
    return(
        <div className={styles.container}>
            <div className={styles.containerImagem}>
                <img src="/images/image-form.svg" alt="Imagem Form"/>
            </div>
            <div className={styles.conteudo}>
                <div className={styles.containerLogin}>
                    <div className={styles.conteudoLogin}>   
                        <div className={styles.tituloLogin}>
                            <h2 className={styles.subTitulo}>Bem-vindo de volta</h2>
                            <h1 className={styles.titulo}>Faça login na sua conta</h1>
                        </div>
                        <form className={styles.formulario} action="#">
                            <div className={styles.formularioConteudo}>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputs}>
                                        <label className={styles.texto}  htmlFor="email">E-mail</label>
                                        <input className={styles.input} type="email" placeholder='exemplo@gmail.com' />
                                    </div>
                                    <div className={styles.inputs}>
                                        <label className={styles.texto} htmlFor="senha">Senha</label>
                                        <input className={styles.input} type="password" placeholder='0123456789'/>
                                    </div>
                                </div>
                                <div className={styles.containerCheckbox}>
                                    <div className={styles.checkboxLayout}>
                                        <input type="checkbox" name="lembre" id="lembre" />
                                        <label htmlFor="lembre">Lembre de mim</label>
                                    </div>
                                    <a href="/">Esqueceu sua senha?</a>
                                </div>
                            </div>
                            <div className={styles.botoes}>
                                <div className={styles.botaoContainer}>
                                    <input className={styles.botaoEntrar} type="submit" value="Entrar na conta" />
                                </div>
                                <div className={styles.botaoContainerGoogle}>
                                    <img src="/images/icon-google.png" alt="" />
                                    <input className={styles.botaoGoogle} type="submit" value="Ou faça login com o Google" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <p className={styles.cadastro}>Não tem uma conta? <a href="/">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login