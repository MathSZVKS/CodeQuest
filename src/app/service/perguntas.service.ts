import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerguntasService {
  constructor() {}

  getPerguntas() {
    let perguntas = [
      {
        nivel: 1,
        categoria: 'Programação WEB',
        pergunta:
          'Qual linguagem de marcação é usada para estruturar o conteudo de uma pagina web?',
        alternativas: { a: 'JavaScript', b: 'CSS', c: 'HTML', d: 'PHP' },
        alternativaCorreta: 'c',
      },

      {
        nivel: 2,
        categoria: 'Programação WEB',
        pergunta: 'O que significa CSS em termos de desenvolvimento web?',
        alternativas: {
          a: 'Computer Style Sheets',
          b: 'Creative Style Sheets',
          c: 'Colorful Style Sheets',
          d: 'Cascading Style Sheets',
        },
        alternativaCorreta: 'd',
      },

      {
        nivel: 3,
        categoria: 'Programação WEB',
        pergunta:
          'Qual dos seguintes é um framework JavaScript amplamente utilizado?',
        alternativas: { a: 'Java', b: 'jQuery', c: 'JSON', d: 'Jekyll' },
        alternativaCorreta: 'b',
      },

      {
        nivel: 4,
        categoria: 'Programação WEB',
        pergunta: 'O que é AJAX no contexto da programação web?',
        alternativas: {
          a: 'Uma linguagem de programação',
          b: 'Uma técnica para carregamento assíncrono de dados',
          c: 'Um formato de arquivo de imagem',
          d: 'Uma biblioteca CSS',
        },
        alternativaCorreta: 'b',
      },

      {
        nivel: 5,
        categoria: 'Programação WEB',
        pergunta:
          'Qual é a função principal do comando SQL "SELECT" em bancos de dados web?',
        alternativas: {
          a: 'Inserir dados',
          b: 'Atualizar dados',
          c: 'Selecionar dados',
          d: 'Excluir dados',
        },
        alternativaCorreta: 'c',
      },

      {
        nivel: 6,
        categoria: 'Programação WEB',
        pergunta: 'O que significa a sigla URL em termos de web?',
        alternativas: {
          a: 'Universal Resource Locator',
          b: 'Uniform Retrieval Locator',
          c: 'Unified Resource Link',
          d: 'Universal Retrieval Link',
        },
        alternativaCorreta: 'a',
      },

      {
        nivel: 7,
        categoria: 'Programação WEB',
        pergunta: 'Em termos de desenvolvimento web, o que é o padrão MVC?',
        alternativas: {
          a: 'Most Valuable Code',
          b: 'Model View Controller',
          c: 'Multiple View Configuration',
          d: 'Main Variable Configuration',
        },
        alternativaCorreta: 'b',
      },

      {
        nivel: 8,
        categoria: 'Programação WEB',
        pergunta:
          'Qual é a diferença entre "GET" e "POST" em solicitações HTTP?',
        alternativas: {
          a: 'GET é utilizado para enviar dados, enquanto POST é usado para receber dados.',
          b: 'GET é mais seguro do que POST.',
          c: 'POST é utilizado para solicitações assíncronas.',
          d: 'GET anexa dados à URL, enquanto POST os envia no corpo da solicitação.',
        },
        alternativaCorreta: 'd',
      },

      {
        nivel: 9,
        categoria: 'Programação WEB',
        pergunta: 'O que é um cookie no contexto da web?',
        alternativas: {
          a: 'Um pequeno script JavaScript',
          b: 'Um arquivo de estilo CSS',
          c: 'Um pequeno arquivo de texto armazenado no navegador do usuário',
          d: 'Uma linguagem de marcação XML',
        },
        alternativaCorreta: 'c',
      },

      {
        nivel: 10,
        categoria: 'Programação WEB',
        pergunta: 'Qual é o propósito do arquivo "robots.txt" em um site?',
        alternativas: {
          a: 'Para exibir mensagens de erro personalizadas',
          b: 'Para instruir os motores de busca sobre quais partes do site podem ser rastreadas',
          c: 'Para armazenar configurações de banco de dados',
          d: 'Para definir estilos específicos para dispositivos móveis.',
        },
        alternativaCorreta: 'b',
      },

      {
        nivel: 11,
        categoria: 'Programação WEB',
        pergunta: 'O que é o Bootstrap em desenvolvimento web?',
        alternativas: {
          a: 'Um editor de texto popular',
          b: 'Um framework front-end para desenvolvimento web',
          c: 'Uma linguagem de programação para servidores web',
          d: 'Um método para compressão de arquivos CSS',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 12,
        categoria: 'Programação WEB',
        pergunta:
          'Qual é a função do elemento HTML <footer> em uma página web?',
        alternativas: {
          a: 'Para adicionar cabeçalhos personalizados',
          b: 'Para inserir conteúdo principal da página',
          c: 'Para incluir scripts JavaScript',
          d: 'Para representar informações de rodapé',
        },
        alternativaCorreta: 'd',
      },
      {
        nivel: 13,
        categoria: 'Programação WEB',
        pergunta: 'O que é um CDN (Content Delivery Network) em termos de web?',
        alternativas: {
          a: 'Uma rede social para desenvolvedores',
          b: 'Um banco de dados centralizado para conteúdo web',
          c: 'Uma rede de servidores para distribuir conteúdo de forma eficiente',
          d: 'Uma linguagem de marcação para documentos web',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 14,
        categoria: 'Programação WEB',
        pergunta:
          'Em CSS, qual propriedade é usada para definir a cor do texto?',
        alternativas: {
          a: 'text-color',
          b: 'font-color',
          c: 'color',
          d: 'text-style',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 15,
        categoria: 'Programação WEB',
        pergunta:
          'Qual dos seguintes não é um método de posicionamento em CSS?',
        alternativas: {
          a: 'relative',
          b: 'center',
          c: 'absolute',
          d: 'fixed',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 16,
        categoria: 'Programação WEB',
        pergunta: 'O que é um elemento <div> em HTML?',
        alternativas: {
          a: 'Um elemento para definir listas',
          b: 'Um elemento para criar links',
          c: 'Um elemento para agrupar conteúdo e aplicar estilos',
          d: 'Um elemento para exibir imagens',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 17,
        categoria: 'Programação WEB',
        pergunta: "O que é um método HTTP 'PUT' usado para fazer?",
        alternativas: {
          a: 'Solicitar dados de um servidor',
          b: 'Excluir recursos do servidor',
          c: 'Atualizar recursos existentes no servidor',
          d: 'Criar novos recursos no servidor',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 18,
        categoria: 'Programação WEB',
        pergunta: "Qual é a diferença entre 'padding' e 'margin' em CSS?",
        alternativas: {
          a: "'padding' é o espaço entre o conteúdo e a borda, enquanto 'margin' é o espaço entre os elementos",
          b: "'padding' é o espaço entre elementos, enquanto 'margin' é o espaço interno de um elemento",
          c: "'padding' é o espaço entre a borda e o elemento, enquanto 'margin' é o espaço interno do elemento",
          d: "'padding' e 'margin' têm o mesmo significado em CSS",
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 19,
        categoria: 'Programação WEB',
        pergunta: "O que é o método 'addEventListener()' em JavaScript?",
        alternativas: {
          a: 'Um método para adicionar estilos CSS dinamicamente',
          b: 'Um método para executar funções de forma assíncrona',
          c: 'Um método para escutar e reagir a eventos em um elemento HTML',
          d: 'Um método para criar novos elementos HTML',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 20,
        categoria: 'Programação WEB',
        pergunta:
          "Qual é o propósito do atributo 'src' em uma tag <img> em HTML?",
        alternativas: {
          a: 'Para definir o estilo da imagem',
          b: 'Para especificar a fonte (URL) da imagem',
          c: 'Para definir a altura da imagem',
          d: 'Para adicionar uma legenda à imagem',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 21,
        categoria: 'Programação WEB',
        pergunta: "O que é um 'framework' CSS?",
        alternativas: {
          a: 'Um conjunto de estilos pré-definidos para construir uma interface de usuário',
          b: 'Um editor de texto para desenvolvimento web',
          c: 'Uma linguagem de programação para estilização de sites',
          d: 'Uma ferramenta para compressão de arquivos CSS',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 22,
        categoria: 'Programação WEB',
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        alternativas: {
          a: 'Operador lógico OR',
          b: 'Operador de concatenação de strings',
          c: 'Operador lógico AND',
          d: 'Operador de comparação de igualdade',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 23,
        categoria: 'Inteligência Artificial',
        pergunta: 'O que é aprendizado de máquina?',
        alternativas: {
          a: 'Um algoritmo que executa tarefas repetitivas',
          b: 'Um método para programar computadores para aprenderem a partir de dados',
          c: 'Um software que simula a inteligência humana',
          d: 'Uma linguagem de programação avançada',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 24,
        categoria: 'Ciência de Dados',
        pergunta: 'O que é normalização de dados em estatística?',
        alternativas: {
          a: 'Um método para converter dados em formato JSON',
          b: 'Um processo de ajuste de dados para uma escala padrão',
          c: 'Uma técnica para criar gráficos de barras',
          d: 'Um modelo de regressão linear',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 25,
        categoria: 'Sistemas Operacionais',
        pergunta: 'O que é um sistema operacional de tempo real?',
        alternativas: {
          a: 'Um sistema que executa tarefas em velocidade acelerada',
          b: 'Um sistema que responde a eventos em tempo determinístico',
          c: 'Um sistema que prioriza tarefas de acordo com a complexidade',
          d: 'Um sistema que funciona apenas em ambientes virtuais',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 26,
        categoria: 'Desenvolvimento Mobile',
        pergunta: 'Qual é a linguagem de programação principal para o desenvolvimento Android?',
        alternativas: {
          a: 'Swift',
          b: 'Java',
          c: 'Python',
          d: 'C#',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 27,
        categoria: 'Segurança da Informação',
        pergunta: 'O que é um ataque de força bruta?',
        alternativas: {
          a: 'Um ataque que utiliza inteligência artificial para invadir sistemas',
          b: 'Um ataque que explora vulnerabilidades conhecidas em um sistema',
          c: 'Um ataque que tenta adivinhar senhas através de tentativas repetitivas',
          d: 'Um ataque que se baseia na engenharia social',
        },
        alternativaCorreta: 'c',
      },
    
      {
        nivel: 28,
        categoria: 'Blockchain',
        pergunta: 'O que é um contrato inteligente (smart contract) em blockchain?',
        alternativas: {
          a: 'Um acordo legal entre duas partes',
          b: 'Um programa autoexecutável que executa ações quando condições são atendidas',
          c: 'Um documento escrito em linguagem natural',
          d: 'Um protocolo de segurança para transações blockchain',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 29,
        categoria: 'Machine Learning',
        pergunta: 'O que é overfitting em aprendizado de máquina?',
        alternativas: {
          a: 'Um modelo que generaliza bem para dados novos',
          b: 'Um modelo que se ajusta muito aos dados de treinamento e não generaliza bem',
          c: 'Um tipo de algoritmo de clustering',
          d: 'Um método para reduzir a dimensionalidade dos dados',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 30,
        categoria: 'Programação Funcional',
        pergunta: 'O que é imutabilidade em programação funcional?',
        alternativas: {
          a: 'A capacidade de alterar variáveis durante a execução do programa',
          b: 'A prática de evitar a mudança de estado de objetos após a sua criação',
          c: 'A técnica de manter funções como objetos de primeira classe',
          d: 'A característica de permitir a execução de funções em paralelo',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 31,
        categoria: 'Desenvolvimento Web',
        pergunta: 'O que é AJAX?',
        alternativas: {
          a: 'Uma linguagem de programação para desenvolvimento web',
          b: 'Uma técnica que permite a atualização de partes de uma página sem recarregá-la completamente',
          c: 'Um padrão de projeto para interfaces gráficas',
          d: 'Um framework para construção de APIs RESTful',
        },
        alternativaCorreta: 'b',
      },
    
      {
        nivel: 32,
        categoria: 'Big Data',
        pergunta: 'O que é Hadoop?',
        alternativas: {
          a: 'Um banco de dados relacional',
          b: 'Um sistema operacional para servidores de grande porte',
          c: 'Um framework de código aberto para processamento distribuído de grandes conjuntos de dados',
          d: 'Um protocolo de comunicação para redes de alta velocidade',
        },
        alternativaCorreta: 'c',
      },
    
      {
        nivel: 33,
        categoria: 'UX/UI Design',
        pergunta: 'O que é wireframe em design de interface?',
        alternativas: {
          a: 'Um esboço visual de uma página ou aplicativo, representando a estrutura e layout básicos',
          b: 'Um tipo de fonte utilizada em designs minimalistas',
          c: 'Uma técnica de animação para melhorar a experiência do usuário',
          d: 'Um padrão de codificação para otimizar o desempenho de interfaces gráficas',
        },
        alternativaCorreta: 'a',
      },
    
      {
        nivel: 34,
        categoria: 'Cloud Computing',
        pergunta: 'O que é uma instância em computação em nuvem?',
        alternativas: {
          a: 'Um software de virtualização',
          b: 'Um ambiente de desenvolvimento integrado na nuvem',
          c: 'Uma cópia de segurança de dados armazenada em um servidor remoto',
          d: 'Um servidor virtualizado que pode ser usado pelos usuários',
        },
        alternativaCorreta: 'd',
      },
      {
        nivel: 35,
        categoria: 'Cibersegurança',
        pergunta: 'O que é phishing?',
        alternativas: {
          a: 'Um tipo de malware que se propaga por e-mails',
          b: 'Um ataque que explora vulnerabilidades em firewalls',
          c: 'Uma técnica de engenharia social que visa enganar usuários para obter informações sensíveis',
          d: 'Um método de criptografia utilizado para proteger senhas',
        },
        alternativaCorreta: 'c',
      },
    
      {
        nivel: 36,
        categoria: 'Programação Orientada a Objetos',
        pergunta: 'O que é encapsulamento em programação orientada a objetos?',
        alternativas: {
          a: 'A prática de agrupar dados e métodos que operam nesses dados em uma única unidade',
          b: 'A herança de características entre classes',
          c: 'A capacidade de criar múltiplas instâncias de uma classe',
          d: 'A técnica de tornar um método disponível em várias classes',
        },
        alternativaCorreta: 'a',
      },
    
      {
        nivel: 37,
        categoria: 'Data Science',
        pergunta: 'O que é validação cruzada (cross-validation) em machine learning?',
        alternativas: {
          a: 'Um método para testar modelos de aprendizado de máquina em conjuntos de dados diferentes',
          b: 'Um algoritmo de classificação de dados desbalanceados',
          c: 'Um tipo de transformação de dados para reduzir a dimensionalidade',
          d: 'Um processo de avaliação de modelos utilizando o mesmo conjunto de dados de treinamento',
        },
        alternativaCorreta: 'a',
      },
    
      {
        nivel: 38,
        categoria: 'DevOps',
        pergunta: 'O que é integração contínua?',
        alternativas: {
          a: 'Um processo de desenvolvimento que visa entregar grandes atualizações em ciclos longos',
          b: 'Uma prática que envolve a combinação frequente de código de diferentes desenvolvedores em um repositório compartilhado',
          c: 'Um modelo de entrega de software que ocorre apenas em grandes lançamentos',
          d: 'Um método de teste que verifica apenas a interface do usuário',
        },
        alternativaCorreta: 'b',
      }
    ];

    return perguntas;
  }
}
