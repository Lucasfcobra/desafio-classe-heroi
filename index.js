class hero{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = this.definirAtaque()
         }
    definirAtaque(ataque){
        switch(this.tipo){
            case "mago":
                ataque = "sua magia"
            break
            case "guerreiro":
                 ataque = "sua espada"
            break
            case "monge":
                ataque = "sua artes marciais"
            break
            case "ninja":
                ataque = "sua shuriken" 
        }
            return ataque
    }

  escrever(){
    console.log(`O ${this.tipo} atacou usando ${this.ataque}.`)
  }

}

let heroi1 = new hero("Lucas",32,"guerreiro")
let heroi2 = new hero("Thiago",50,"mago")
let heroi3 = new hero("Flavio",12,"monge")
let heroi4 = new hero("Junior",22,"ninja")
heroi1.escrever()
heroi2.escrever()
heroi3.escrever()
heroi4.escrever()

