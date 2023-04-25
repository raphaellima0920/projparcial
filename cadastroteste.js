


let nome = document.querySelector('#nome')
let nomeLabel = document.querySelector('#nomeLabel')
let validarNome = false

let usuario = document.querySelector('#usuario')
let usuarioLabel = document.querySelector('#usuarioLabel')
let validarUsuario = false

let senha = document.querySelector('#senha')
let senhaLabel = document.querySelector('#senhaLabel')
let validarSenha = false

let email = document.querySelector('#email')
let emailLabel = document.querySelector('emailLabel')
let validarEmail = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 4){
    nomeLabel.setAttribute('style', 'color: red')
    nomeLabel.innerHTML = ' *Insira pelo menos 5 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validarNome = false
  } else {
    nomeLabel.setAttribute('style', 'color: green')
    nomeLabel.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validarNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    usuarioLabel.setAttribute('style', 'color: red')
    usuarioLabel.innerHTML = ' *Insira pelo menos 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validarUsuario = false
  } else {
    usuarioLabel.setAttribute('style', 'color: green')
    usuarioLabel.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validarUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    senhaLabel.setAttribute('style', 'color: red')
    senhaLabel.innerHTML = '* Insira pelo menos 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validarSenha = false
  } else {
    senhaLabel.setAttribute('style', 'color: green')
    senhaLabel.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validarSenha = true
  }
})


function cadastrar(){
  if(validarNome && validarUsuario && validarSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>O usuario esta sendo cadastrado</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'logindani.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Os campos devem ser preenchidos corrretamentes para que o cadastro seja realizado.</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

