const elementos = {
  form: document.getElementById('form-envio-dados'),
  nome: document.querySelector('[name="campo-nome"]'),
  cpf: document.querySelector('[name="campo-cpf"]'),
  rg: document.querySelector('[name="campo-rg"]'),
  genero: document.querySelector('[name="campo-genero"]'),
  endereco: document.querySelector('[name="campo-endereco"]'),
  numero: document.querySelector('[name="campo-numero"]'),
  cep: document.querySelector('[name="campo-cep"]'),
  bairro: document.querySelector('[name="campo-bairro"]'),
  cidade: document.querySelector('[name="campo-cidade"]'),
  estado: document.querySelector('[name="campo-estado"]'),
  telefone: document.querySelector('[name="campo-telefone"]'),
  celular: document.querySelector('[name="campo-celular"]')

}

elementos.form.addEventListener("onsubmit", (e)=>{ 
  e.preventDefault()
  console.log(e)
} 
)