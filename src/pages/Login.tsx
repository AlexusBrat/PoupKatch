import katchAtend from '../assets/katchAtend.png'


const Login = () => {
  return (
    <div>
      <section className='main-container'>
        <div className='img-container'>
          <img src={katchAtend} alt="Atendimento Katch" style={{width: "300px", height: "auto" }}/>
        </div>
        <div>
          <h1>Bem vindo ao PoupKatch!!</h1>
        </div>
        <div>
          <form className="form-login " action="">
            <h4 style={{textDecoration: "underline"}}>Informe suas credenciais</h4>
            <input type="text" name="" placeholder='Usuário' required/>
            <input type="password" name="" placeholder='Senha' required/>
            <button className='btn-login'>
              Login
            </button>
          </form>
        </div>
        <h3><i>"Poupar é dar um destino ao dinheiro antes que o mês dê outro."</i></h3>
      </section>
    </div>
  )
}

export default Login

