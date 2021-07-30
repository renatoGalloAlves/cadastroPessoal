(function(){
  
  const elementos = {
    form: document.getElementById('form-envio-dados'),
    nome: document.querySelector('[name="campo-nome"]'),
    cpf: document.querySelector('[name="campo-cpf"]'),
    rg: document.querySelector('[name="campo-rg"]'),
    genero: document.getElementsByName("campo-genero"),
    endereco: document.querySelector('[name="campo-endereco"]'),
    numero: document.querySelector('[name="campo-numero"]'),
    cep: document.querySelector('[name="campo-cep"]'),
    bairro: document.querySelector('[name="campo-bairro"]'),
    cidade: document.querySelector('[name="campo-cidade"]'),
    estado: document.querySelector('[name="campo-estado"]'),
    telefone: document.querySelector('[name="campo-telefone"]'),
    celular: document.querySelector('[name="campo-celular"]')
  }

  function mostraResultado(campos) {
    const { 
      nome,
      cpf, 
      rg, 
      genero,
      endereco, 
      numero, 
      cep, 
      bairro, 
      cidade, 
      estado, 
      telefone, 
      celular } = campos;
    let generoValue = Array.from(genero).find(r => r.checked).value;
    const cadastro = JSON.stringify({cpf: cpf.value, rg: rg.value, genero: generoValue, endereco: endereco.value, numero: numero.value, cep: cep.value, bairro: bairro.value, cidade: cidade.value, estado: estado.value.toUpperCase(), telefone: telefone.value, celular: celular.value})
    
    alert(`Olá, ${nome.value}! Obrigado por se cadastrar!`)
    localStorage.setItem('cadastro', cadastro)
  }

  function mascaraCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
  }

  function mascaraCEP(cep){
    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/(\d{5})(\d)/,"$1-$2")
    return cep
  }

  function mascaraTelefone(numeroTelefone) {
    let telefone = numeroTelefone.replace(/\D/g, "");
    telefone = telefone.replace(/^0/, "");
    if (telefone.length > 10) {
      telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (telefone.length > 5) {
      telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (telefone.length > 2) {
      telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      telefone = telefone.replace(/^(\d*)/, "($1");
    }
    return telefone;
  }

  function mascaraCelular(numerocelular) {

    let celular = numerocelular.replace(/\D/g, "");
    celular = celular.replace(/^0/, "");
  
    if (celular.length > 11) {
      celular = celular.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (v.trim() !== "") {
      celular = celular.replace(/^(\d*)/, "($1");
    }
    return celular;
  }

  elementos.cpf.addEventListener('keyup', e => {
    elementos.cpf.value = mascaraCPF(e.target.value)
  })

  elementos.cep.addEventListener('keyup', e => {
    elementos.cep.value = mascaraCEP(e.target.value)
  })

  elementos.telefone.addEventListener('keyup', e => {
    elementos.telefone.value = mascaraTelefone(e.target.value)
  })

  elementos.celular.addEventListener('keyup', e => {
    elementos.celular.value = mascaraCelular(e.target.value)
  })

  elementos.form.addEventListener('submit', e => {
    mostraResultado(elementos)
  })
})()
