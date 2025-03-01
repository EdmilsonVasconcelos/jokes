const jokes = [
  {
    id: 1,
    texto: "Por que o caderno estava com medo? Porque ele tinha muitas folhas!"
  },
  {
    id: 2,
    texto: "O que o relógio disse para o outro? Hora de dar corda!"
  },
  {
    id: 3,
    texto: "Por que o pão foi à escola? Para virar um sanduíche de respeito!"
  },
  {
    id: 4,
    texto:
      "O que o lápis disse para a borracha? Você está sempre apagando meus erros!"
  },
  {
    id: 5,
    texto: "Por que o pintinho atravessou a rua? Para chegar do outro lado!"
  },
  {
    id: 6,
    texto: "O que a janela disse para a porta? Você está sempre me fechando!"
  },
  {
    id: 7,
    texto:
      "Por que o café foi ao médico? Porque estava com problemas de pressão!"
  },
  {
    id: 8,
    texto: "O que o martelo disse para o prego? Estou batendo na sua cabeça!"
  },
  {
    id: 9,
    texto:
      "Por que o computador foi ao psicólogo? Porque tinha muitos bytes de problemas!"
  },
  {
    id: 10,
    texto:
      "O que o lápis disse para a caneta? Você está sempre me passando a frente!"
  },
  {
    id: 11,
    texto:
      "Por que o livro de história estava feliz? Porque tinha muitos capítulos!"
  },
  {
    id: 12,
    texto: "O que o papel disse para a tesoura? Você me corta o coração!"
  },
  {
    id: 13,
    texto: "Por que o espirro foi à escola? Para aprender a cobrir a boca!"
  },
  {
    id: 14,
    texto: "O que o zero disse para o oito? Belo cinto!"
  },
  {
    id: 15,
    texto:
      "Por que o cachorro não brinca no computador? Porque ele tem medo do mouse!"
  },
  {
    id: 16,
    texto: "O que a uva faz quando está sendo perseguida? Ela se espreme!"
  },
  {
    id: 17,
    texto:
      "Por que o telefone foi à terapia? Porque ele tinha muitos problemas de conexão."
  },
  {
    id: 18,
    texto: "O que o tomate foi fazer no banco? Tirar extrato!"
  },
  {
    id: 19,
    texto:
      "Por que a matemática não pode ir à praia? Porque tem muitas funções!"
  },
  {
    id: 20,
    texto:
      "O que o semáforo disse para o carro? Não me olhe agora, estou trocando de roupa!"
  },
  {
    id: 21,
    texto: "Por que a planta não responde? Porque ela é mudinha!"
  },
  {
    id: 22,
    texto: "O que o gato faz quando está na livraria? Procura miau-nuais!"
  },
  {
    id: 23,
    texto: "Por que a galinha atravessou a rua? Para chegar do outro lado!"
  },
  {
    id: 24,
    texto: "O que o detector de metais disse para o imã? Você me atrai!"
  },
  {
    id: 25,
    texto: "Por que o pato foi à farmácia? Para comprar qua-qua-rinha!"
  },
  {
    id: 26,
    texto:
      "O que a chave disse para a fechadura? Nós fomos feitos um para o outro!"
  },
  {
    id: 27,
    texto: "Por que o goleiro não conta piadas? Porque ele defende muito!"
  },
  {
    id: 28,
    texto: "O que o vento disse para a folha? Vamos dar uma voltinha?"
  },
  {
    id: 29,
    texto:
      "Por que o peixe não usa celular? Porque ele tem medo que a água molhe a tela!"
  },
  {
    id: 30,
    texto: "O que a boca falou para o dente? Fica tranquilo que vou te cobrir!"
  },
  {
    id: 31,
    texto: "Por que o vampiro usa computador? Para navegar na web sanguinária!"
  },
  {
    id: 32,
    texto:
      "O que o sabão disse para a sujeira? Hoje você vai embora da minha vida!"
  },
  {
    id: 33,
    texto:
      "Por que o lápis não casou com a lapiseira? Porque ela era muito delicada!"
  },
  {
    id: 34,
    texto:
      "O que o queijo disse para o outro? Preciso ir ao médico, acho que estou cheio de furos!"
  },
  {
    id: 35,
    texto:
      "Por que o livro de matemática é depressivo? Porque tem muitos problemas!"
  },
  {
    id: 36,
    texto: "O que a árvore faz quando se aposenta? Vira um móvel!"
  },
  {
    id: 37,
    texto: "Por que o óculos foi ao médico? Porque não estava enxergando nada!"
  },
  {
    id: 38,
    texto: "O que o sal disse para a batata? Eu salto em você!"
  },
  {
    id: 39,
    texto:
      "Por que a calculadora está sempre feliz? Porque ela sempre tem solução para tudo!"
  },
  {
    id: 40,
    texto: "O que o giz disse para o quadro-negro? Você completa minha vida!"
  },
  {
    id: 41,
    texto: "Por que o elefante não pega fogo? Porque ele já é cinza!"
  },
  {
    id: 42,
    texto: "O que o pente falou para o careca? Nossa, como você mudou!"
  },
  {
    id: 43,
    texto:
      "Por que o bolo foi ao psicólogo? Porque estava se sentindo esfarelado!"
  },
  {
    id: 44,
    texto: "O que o sapato disse para a meia? Você fede, mas não vivo sem você!"
  },
  {
    id: 45,
    texto:
      "Por que a escova de dentes foi presa? Porque foi pega armando uma emboscada!"
  },
  {
    id: 46,
    texto:
      "O que o pão disse quando ganhou na loteria? Agora sou um pão milionário!"
  },
  {
    id: 47,
    texto: "Por que o cavalo foi ao dentista? Porque tinha dente de potro!"
  },
  {
    id: 48,
    texto: "O que a parede disse para outra? Encontremos na esquina!"
  },
  {
    id: 49,
    texto: "Por que o chiclete não entrou na sala? Porque grudou na porta!"
  },
  {
    id: 50,
    texto: "O que o lixo disse para o lixeiro? Você me tira do sério!"
  },
  {
    id: 51,
    texto: "Por que o porco está sempre feliz? Porque está de bacon a vida!"
  },
  {
    id: 52,
    texto:
      "O que o astronauta vegetariano disse ao ir ao espaço? Vou ao infinito e além-fauna!"
  },
  {
    id: 53,
    texto: "Por que a tomada foi ao médico? Porque estava sofrendo de choques!"
  },
  {
    id: 54,
    texto: "O que a formiga disse para a outra? Você sumiu, onde andou-linha?"
  },
  {
    id: 55,
    texto:
      "Por que o termômetro foi para a universidade? Porque queria ter um grau!"
  },
  {
    id: 56,
    texto: "O que o bife disse para a vaca? Eu sou você no passado!"
  },
  {
    id: 57,
    texto: "Por que o pepino usa relógio? Para marcar o tempo de conserva!"
  },
  {
    id: 58,
    texto: "O que a lua disse para o sol? Você é brilhante demais!"
  },
  {
    id: 59,
    texto:
      "Por que o celular foi ao médico? Porque precisava de um carregamento!"
  },
  {
    id: 60,
    texto: "O que o ventilador disse para a pessoa? Sou seu fã número um!"
  },
  {
    id: 61,
    texto: "Por que o gato é bom fotógrafo? Porque ele sabe focar!"
  },
  {
    id: 62,
    texto: "O que o café disse para o açúcar? Você adoça minha vida!"
  },
  {
    id: 63,
    texto: "Por que a música foi ao médico? Porque perdeu o tom!"
  },
  {
    id: 64,
    texto:
      "O que o tijolo disse para o pedreiro? Tô contando com você, não me deixe cair!"
  },
  {
    id: 65,
    texto: "Por que o tablet toma remédio? Porque ele tem vírus!"
  },
  {
    id: 66,
    texto: "O que o cadarço disse para o sapato? Estou amarrado em você!"
  },
  {
    id: 67,
    texto:
      "Por que o livro não pode sair em dia de chuva? Porque tem medo de molhar as folhas!"
  },
  {
    id: 68,
    texto: "O que o gelo disse para a água quente? Você me deixa derretido!"
  },
  {
    id: 69,
    texto:
      "Por que a banana foi ao médico? Porque não se sentia muito a-peeling!"
  },
  {
    id: 70,
    texto:
      "O que a impressora disse ao computador? Essa folha é minha impressão sobre você!"
  },
  {
    id: 71,
    texto: "Por que a estrela foi presa? Porque causou um estrelalhaço!"
  },
  {
    id: 72,
    texto: "O que o botão disse para a camisa? Se segura que hoje vou apertar!"
  },
  {
    id: 73,
    texto:
      "Por que o relâmpago nunca ganha corrida? Porque sempre é des-qualificado!"
  },
  {
    id: 74,
    texto: "O que o forno disse para o bolo? Você está crescendo tão rápido!"
  },
  {
    id: 75,
    texto:
      "Por que a bicicleta não pode ficar em pé sozinha? Porque está duas-rodas!"
  },
  {
    id: 76,
    texto: "O que o peixe disse quando bateu na parede? Dam!"
  },
  {
    id: 77,
    texto:
      "Por que o médico foi ao mecânico? Porque a ambulância estava doente!"
  },
  {
    id: 78,
    texto:
      "O que o espelho disse para a pessoa? Já te refleti muito sobre isso!"
  },
  {
    id: 79,
    texto:
      "Por que o pente se acha o mais inteligente? Porque tem dente de saber!"
  },
  {
    id: 80,
    texto:
      "O que o ovo disse para a frigideira? Acho que vou fritar de calor aqui!"
  },
  {
    id: 81,
    texto: "Por que a salada era rica? Porque tinha muito azeite!"
  },
  {
    id: 82,
    texto: "O que o mar disse para a areia? Estou em ondas por você!"
  },
  {
    id: 83,
    texto: "Por que o tomate ficou vermelho? Porque viu a salada sem roupa!"
  },
  {
    id: 84,
    texto: "O que a tesoura disse para o papel? Vou te cortar em pedacinhos!"
  },
  {
    id: 85,
    texto:
      "Por que o fantasma entrou para o time de futebol? Porque era bom de drible!"
  },
  {
    id: 86,
    texto:
      "O que a chave de fenda disse para o parafuso? Vira, vira, que eu estou me apaixonando!"
  },
  {
    id: 87,
    texto:
      "Por que o gorila não usa smartphone? Porque tem medo de quebrar a gorila-glass!"
  },
  {
    id: 88,
    texto: "O que a casa disse para o morador? Estou sempre aberta para você!"
  },
  {
    id: 89,
    texto:
      "Por que o chão desistiu de viajar? Porque o povo vivia pisando nele!"
  },
  {
    id: 90,
    texto: "O que o isqueiro disse para a vela? Eu acendo você!"
  },
  {
    id: 91,
    texto: "Por que a água foi presa? Porque afogou o arroz!"
  },
  {
    id: 92,
    texto: "O que o dedão do pé disse para o chinelo? Vou furar você!"
  },
  {
    id: 93,
    texto: "Por que a praia é sempre bem informada? Porque está cheia de ondas!"
  },
  {
    id: 94,
    texto:
      "O que o sabonete disse para as mãos? Não me aperte tanto, estou ficando menor!"
  },
  {
    id: 95,
    texto:
      "Por que o foguete não tem amigos? Porque explode de raiva facilmente!"
  },
  {
    id: 96,
    texto:
      "O que a maçã disse para a laranja? Você é uma fruta cítrica incrível!"
  },
  {
    id: 97,
    texto: "Por que o pneu foi à academia? Porque queria ficar calibrado!"
  },
  {
    id: 98,
    texto:
      "O que o despertador disse para o dorminhoco? Hora de acordar para a vida!"
  },
  {
    id: 99,
    texto:
      "Por que o menino colocou o celular no congelador? Para fazer uma chamada gelada!"
  },
  {
    id: 100,
    texto:
      "O que o capacete disse para o motociclista? Eu protejo sua cabeça dura!"
  },
  {
    id: 101,
    texto: "Por que o caderno estava com medo? Porque ele tinha muitas folhas!"
  },
  {
    id: 102,
    texto: "O que o relógio disse para o outro? Hora de dar corda!"
  },
  {
    id: 103,
    texto: "Por que o pão foi à escola? Para virar um sanduíche de respeito!"
  },
  {
    id: 104,
    texto:
      "O que o lápis disse para a borracha? Você está sempre apagando meus erros!"
  },
  {
    id: 105,
    texto: "Por que o pintinho atravessou a rua? Para chegar do outro lado!"
  },
  {
    id: 106,
    texto: "O que a janela disse para a porta? Você está sempre me fechando!"
  },
  {
    id: 107,
    texto:
      "Por que o café foi ao médico? Porque estava com problemas de pressão!"
  },
  {
    id: 108,
    texto: "O que o martelo disse para o prego? Estou batendo na sua cabeça!"
  },
  {
    id: 109,
    texto:
      "Por que o computador foi ao psicólogo? Porque tinha muitos bytes de problemas!"
  },
  {
    id: 110,
    texto:
      "O que o lápis disse para a caneta? Você está sempre me passando a frente!"
  },
  {
    id: 111,
    texto:
      "Por que o livro de matemática está sempre triste? Porque tem muitos problemas!"
  },
  {
    id: 112,
    texto:
      "O que o lápis disse para o papel? Estou escrevendo você da minha vida!"
  },
  {
    id: 113,
    texto: "Por que o espirro foi à escola? Para aprender a cobrir a boca!"
  },
  {
    id: 114,
    texto: "O que o zero disse para o oito? Belo cinto!"
  },
  {
    id: 115,
    texto:
      "Por que o cachorro não brinca no computador? Porque ele tem medo do mouse!"
  },
  {
    id: 116,
    texto: "O que a uva faz quando está sendo perseguida? Ela se espreme!"
  },
  {
    id: 117,
    texto:
      "Por que o telefone foi à terapia? Porque ele tinha muitos problemas de conexão."
  },
  {
    id: 118,
    texto: "O que o tomate foi fazer no banco? Tirar extrato!"
  },
  {
    id: 119,
    texto:
      "Por que a matemática não pode ir à praia? Porque tem muitas funções!"
  },
  {
    id: 120,
    texto:
      "O que o semáforo disse para o carro? Não me olhe agora, estou trocando de roupa!"
  },
  {
    id: 121,
    texto: "Por que a planta não responde? Porque ela é mudinha!"
  },
  {
    id: 122,
    texto: "O que o gato faz quando está na livraria? Procura miau-nuais!"
  },
  {
    id: 123,
    texto: "Por que a galinha atravessou a rua? Para chegar do outro lado!"
  },
  {
    id: 124,
    texto: "O que o detector de metais disse para o imã? Você me atrai!"
  },
  {
    id: 125,
    texto: "Por que o pato foi à farmácia? Para comprar qua-qua-rinha!"
  },
  {
    id: 126,
    texto:
      "O que a chave disse para a fechadura? Nós fomos feitos um para o outro!"
  },
  {
    id: 127,
    texto: "Por que o goleiro não conta piadas? Porque ele defende muito!"
  },
  {
    id: 128,
    texto: "O que o vento disse para a folha? Vamos dar uma voltinha?"
  },
  {
    id: 129,
    texto:
      "Por que o peixe não usa celular? Porque ele tem medo que a água molhe a tela!"
  },
  {
    id: 130,
    texto: "O que a boca falou para o dente? Fica tranquilo que vou te cobrir!"
  },
  {
    id: 131,
    texto: "Por que o vampiro usa computador? Para navegar na web sanguinária!"
  },
  {
    id: 132,
    texto:
      "O que o sabão disse para a sujeira? Hoje você vai embora da minha vida!"
  },
  {
    id: 133,
    texto:
      "Por que o lápis não casou com a lapiseira? Porque ela era muito delicada!"
  },
  {
    id: 134,
    texto:
      "O que o queijo disse para o outro? Preciso ir ao médico, acho que estou cheio de furos!"
  },
  {
    id: 135,
    texto:
      "Por que o livro de matemática é depressivo? Porque tem muitos problemas!"
  },
  {
    id: 136,
    texto: "O que a árvore faz quando se aposenta? Vira um móvel!"
  },
  {
    id: 137,
    texto: "Por que o óculos foi ao médico? Porque não estava enxergando nada!"
  },
  {
    id: 138,
    texto: "O que o sal disse para a batata? Eu salto em você!"
  },
  {
    id: 139,
    texto:
      "Por que a calculadora está sempre feliz? Porque ela sempre tem solução para tudo!"
  },
  {
    id: 140,
    texto: "O que o giz disse para o quadro-negro? Você completa minha vida!"
  },
  {
    id: 141,
    texto: "Por que o elefante não pega fogo? Porque ele já é cinza!"
  },
  {
    id: 142,
    texto: "O que o pente falou para o careca? Nossa, como você mudou!"
  },
  {
    id: 143,
    texto:
      "Por que o bolo foi ao psicólogo? Porque estava se sentindo esfarelado!"
  },
  {
    id: 144,
    texto: "O que o sapato disse para a meia? Você fede, mas não vivo sem você!"
  },
  {
    id: 145,
    texto:
      "Por que a escova de dentes foi presa? Porque foi pega armando uma emboscada!"
  },
  {
    id: 146,
    texto:
      "O que o pão disse quando ganhou na loteria? Agora sou um pão milionário!"
  },
  {
    id: 147,
    texto: "Por que o cavalo foi ao dentista? Porque tinha dente de potro!"
  },
  {
    id: 148,
    texto: "O que a parede disse para outra? Encontremos na esquina!"
  },
  {
    id: 149,
    texto: "Por que o chiclete não entrou na sala? Porque grudou na porta!"
  },
  {
    id: 150,
    texto: "O que o lixo disse para o lixeiro? Você me tira do sério!"
  },
  {
    id: 151,
    texto:
      "Por que a vassoura é tão trabalhadora? Porque ela sempre limpa a sujeira dos outros!"
  },
  {
    id: 152,
    texto:
      "O que a maçã disse para a farinha? Juntas faremos um delicioso bolo!"
  },
  {
    id: 153,
    texto: "Por que a roupa foi ao psicólogo? Porque estava muito engomada!"
  },
  {
    id: 154,
    texto: "O que a água disse para o cafezinho? Você é forte, hein!"
  },
  {
    id: 155,
    texto:
      "Por que o avião não pode jogar baralho? Porque ele sempre se eleva demais!"
  },
  {
    id: 156,
    texto: "O que o guarda-chuva disse para a chuva? Você não me molha!"
  },
  {
    id: 157,
    texto:
      "Por que o caderno de matemática foi ao médico? Porque tinha muitos problemas!"
  },
  {
    id: 158,
    texto:
      "O que a banana disse para o liquidificador? Você me deixa toda batida!"
  },
  {
    id: 159,
    texto:
      "Por que o fio elétrico é bom em contar piadas? Porque ele sempre passa corrente!"
  },
  {
    id: 160,
    texto: "O que o mar disse para a terra? Estou fazendo onda, mas é por você!"
  },
  {
    id: 161,
    texto: "Por que a faca não pode ser atriz? Porque ela corta muito!"
  },
  {
    id: 162,
    texto: "O que o martelo disse para o dedo? Bati em você!"
  },
  {
    id: 163,
    texto:
      "Por que o jacaré não joga futebol? Porque ele é réptil (ruim de pé)!"
  },
  {
    id: 164,
    texto: "O que um alfinete disse para o outro? Você me espeta!"
  },
  {
    id: 165,
    texto:
      "Por que o homem colocou o carro na geladeira? Para dirigir bem gelado!"
  },
  {
    id: 166,
    texto: "O que a chuva disse para a terra? Agora você vai ficar molhadinha!"
  },
  {
    id: 167,
    texto:
      "Por que o cemitério é o lugar mais seguro do mundo? Porque tem gente morrendo para entrar lá!"
  },
  {
    id: 168,
    texto: "O que o chão disse para o skate? Para de me ralar!"
  },
  {
    id: 169,
    texto: "Por que o vaso não briga? Porque ele é pacífico!"
  },
  {
    id: 170,
    texto:
      "O que a flor falou para o florista? Me dá um desconto, eu sou da área!"
  },
  {
    id: 171,
    texto:
      "Por que a minhoca não tem medo de leão? Porque ela mora no subsolo da selva!"
  },
  {
    id: 172,
    texto:
      "O que a impressora disse para o papel? Te imprimo tudo o que estou pensando!"
  },
  {
    id: 173,
    texto: "Por que o mar não transborda? Porque ele está controlando as ondas!"
  },
  {
    id: 174,
    texto: "O que a bicicleta disse para a moto? Pare de me imitar!"
  },
  {
    id: 175,
    texto: "Por que o pintinho foi ao dentista? Porque quebrou o bico!"
  },
  {
    id: 176,
    texto:
      "O que o detergente disse para a gordura? Você vai sair de todas as panelas!"
  },
  {
    id: 177,
    texto:
      "Por que o pato tinha medo do futuro? Porque o futuro é incerto, mas o passado é patético!"
  },
  {
    id: 178,
    texto: "O que a letra A disse para a letra B? Pare de ser tão redonda!"
  },
  {
    id: 179,
    texto:
      "Por que a árvore não usa internet? Porque só tem um galho de conexão!"
  },
  {
    id: 180,
    texto: "O que o CD disse para o DVD? Você é dupla face mesmo, hein!"
  },
  {
    id: 181,
    texto:
      "Por que o menino jogou o relógio pela janela? Porque queria ver o tempo voar!"
  },
  {
    id: 182,
    texto:
      "O que a chave inglesa falou para o parafuso? Eu sempre dou uma volta em você!"
  },
  {
    id: 183,
    texto:
      "Por que o livro de geografia foi ao médico? Porque estava sem mapa de referência!"
  },
  {
    id: 184,
    texto:
      "O que o esqueleto falou no restaurante? Só um pouco de carne, por favor!"
  },
  {
    id: 185,
    texto:
      "Por que o jogador de futebol não sai na chuva? Porque tem medo de ser barrado!"
  },
  {
    id: 186,
    texto: "O que a cola disse para o papel? Vem cá, que eu te grudo!"
  },
  {
    id: 187,
    texto: "Por que o gato mia para a lua? Porque os gatos são luáticos!"
  },
  {
    id: 188,
    texto:
      "O que o ovo frito disse para o bacon? A gente está sempre junto no café da manhã!"
  },
  {
    id: 189,
    texto:
      "Por que o bombeiro não gosta de contar piadas? Porque elas sempre pegam fogo!"
  },
  {
    id: 190,
    texto: "O que o bolo falou para o fermento? Você me cresce!"
  },
  {
    id: 191,
    texto: "Por que o bebê tossiu? Porque ele se engasgou com as palavras!"
  },
  {
    id: 192,
    texto: "O que a calculadora disse para o aluno? Conte comigo!"
  },
  {
    id: 193,
    texto: "Por que a coruja usa óculos? Porque ela não quer passar por burra!"
  },
  {
    id: 194,
    texto: "O que a lagarta disse para a borboleta? Você mudou tanto..."
  },
  {
    id: 195,
    texto:
      "Por que o astronauta deixou o celular em casa? Porque ele queria atender em outro planeta!"
  },
  {
    id: 196,
    texto: "O que o teto disse para a parede? Eu te cubro!"
  },
  {
    id: 197,
    texto: "Por que o padeiro ficou rico? Porque ele cresceu na massa!"
  },
  {
    id: 198,
    texto: "O que a formiga disse para o pé? Para de pisar em mim!"
  },
  {
    id: 199,
    texto:
      "Por que o espelho foi ao psicólogo? Porque estava refletindo demais!"
  },
  {
    id: 200,
    texto: "O que o tênis disse para o pé? Você me deixa correndo!"
  },
  {
    id: 201,
    texto: "Por que a cebola foi ao cabeleireiro? Para fazer uma trança!"
  },
  {
    id: 202,
    texto:
      "O que o lápis de cor disse para o papel branco? Vou te deixar colorido!"
  },
  {
    id: 203,
    texto: "Por que o sapo atravessa a rua? Para chegar ao outro lago!"
  },
  {
    id: 204,
    texto: "O que o ovo disse para a galinha? Você é minha mãe ou meu ovo?"
  },
  {
    id: 205,
    texto:
      "Por que a lâmpada não conta segredos? Porque ela está sempre se acendendo!"
  }
];

function mostrarPiada() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  document.querySelector(".joke-text").textContent = joke.texto;
}

// Evento para o botão de nova piada
document.getElementById("newJokeBtn").addEventListener("click", mostrarPiada);

// Exibe uma piada ao carregar a página
window.onload = mostrarPiada;
