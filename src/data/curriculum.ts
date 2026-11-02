export interface DayItem {
  day: string;
  title: string;
  subtitle: string;
  pillar: "fundacao" | "geometria" | "algebra" | "combinatoria";
  analogy: string;
  formula: string;
  hackTitle: string;
  hackText: string;
  geometryType:
    | "signals"
    | "fraction"
    | "decimal"
    | "proportion"
    | "axes"
    | "balance-mean"
    | "weighted"
    | "median"
    | "perimeter"
    | "quadrilateral"
    | "triangle"
    | "inscribed-circle"
    | "pythagoras"
    | "trigonometry"
    | "prism"
    | "equation1"
    | "parabola"
    | "linear-func"
    | "vertex"
    | "compound-curve"
    | "growth-factor"
    | "combinatorics"
    | "factorial"
    | "podium"
    | "combination"
    | "dice-prob"
    | "venn"
    | "logarithm"
    | "radar-tri";
}

export const PILLARS = [
  {
    id: "fundacao",
    range: "DIAS 01 — 09",
    title: "A Fundação & Estatística Tática",
    description:
      "Operações fundamentais, frações, decimais, regra de três, interpretação fria de eixos gráficos e a tríade da estatística (Média, Moda e Mediana).",
    formulaBadge: "a/b = c/d  •  x̄ = Σx / n",
  },
  {
    id: "geometria",
    range: "DIAS 10 — 16",
    title: "Geometria Plana, Círculos & Espacial",
    description:
      "Perímetro, áreas de quadriláteros e triângulos, círculos inscritos e circunscritos, Teorema de Pitágoras, Trigonometria SOH-CAH-TOA e Volumes 3D.",
    formulaBadge: "A = πr²  •  H² = C₁² + C₂²",
  },
  {
    id: "algebra",
    range: "DIAS 17 — 22",
    title: "Álgebra, Funções & Matemática Financeira",
    description:
      "Equações de 1º e 2º grau, o voo parabólico de Bhaskara, Função Afim, Vértice da Parábola (Máximos e Mínimos), Juros Compostos e Fatores de Crescimento.",
    formulaBadge: "f(x) = ax² + bx + c  •  Yv = -Δ/4a",
  },
  {
    id: "combinatoria",
    range: "DIAS 23 — 30",
    title: "Combinatória, Probabilidade, Log & TRI",
    description:
      "Princípio da Contagem, Fatorial, Arranjo vs. Combinação, Probabilidade Conectada (Regra do E/OU), Logaritmos sem pânico e Estratégia de Prova TRI.",
    formulaBadge: "P(A∩B)  •  Log_b(A) = x",
  },
] as const;

export const CURRICULUM_DAYS: DayItem[] = [
  {
    day: "DIA 01",
    title: "A Fundação do Prédio",
    subtitle: "Operações Fundamentais e Jogo de Sinais",
    pillar: "fundacao",
    analogy:
      "Todo grande arranha-céu precisa de uma base sólida de concreto armado. Sinais iguais unem forças; sinais diferentes criam conflito e o maior valor absoluto prevalece.",
    formula: "(+) × (+) = (+)  |  (-) × (-) = (+)  |  (+) × (-) = (-)",
    hackTitle: "DICA DE OURO (×11)",
    hackText:
      "Para multiplicar qualquer número de 2 dígitos por 11 mentalmente (ex: 35 × 11), separe o 3 e o 5, some-os (3+5=8) e encaixe no centro: 385.",
    geometryType: "signals",
  },
  {
    day: "DIA 02",
    title: "A Divisão Justa",
    subtitle: "Frações, MMC e Operações em Linha",
    pillar: "fundacao",
    analogy:
      "Frações nasceram da partilha justa de uma pizza. O denominador indica em quantas fatias o total foi cortado; o numerador exibe quantas você consumiu.",
    formula: "a/b ÷ c/d = a/b × d/c",
    hackTitle: "MACETE DA BORBOLETA",
    hackText:
      "Para somar frações com denominadores diferentes rapidamente, multiplique as diagonais de forma cruzada para o novo numerador e multiplique as bases entre si para o novo chão.",
    geometryType: "fraction",
  },
  {
    day: "DIA 03",
    title: "O Troco na Padaria",
    subtitle: "Números Decimais e Deslizamento de Vírgula",
    pillar: "fundacao",
    analogy:
      "O alinhamento milimétrico é sua tábua de salvação: vírgula embaixo de vírgula e 'zeros fantasmas' nos espaços vazios.",
    formula: "3,45 × 100 = 345,0  |  3,45 ÷ 10 = 0,345",
    hackTitle: "MULTIPLICAÇÃO SEM VÍRGULA",
    hackText:
      "Ao multiplicar decimais complexos, ignore as vírgulas no início. Multiplique como inteiros e devolva o total de casas decimais combinadas no final.",
    geometryType: "decimal",
  },
  {
    day: "DIAS 04 & 05",
    title: "Proporção e a Rodovia",
    subtitle: "Razão, Proporção e Regra de Três",
    pillar: "fundacao",
    analogy:
      "Grandezas Diretamente Proporcionais sobem juntas (multiplica cruzado). Inversamente Proporcionais (velocidade × tempo): uma sobe e esmaga a outra.",
    formula: "a/b = c/d ⇒ a × d = b × c   |   A₁ × B₁ = A₂ × B₂",
    hackTitle: "A REGRA DAS SETAS",
    hackText:
      "Desenhe setas indicando o movimento lógico das grandezas. Se apontam para lados opostos, gire a segunda coluna de ponta-cabeça antes de multiplicar.",
    geometryType: "proportion",
  },
  {
    day: "DIA 06",
    title: "O Painel de Controle",
    subtitle: "Interpretação Tática de Gráficos",
    pillar: "fundacao",
    analogy:
      "Como um médico na UTI lendo o monitor cardíaco: a banca altera sutilmente a escala métrica ou corta o eixo Y para que 2% pareça um abismo visual.",
    formula: "Eixo X (Tempo/Categoria) × Eixo Y (Volume/Intensidade)",
    hackTitle: "MACETE DO INVESTIGADOR",
    hackText:
      "Nunca olhe para o desenho do gráfico primeiro. Busque nesta ordem: 1º Título, 2º Legenda e 3º Unidade de Medida dos eixos (milhares, milhões ou %). 80% das pegadinhas morrem aí.",
    geometryType: "axes",
  },
  {
    day: "DIA 07",
    title: "O Ponto de Equilíbrio",
    subtitle: "Média Aritmética Simples",
    pillar: "fundacao",
    analogy:
      "A média atua como um trator algébrico: pega as montanhas (valores altos) e preenche os vales (valores baixos), nivelando todo o terreno.",
    formula: "(x₁ + x₂ + ... + xₙ) / n = Média",
    hackTitle: "ENGENHARIA REVERSA DA MÉDIA",
    hackText:
      "Quando a banca der a Média e o total de pessoas mas esconder a soma, inverta o pensamento: multiplique a Média pelo número de pessoas para achar o 'tamanho do bolo' original.",
    geometryType: "balance-mean",
  },
  {
    day: "DIA 08",
    title: "O Peso da Escolha",
    subtitle: "Média Ponderada em Concursos",
    pillar: "fundacao",
    analogy:
      "Cada nota recebe uma âncora (Peso). O erro fatal que elimina milhares de candidatos é dividir pela quantidade de matérias em vez da soma dos pesos.",
    formula: "[(N₁ × P₁) + (N₂ × P₂)] / (P₁ + P₂) = Média Ponderada",
    hackTitle: "PORCENTAGEM COMO PESO",
    hackText:
      "Se algo vale 60% da nota e outro 40%, trate diretamente como Peso 60 e Peso 40 e divida tudo por 100 no final, sem usar decimais.",
    geometryType: "weighted",
  },
  {
    day: "DIA 09",
    title: "A Verdade Oculta",
    subtitle: "Moda e Mediana (Rol Estatístico)",
    pillar: "fundacao",
    analogy:
      "A média é corrompida por extremos. A Moda aponta o valor que mais se repete; a Mediana é o centro de gravidade que separa os 50% menores dos 50% maiores.",
    formula: "Rol: x₍₁₎ ≤ x₍₂₎ ≤ ... ≤ [Mediana] ≤ ... ≤ x₍ₙ₎",
    hackTitle: "MACETE DE SOBREVIVÊNCIA",
    hackText:
      "Ao ler a palavra 'Mediana', seu cérebro deve gritar imediatamente: 'ORDENAR!'. Jamais tente achar o meio da lista com os números bagunçados do enunciado.",
    geometryType: "median",
  },
  {
    day: "DIA 10",
    title: "A Cerca do Terreno",
    subtitle: "Perímetro e Fronteiras Lineares",
    pillar: "geometria",
    analogy:
      "O Perímetro não se importa com o que há dentro da chácara; é puramente a caminhada de proteção somando todos os lados externos.",
    formula: "P = L₁ + L₂ + L₃ + ... + Lₙ",
    hackTitle: "LADOS GÊMEOS",
    hackText:
      "No retângulo, a banca fornece apenas chão (base) e parede (altura). Lembre-se de que teto e parede oposta possuem as mesmas dimensões: multiplique ambos por 2.",
    geometryType: "perimeter",
  },
  {
    day: "DIA 11",
    title: "O Piso da Sala",
    subtitle: "Área dos Quadriláteros Notáveis",
    pillar: "geometria",
    analogy:
      "Se o perímetro é a cerca, a Área é a grama que cobre o solo. O cruzamento da Base pela Altura perpendicular (90°) transforma m em m².",
    formula: "Área = Base × Altura   |   Trapézio = [(B + b) × h] / 2",
    hackTitle: "MACETE DO TRAPÉZIO",
    hackText:
      "O Trapézio faz um acordo diplomático entre suas duas bases: some a base maior com a menor, multiplique pela altura vertical (90°) e divida por 2.",
    geometryType: "quadrilateral",
  },
  {
    day: "DIA 12",
    title: "A Vela do Barco",
    subtitle: "Área do Triângulo e Triângulo Equilátero",
    pillar: "geometria",
    analogy:
      "Cortar um retângulo na diagonal gera dois triângulos idênticos. Logo, a área de qualquer triângulo é a área de um quadrilátero cortada pela metade.",
    formula: "A = (Base × Altura) / 2   |   A_eq = (L²√3) / 4",
    hackTitle: "A EXCEÇÃO EQUILÁTERA",
    hackText:
      "Em um Triângulo Equilátero (3 lados iguais), esqueça caçar a altura: eleve o Lado ao quadrado, cole √3 ao lado e divida tudo por 4.",
    geometryType: "triangle",
  },
  {
    day: "DIA 13",
    title: "O Contorno Perfeito",
    subtitle: "Círculos, Circunferência e Raio",
    pillar: "geometria",
    analogy:
      "Tudo gira em torno do Raio (r). O número π (≈ 3,14) é a prova física de que toda roda completa mede cerca de três vezes seu próprio diâmetro.",
    formula: "Comprimento = 2 · π · r   |   Área = π · r²",
    hackTitle: "ARMADILHA DO DIÂMETRO",
    hackText:
      "Se a banca fornecer o Diâmetro (linha que atravessa de ponta a ponta) em vez do Raio, corte esse número violentamente pela metade antes de aplicar nas fórmulas.",
    geometryType: "inscribed-circle",
  },
  {
    day: "DIA 14",
    title: "O Atalho do Carpinteiro",
    subtitle: "Teorema de Pitágoras",
    pillar: "geometria",
    analogy:
      "A escada dos bombeiros (Hipotenusa, oposta ao ângulo de 90°), a parede do prédio e o asfalto da rua (Catetos) formam uma balança de áreas inquebrável.",
    formula: "H² = C₁² + C₂²",
    hackTitle: "TRIÂNGULO SAGRADO 3-4-5",
    hackText:
      "Grave a proporção 3, 4 e 5 (onde 5 é a hipotenusa). Se os catetos medirem 6 e 8 (multiplicados por 2), nem calcule raiz: a hipotenusa é imediatamente 10!",
    geometryType: "pythagoras",
  },
  {
    day: "DIA 15",
    title: "As Sombras da Pirâmide",
    subtitle: "Trigonometria no Triângulo Retângulo",
    pillar: "geometria",
    analogy:
      "Quando falta um lado mas você tem o ângulo de inclinação, a Trigonometria funciona como um radar tático relacionando Cateto Oposto, Adjacente e Hipotenusa.",
    formula: "Sen = CO / H   |   Cos = CA / H   |   Tan = CO / CA",
    hackTitle: "O MANTRA SOH-CAH-TOA",
    hackText:
      "Memorize o grito de guerra no início da prova: SOH (Seno = Oposto/Hipotenusa), CAH (Cosseno = Adjacente/Hipotenusa), TOA (Tangente = Oposto/Adjacente).",
    geometryType: "trigonometry",
  },
  {
    day: "DIA 16",
    title: "O Reservatório",
    subtitle: "Geometria Espacial e Volumes (m³)",
    pillar: "geometria",
    analogy:
      "Imagine milhares de folhas de papel empilhadas formando um bloco 3D: calcule a Área da Base e multiplique pela Altura. Se afunilar em ponta (Pirâmide/Cone), divida por 3.",
    formula: "Prisma/Cilindro: V = A_b × h   |   Pirâmide/Cone: V = (A_b × h) / 3",
    hackTitle: "CONVERSÃO BLINDADA (1 m³ = 1.000 L)",
    hackText:
      "Cada 1 metro cúbico (1 m³) engole exatos 1.000 Litros de água. Achou um reservatório de 8 m³? São instantaneamente 8.000 litros.",
    geometryType: "prism",
  },
  {
    day: "DIA 17",
    title: "A Balança Perfeita",
    subtitle: "Equação do 1º Grau e Isolamento",
    pillar: "algebra",
    analogy:
      "O 'X' é uma caixa preta no prato esquerdo de uma balança antiga. Tudo que você retira de um lado deve ser invertido do outro lado do muro da igualdade (=).",
    formula: "3x + 5 = 20  ⇒  3x = 15  ⇒  x = 5",
    hackTitle: "MACETE DO CAOS",
    hackText:
      "Se o X estiver travado sob uma fração, aplique multiplicação cruzada imediatamente para exterminar os denominadores e transformar tudo em linha horizontal.",
    geometryType: "equation1",
  },
  {
    day: "DIA 18",
    title: "O Voo do Foguete",
    subtitle: "Equação do 2º Grau e Bhaskara",
    pillar: "algebra",
    analogy:
      "Um morteiro disparado no deserto sobe, atinge o pico e desaba desenhando uma parábola. Os coeficientes a, b e c revelam onde o projétil toca o solo (raízes X' e X'').",
    formula: "Δ = b² - 4ac   |   x = (-b ± √Δ) / 2a",
    hackTitle: "O VETO INSTANTÂNEO (Δ < 0)",
    hackText:
      "Se ao calcular o Delta (Δ) o resultado for negativo, sorria e pare na hora: não há raiz real. A parábola flutua sem tocar o eixo X.",
    geometryType: "parabola",
  },
  {
    day: "DIA 19",
    title: "A Máquina de Previsões",
    subtitle: "Função Polinomial de 1º Grau (Afim)",
    pillar: "algebra",
    analogy:
      "Entrar num táxi: a bandeirada fixa de R$ 8,00 já acende com o carro parado (coeficiente 'b'), e cada km rodado adiciona R$ 3,00 (taxa 'a' que inclina a reta).",
    formula: "f(x) = ax + b   (Ex: Y = 3x + 8)",
    hackTitle: "LEITURA GRÁFICA EM 2 SEGUNDOS",
    hackText:
      "O ponto exato onde a reta corta verticalmente o Eixo Y revela imediatamente o valor fixo 'b', sem precisar de nenhum cálculo.",
    geometryType: "linear-func",
  },
  {
    day: "DIA 20",
    title: "O Teto e o Abismo",
    subtitle: "Vértice da Parábola (Máximos e Mínimos)",
    pillar: "algebra",
    analogy:
      "As bancas amam perguntar o lucro máximo ou o custo mínimo antes do colapso. Você não quer as raízes no solo, quer a crista da montanha: o Vértice.",
    formula: "X_v = -b / 2a   |   Y_v = -Δ / 4a",
    hackTitle: "MACETE EXECUTIVO",
    hackText:
      "Ao ler 'MÁXIMO', 'MÍNIMO' ou 'MAIOR POSSÍVEL' no enunciado, abandone Bhaskara completa e vá direto para Xv (quando ocorre) ou Yv (valor máximo atingido).",
    geometryType: "vertex",
  },
  {
    day: "DIA 21",
    title: "A Corrosão do Tempo",
    subtitle: "Juros Simples vs. Juros Compostos",
    pillar: "algebra",
    analogy:
      "O Juro Simples cresce em linha reta sobre o capital inicial. O Juro Composto é o efeito bola de neve: o aluguel passa a gerar seu próprio aluguel numa curva exponencial.",
    formula: "J = C · i · t   |   M = C · (1 + i)ᵗ",
    hackTitle: "ALERTA DE HOMOGENEIDADE",
    hackText:
      "Jamais misture taxa (i) ao ano com tempo (t) em meses. Converta ambos para a mesma unidade temporal antes de encostar na fórmula.",
    geometryType: "compound-curve",
  },
  {
    day: "DIA 22",
    title: "O Elevador de Preços",
    subtitle: "Fatores de Crescimento e Descontos Sucessivos",
    pillar: "algebra",
    analogy:
      "Se um notebook sofre 30% de desconto na Black Friday, você paga 70% do valor: basta multiplicar direto por 0,7 em um único salto.",
    formula: "Aumento: V_f = V_i × (1 + i)   |   Desconto: V_f = V_i × (1 - i)",
    hackTitle: "MACETE DOS SALTOS SUCESSIVOS",
    hackText:
      "Dois descontos seguidos de 10% e 20% NÃO somam 30%! Multiplique os fatores restantes: 0,9 × 0,8 = 0,72 (72% pago, logo 28% de desconto real).",
    geometryType: "growth-factor",
  },
  {
    day: "DIA 23",
    title: "O Código do Cofre",
    subtitle: "Princípio Fundamental da Contagem (PFC)",
    pillar: "combinatoria",
    analogy:
      "Um cadeado de 3 roletes de 0 a 9: descubra quantas opções existem em cada etapa independente e multiplique tudo (10 × 10 × 10 = 1.000 senhas).",
    formula: "Total = Etapa₁ × Etapa₂ × ... × Etapaₙ",
    hackTitle: "A ARMADILHA DO 'DISTINTOS'",
    hackText:
      "Se a questão exigir algarismos distintos, o número usado morre na casa seguinte, criando uma escada decrescente: 10 × 9 × 8 = 720.",
    geometryType: "combinatorics",
  },
  {
    day: "DIA 24",
    title: "A Fila do Banco",
    subtitle: "Permutação Simples e com Repetição (Fatorial)",
    pillar: "combinatoria",
    analogy:
      "Embaralhar TODOS os objetos disponíveis na fila aciona a ordem militar de descida do Fatorial (!), multiplicando até 1.",
    formula: "Pₙ = n!   |   5! = 5 × 4 × 3 × 2 × 1 = 120",
    hackTitle: "CLONES EM PALAVRAS (ANAGRAMAS)",
    hackText:
      "Para embaralhar 'BATATA' (6 letras), divida o total pelo fatorial das letras repetidas (três A's e dois T's): 6! / (3! × 2!).",
    geometryType: "factorial",
  },
  {
    day: "DIA 25",
    title: "O Pódio da Corrida",
    subtitle: "Arranjo Simples (A Ordem Importa)",
    pillar: "combinatoria",
    analogy:
      "10 pilotos de Fórmula 1 para 3 vagas no pódio (Ouro, Prata, Bronze). Se inverter Senna e Hamilton muda o resultado real, a ordem importa: é Arranjo.",
    formula: "A_{n,p} = n! / (n - p)!",
    hackTitle: "MACETE DOS TRAÇOS CURTOS",
    hackText:
      "Esqueça a fórmula com fatorial: se são 3 vagas para 10 pilotos, puxe 3 traços no papel e multiplique 10 × 9 × 8 = 720 em cinco segundos.",
    geometryType: "podium",
  },
  {
    day: "DIA 26",
    title: "A Seleção de Soldados",
    subtitle: "Combinação Simples (A Ordem Não Importa)",
    pillar: "combinatoria",
    analogy:
      "Sortear 3 recrutas para varrer o pátio: Silva/Costa ou Costa/Silva são a mesma dupla. Dividimos pelo fatorial das vagas para destruir os clones.",
    formula: "C_{n,p} = n! / [p! (n - p)!]",
    hackTitle: "ACELERADOR DE COMBINAÇÃO",
    hackText:
      "Para C(5,2), puxe 2 números descendo em cima (5 × 4 = 20) e divida pelo fatorial de 2 embaixo (2 × 1 = 2). Resultado instantâneo: 10.",
    geometryType: "combination",
  },
  {
    day: "DIA 27",
    title: "A Mesa de Apostas",
    subtitle: "Probabilidade Básica e Espaço Amostral",
    pillar: "combinatoria",
    analogy:
      "A fração mais fria das exatas: empilhe 'O Que Eu Quero' (Casos Favoráveis) sobre 'Tudo Que Pode Acontecer' (Espaço Amostral).",
    formula: "P = Casos Favoráveis / Casos Possíveis",
    hackTitle: "EVENTO COMPLEMENTAR",
    hackText:
      "Se a banca pedir a chance de NÃO sair o 5 no dado, subtraia a chance de sair (1/6) do inteiro (1): sobram blindados 5/6.",
    geometryType: "dice-prob",
  },
  {
    day: "DIA 28",
    title: "A Roleta Viciada",
    subtitle: "Probabilidades Conectadas (Regra do E e OU)",
    pillar: "combinatoria",
    analogy:
      "A conjunção 'E' exige simultaneidade severa (multiplica as frações). A conjunção 'OU' expande as alternativas (soma as probabilidades).",
    formula: "Regra do 'E': P(A) × P(B)   |   Regra do 'OU': P(A) + P(B) - P(A∩B)",
    hackTitle: "ALERTA SEM REPOSIÇÃO",
    hackText:
      "Tirou uma bola da urna e não devolveu? Na segunda rodada o denominador diminui em 1. Ajuste o piso da segunda fração na hora!",
    geometryType: "venn",
  },
  {
    day: "DIA 29",
    title: "O Terremoto",
    subtitle: "Logaritmos e a Caça ao Expoente",
    pillar: "combinatoria",
    analogy:
      "Como a Escala Richter, o Logaritmo é um compactador de grandezas colossais que faz apenas uma pergunta: 'A base elevada a qual expoente gera esse número?'.",
    formula: "Log_b(A) = x  ⇔  bˣ = A",
    hackTitle: "A REGRA DO PETELECO",
    hackText:
      "Em Log(A³), dê um 'peteleco' no expoente 3: ele cai para a frente multiplicando pacificamente: 3 × Log(A).",
    geometryType: "logarithm",
  },
  {
    day: "DIA 30",
    title: "O Golpe Final",
    subtitle: "Mindset de Guerra e Estratégia TRI",
    pillar: "combinatoria",
    analogy:
      "A TRI do ENEM e os concursos não premiam quem gasta 45 minutos na questão mais difícil, mas sim o assassino silencioso e consistente da matemática básica.",
    formula: "Fase 1 (30 min): Frações + Razão + Gráficos ⇒ Nota de Corte Garantida",
    hackTitle: "PROTOCOLO DOS 10 MINUTOS",
    hackText:
      "Jamais comece a prova pela questão 1 em ordem cega. Nos primeiros 10 minutos, cace todas as questões de Frações, Proporção e Gráficos para blindar sua pontuação base.",
    geometryType: "radar-tri",
  },
];
