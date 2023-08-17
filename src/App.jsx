import "./App.css";

function App() {
  const message = 'let pessoa = { nome: "Alice", idade: 30 };';
  const message2 =
    'let valor; if (condicao) { valor = 10 } else { valor = "Texto" };';
  const message3 =
    "As expressões relacionais comparam valores e retornam valores booleanos (true ou false). Operadores relacionais incluem igual (==), diferente (!=), maior que (>), menor que (<), maior ou igual que (>=) e menor ou igual que (<=).";
  return (
    <>
      <p>
        JavaScript é uma linguagem de programação amplamente utilizada no
        desenvolvimento web. É uma linguagem de alto nível, interpretada e
        orientada a objetos, que permite adicionar interatividade e
        funcionalidade a páginas da web. Não é necessário compilar o código
        antes de executá-lo. Isso torna o desenvolvimento mais rápido e
        flexível.
      </p>
      <p>
        Sua sintaxe é simples e flexível, o que facilita muito na manipulação de
        elementos HTML, estilizar páginas, realizar validações de formulários,
        enviar e receber dados do servidor, criar animações, gerenciar eventos e
        muito mais.
      </p>
      <p>
        Além disso, uma das características mais poderosas do JavaScript é a
        capacidade de trabalhar com assincronismo, permitindo que operações
        demoradas sejam realizadas sem bloquear a execução do programa. Isso é
        particularmente útil para lidar com chamadas de API, manipulação de
        arquivos e outras tarefas que podem levar tempo. Logo, existe a
        possibilidade de que os desenvolvedores obtenham dados externos, como
        informações de um banco de dados ou atualizações em tempo real, e as
        utilizem em suas aplicações.
      </p>
      <p>
        O JavaScript também é utilizado no desenvolvimento de aplicações web do
        lado do cliente (front-end) e também no lado do servidor (back-end). No
        front-end, ele trabalha em conjunto com HTML e CSS para criar interfaces
        de usuário interativas. No back-end, o JavaScript é utilizado em
        plataformas como o Node.js para construir servidores e lidar com
        solicitações dos clientes.
      </p>
      <h2>Legibilidade</h2>
      <p>
        Nomeação significativa de variáveis e funções: Use nomes descritivos
        para suas variáveis e funções, de forma que o propósito e a função sejam
        facilmente compreendidos. Evite abreviações obscuras ou nomes genéricos,
        pois isso pode tornar o código difícil de entender.
      </p>
      <p>
        Formatação consistente: Mantenha uma formatação consistente ao longo do
        código. Isso inclui a indentação correta, uso adequado de espaços em
        branco, alinhamento de código e escolha de convenções para chaves de
        abertura e fechamento.
      </p>
      <p>
        Comentários relevantes: Use comentários para explicar partes do código
        que possam ser confusas ou que exijam alguma explicação adicional. Isso
        é particularmente útil para trechos de código complexos ou algoritmos
        não triviais.
      </p>
      <p>
        Evite linhas muito longas: Evite linhas de código excessivamente longas,
        pois isso pode dificultar a leitura e a compreensão do código.
        Recomenda-se que as linhas não ultrapassem 80-100 caracteres.
      </p>
      <p>
        Divida o código em funções menores: Em vez de escrever um bloco grande
        de código, divida-o em funções menores e autônomas. Isso melhora a
        legibilidade, torna o código mais modular e facilita a reutilização.
      </p>
      <p>
        Evite aninhamento excessivo: Evite aninhar blocos de código
        profundamente um dentro do outro. Isso pode tornar o código difícil de
        entender e acompanhar a lógica do programa. Considere refatorar o código
        para reduzir o aninhamento ou usar técnicas como promessas, async/await
        ou bibliotecas de fluxo de controle, como o lodash.
      </p>
      <p>
        Siga as melhores práticas da comunidade: É sempre uma boa prática seguir
        as melhores práticas e padrões da comunidade JavaScript. Por exemplo, o
        uso adequado de declarações de variáveis, manipulação correta de
        exceções, utilização de operadores apropriados, entre outros.
      </p>
      <h2>Redigibilidade</h2>
      <p>
        Use recursos modernos do JavaScript: O JavaScript tem evoluído ao longo
        dos anos, e novos recursos foram adicionados para tornar a linguagem
        mais expressiva e concisa. Utilize características como arrow functions,
        desestruturação, operadores de spread, rest parameters, async/await,
        entre outros, para escrever código mais limpo e conciso.
      </p>
      <p>
        Utilize estruturas de controle apropriadas: JavaScript oferece várias
        estruturas de controle, como loops e condicionais. Certifique-se de
        escolher a estrutura de controle mais adequada para cada situação,
        levando em consideração a clareza e a simplicidade. Por exemplo, o uso
        de loops de iteração apropriados, como o for...of, em vez do for
        tradicional quando você está trabalhando com arrays ou iteráveis.
      </p>
      <p>
        Utilize funções de ordem superior (Higher-Order Functions): JavaScript é
        uma linguagem funcional, e aproveitar as funções de ordem superior pode
        tornar o código mais conciso e expressivo. Use funções como map(),
        filter(), reduce() e forEach() para manipular arrays de forma
        declarativa, evitando loops explícitos.
      </p>
      <p>
        Evite repetição de código: DRY (Don't Repeat Yourself) é um princípio
        fundamental da programação. Evite repetição de código sempre que
        possível, agrupando funcionalidades comuns em funções reutilizáveis.
        Isso torna o código mais conciso, mais fácil de manter e menos propenso
        a erros.
      </p>
      <p>
        Escolha nomes de variáveis e funções claros e descritivos: Assim como na
        legibilidade, a escolha de nomes significativos é importante para a
        redigibilidade. Use nomes que sejam claros, descritivos e reflitam o
        propósito da variável ou função. Isso tornará o código mais fácil de
        entender e reduzirá a necessidade de comentários explicativos.
      </p>
      <p>
        Faça bom uso de comentários: Embora o código deva ser o mais
        autoexplicativo possível, em algumas situações é útil adicionar
        comentários para fornecer informações adicionais sobre a intenção do
        código ou explicar partes complexas. Use comentários de forma adequada,
        mas não exagere, para não tornar o código poluído.
      </p>
      <p>
        Escreva código modular e reutilizável: Divida seu código em módulos
        lógicos e reutilizáveis. Isso facilita a manutenção, melhora a clareza
        do código e permite que você aproveite partes já desenvolvidas em outros
        projetos.
      </p>
      <h2>Confiabilidade</h2>
      <p>
        Manipulação adequada de erros: Certifique-se de que seu código esteja
        preparado para lidar com erros e exceções. Use blocos try-catch para
        capturar e tratar erros, evitando que eles causem interrupções não
        desejadas na execução do programa. Além disso, faça bom uso do objeto
        Error e suas subclasses para fornecer informações relevantes sobre os
        erros ocorridos.
      </p>
      <p>
        Validação de entrada: Sempre valide e sanitize os dados de entrada para
        o seu código JavaScript. Isso ajuda a prevenir problemas de segurança,
        como ataques de injeção de código (como SQL injection) ou manipulação de
        dados incorretos. Certifique-se de verificar se os dados recebidos são
        do tipo e formato esperados, e trate-os adequadamente.
      </p>
      <p>
        Testes automatizados: A escrita de testes automatizados é fundamental
        para garantir a confiabilidade do código JavaScript. Use frameworks de
        teste, como o Jest, Mocha ou Jasmine, para criar testes unitários, de
        integração e de aceitação. Isso ajudará a identificar possíveis
        problemas e garantir que o código funcione conforme o esperado em
        diferentes cenários.
      </p>
      <p>
        Gerenciamento de dependências: Ao utilizar bibliotecas e frameworks
        externos em seu projeto JavaScript, é importante gerenciar as
        dependências de forma adequada. Utilize gerenciadores de pacotes, como o
        npm ou o yarn, para instalar e controlar as versões das bibliotecas
        utilizadas. Mantenha-se atualizado sobre atualizações e correções de
        segurança das dependências e aplique-as regularmente em seu projeto.
      </p>
      <p>
        Práticas de programação defensiva: Aplique práticas de programação
        defensiva para garantir a confiabilidade do código. Isso inclui
        verificar se as variáveis ​​e propriedades estão definidas antes de
        acessá-las, validar entradas de usuário e garantir que não ocorram
        valores nulos ou indefinidos inesperados. Use asserções e verificações
        para detectar e lidar com condições inesperadas.
      </p>
      <p>
        Monitoramento e tratamento de erros em tempo de execução: Implemente
        mecanismos de monitoramento de erros em tempo de execução para capturar
        e registrar exceções e erros que ocorram em produção. Isso ajudará a
        identificar problemas e a tomar medidas corretivas rapidamente.
      </p>
      <p>
        Utilização de padrões de projeto: Padrões de projeto, como o Singleton,
        Observer, Factory, entre outros, podem ajudar a melhorar a
        confiabilidade do código, fornecendo estruturas e abstrações bem
        definidas. Esses padrões podem facilitar a manutenção, promover o reúso
        de código e garantir a consistência e confiabilidade do sistema.
      </p>
      <h2>Imperatividade</h2>
      <p>
        A imperatividade em JavaScript refere-se ao estilo de programação no
        qual o código é escrito como uma sequência de instruções para a máquina,
        descrevendo exatamente como as tarefas devem ser executadas passo a
        passo. Nesse paradigma, o desenvolvedor especifica de forma detalhada as
        operações a serem realizadas e como elas devem ser executadas. Isso pode
        envolver a manipulação direta de dados, a modificação do estado do
        programa e a chamada explícita de funções.
      </p>
      <p>
        No entanto, a imperatividade em JavaScript oferece flexibilidade e
        controle detalhado sobre o fluxo de execução, o que pode ser vantajoso
        em certos cenários, especialmente quando se lida com tarefas complexas
        que requerem manipulação direta de dados e interações com o ambiente.
      </p>
      <h2>Compilação</h2>
      <p>
        O JavaScript é uma linguagem interpretada, o que significa que o código
        fonte é lido e executado linha por linha pelo ambiente de execução.
        Entretanto, nos últimos anos, surgiu a técnica de compilação JIT
        (just-in-time) em JavaScript. Com o JIT, o código JavaScript é
        inicialmente interpretado e convertido em código intermediário
        (bytecode) ou representações intermediárias otimizadas.
      </p>
      <p>
        O ambiente de execução usa um motor JavaScript (como o V8 no Google
        Chrome) para analisar o código intermediário e, com base em informações
        em tempo real sobre o comportamento do programa, partes relevantes do
        código são compiladas em código de máquina nativo. Essa compilação em
        tempo de execução permite ajustes e otimizações dinâmicas, melhorando
        significativamente o desempenho do código.
      </p>
      <p>
        A compilação JIT é uma das razões pelas quais o JavaScript se tornou uma
        linguagem rápida e adequada para o desenvolvimento de aplicações web
        modernas. Ela permite que o código seja otimizado conforme é executado,
        aproveitando informações sobre o uso real da aplicação e aplicando
        técnicas avançadas de otimização para melhorar a eficiência do programa.
      </p>
      <h2>Nomes de variáveis</h2>
      <p>
        Nomes de variáveis em JavaScript podem conter letras, dígitos,
        underscores (_), e cifrão ($).
      </p>
      <p>
        Os nomes de variáveis devem começar com uma letra, um underscore (_) ou
        um cifrão ($). Não podem começar com um dígito.
      </p>
      <p>
        O JavaScript é sensível a maiúsculas e minúsculas, portanto,
        minhaVariavel e MinhaVariavel são consideradas variáveis diferentes. Não
        é recomendado usar palavras reservadas (por exemplo, "if", "else",
        "for", "while", etc.) como nomes de variáveis.
      </p>
      <p>
        Os nomes de variáveis devem ser descritivos e seguir uma convenção de
        nomenclatura consistente para melhorar a legibilidade do código.
      </p>
      <p>
        Por convenção, o estilo mais comum para nomear variáveis em JavaScript é
        o camelCase, onde a primeira palavra começa com letra minúscula e as
        palavras subsequentes começam com letra maiúscula. Exemplo:
        minhaVariavel, nomeDoUsuario.
      </p>
      <p>
        Outra convenção de nomenclatura é o snake_case, onde todas as palavras
        são escritas em letras minúsculas e separadas por underscores. Exemplo:
        minha_variavel, nome_do_usuario.
      </p>
      <p>
        É importante evitar o uso de caracteres especiais, espaços ou acentos em
        nomes de variáveis para garantir a compatibilidade e evitar possíveis
        erros.
      </p>
      <p>
        Embora o JavaScript permita nomes de variáveis com qualquer comprimento,
        é uma boa prática usar nomes concisos e significativos para tornar o
        código mais legível e fácil de entender.
      </p>
      <p>
        Lembrando que seguir as regras de nomenclatura e boas práticas ao nomear
        variáveis em JavaScript contribui para um código mais organizado e fácil
        de manter, além de facilitar a colaboração entre desenvolvedores em
        projetos compartilhados.
      </p>
      <h2>Variáveis</h2>
      <p>
        Endereço de memória: Em JavaScript, as variáveis são armazenadas em
        memória. O endereço de memória é o local onde o valor de uma variável é
        armazenado. No entanto, em JavaScript, não temos acesso direto aos
        endereços de memória. Em vez disso, trabalhamos com os valores
        armazenados nessas variáveis.
      </p>
      <p>
        Valor da variável: O valor de uma variável é a informação que está
        armazenada na memória em um determinado endereço. Esse valor pode ser de
        diferentes tipos, como números, strings, booleanos, objetos, arrays,
        entre outros. O valor de uma variável pode ser alterado ao longo do
        tempo, o que é uma das características dinâmicas do JavaScript.
      </p>
      <p>
        Tipo da variável: O tipo de uma variável em JavaScript define a natureza
        dos dados que ela pode conter. Por exemplo, o tipo de uma variável pode
        ser número (para valores numéricos), string (para valores de texto),
        boolean (para valores verdadeiros ou falsos), object (para objetos) e
        assim por diante. É importante lembrar que JavaScript é uma linguagem de
        tipagem dinâmica, o que significa que o tipo de uma variável pode mudar
        durante a execução do programa.
      </p>
      <div className="code">
        <code>
          let idade = 25; // 'idade' é uma variável que contém o valor 25 do
          tipo número. <br />
          let nome = "João"; // 'nome' é uma variável que contém o valor "João"
          do tipo string. <br />
          let ativo = true; // 'ativo' é uma variável que contém o valor
          verdadeiro (true) do tipo boolean.
        </code>
      </div>
      <p>
        Em resumo, em JavaScript, as variáveis são usadas para armazenar valores
        em memória. Cada variável tem um endereço de memória onde seu valor é
        armazenado e possui um tipo que define a natureza dos dados contidos
        nela. A flexibilidade das variáveis em JavaScript permite que elas mudem
        de tipo e valor ao longo da execução do programa.
      </p>
      <h2>Amarração</h2>
      <h3>Amarração Dinâmica</h3>
      <p>
        Também conhecida como "tipagem dinâmica", refere-se a um sistema de
        tipos em que os tipos das variáveis são verificados em tempo de
        execução. Em linguagens com amarração dinâmica, o tipo de uma variável é
        determinado em tempo de execução, quando um valor é atribuído a ela.
        Isso permite que as variáveis mudem de tipo durante a execução do
        programa sem a necessidade de declaração explícita de tipos. JavaScript
        é uma linguagem com amarração dinâmica, o que significa que você pode
        atribuir valores de diferentes tipos a uma variável sem problemas.
      </p>
      <h3>Inferência de Tipo</h3>
      <p>
        Em JavaScript, a inferência de tipo refere-se à capacidade do
        interpretador ou compilador da linguagem de determinar o tipo de uma
        variável com base no valor que ela recebeu. Isso é feito automaticamente
        pelo JavaScript, que detecta o tipo do valor atribuído a uma variável e,
        em seguida, a trata como sendo desse tipo. Por exemplo, se você atribuir
        um número a uma variável, o JavaScript entenderá que essa variável é do
        tipo numérico, e se você atribuir uma string, ela será considerada do
        tipo string. Essa inferência de tipo em JavaScript é uma característica
        da tipagem dinâmica.
      </p>
      <p>
        Em resumo, em JavaScript, temos amarração dinâmica, o que significa que
        as variáveis não precisam ser declaradas com um tipo específico e podem
        mudar de tipo durante a execução do programa. Além disso, o JavaScript
        possui inferência de tipo, o que permite que o tipo de uma variável seja
        determinado automaticamente com base no valor que ela recebeu. Isso
        torna a linguagem mais flexível, mas também requer cuidados para
        garantir que as operações realizadas nas variáveis sejam compatíveis com
        seus tipos atuais.
      </p>
      <h2>Amarração de Armazenagem</h2>
      <h3>Amarração Estática</h3>
      <p>
        A amarração estática refere-se a variáveis que são alocadas em tempo de
        compilação e possuem um tempo de vida fixo durante a execução do
        programa. Isso inclui variáveis globais e constantes declaradas fora de
        funções, bem como funções declaradas sem utilizar a palavra-chave const,
        let ou var. Essas variáveis têm escopo global ou de módulo e permanecem
        disponíveis durante toda a execução do programa.
      </p>
      <h3>Amarração na Pilha (Stack)</h3>
      <p>
        A amarração na pilha é utilizada para alocar variáveis locais de funções
        e seus parâmetros. Quando uma função é chamada, um novo quadro de pilha
        é criado para armazenar suas variáveis e parâmetros. Esses quadros são
        removidos da pilha quando a função retorna. A amarração na pilha é
        eficiente e rápida, mas tem um limite de tamanho, o que significa que a
        quantidade de memória disponível é limitada.
      </p>
      <h3>Amarração no Heap</h3>
      <p>
        A amarração no heap é usada para alocar objetos complexos, como objetos
        criados com construtores ou objetos literais. Ao contrário da pilha, a
        amarração no heap não tem limitações de tamanho, permitindo alocar
        objetos grandes e com tempo de vida dinâmico. Os objetos no heap são
        gerenciados pelo coletor de lixo (garbage collector) do JavaScript, que
        libera automaticamente a memória ocupada por objetos que não estão mais
        sendo usados.
      </p>
      <h2>Escopo</h2>
      <h3>Escopo Estático (ou Lexical)</h3>
      <h4>Subprogramas</h4>
      <p>
        O escopo estático em JavaScript refere-se ao escopo definido em
        subprogramas, como funções e métodos. As variáveis declaradas dentro de
        um subprograma têm escopo local, o que significa que só podem ser
        acessadas dentro desse subprograma. Além disso, as funções internas
        também podem acessar as variáveis do escopo de suas funções "pai",
        criando um aninhamento de escopos.
      </p>
      <h4>Blocos</h4>
      <p>
        O escopo estático também se aplica a blocos de código definidos com as
        palavras-chave let e const. As variáveis declaradas com let ou const
        dentro de um bloco de código têm escopo local limitado a esse bloco e
        não são acessíveis fora dele.
      </p>
      <h4>Globais</h4>
      <p>
        As variáveis declaradas fora de qualquer subprograma ou bloco, ou seja,
        no escopo global, têm escopo global. Elas podem ser acessadas e
        modificadas em qualquer lugar do código, incluindo dentro de
        subprogramas ou blocos.
      </p>
      <h3>Escopo Dinâmico</h3>
      <p>
        JavaScript não suporta escopo dinâmico nativamente. Em escopo dinâmico,
        a visibilidade das variáveis é determinada pelo fluxo de execução do
        programa em tempo de execução, em vez de ser determinada pelo local de
        declaração das variáveis no código fonte (como no escopo estático).
      </p>
      <p>
        Embora JavaScript tenha um escopo estático, ele possui algumas
        particularidades relacionadas ao escopo de variáveis declaradas com var.
        As variáveis declaradas com var têm escopo de função, o que significa
        que elas são visíveis dentro da função onde foram declaradas, mas não
        são limitadas por blocos. Isso pode levar a comportamentos inesperados e
        problemas de escopo em algumas situações.
      </p>
      <p>
        Para evitar esses problemas, é recomendado utilizar let e const em vez
        de var, pois essas palavras-chave fornecem um escopo mais restrito e
        previsível, seguindo o escopo estático padrão. A partir do ECMAScript 6
        (ES6), let e const foram introduzidos para melhorar a manipulação do
        escopo em JavaScript.
      </p>
      <p>
        Em resumo, o JavaScript possui escopo estático (lexical) para
        subprogramas e blocos de código, o que significa que a visibilidade das
        variáveis é definida pelo local de declaração no código fonte. Não há
        suporte nativo para escopo dinâmico em JavaScript, mas é importante
        estar ciente das particularidades do escopo de variáveis declaradas com
        var, optando por let e const para evitar problemas de escopo.
      </p>
      <h2>Ambientes de Referenciação</h2>
      <p>
        Os ambientes de referênciação em JavaScript são fundamentais para
        entender a forma como as variáveis são tratadas e acessadas em
        diferentes partes do código. Eles também desempenham um papel importante
        na criação de encerramentos e no controle de escopo, garantindo que as
        variáveis sejam acessadas corretamente e evitando conflitos entre os
        nomes de variáveis em diferentes partes do código.
      </p>
      <h3>Ambiente Global</h3>
      <p>
        O ambiente global em JavaScript é o contexto em que o código é executado
        inicialmente, fora de qualquer função ou bloco. Todas as variáveis e
        funções declaradas no escopo global são acessíveis a partir de qualquer
        parte do código, incluindo dentro de funções ou blocos aninhados.
      </p>
      <h3>Ambiente de Função</h3>
      <p>
        Quando uma função é chamada em JavaScript, um novo ambiente de
        referênciação é criado para essa função. Esse ambiente contém os
        parâmetros da função e quaisquer variáveis declaradas dentro dela. Cada
        chamada de função cria um novo ambiente de referênciação, que é
        destruído após a conclusão da função.
      </p>
      <h3>Ambiente de Bloco</h3>
      <p>
        Com a introdução do ECMAScript 6 (ES6), blocos de código delimitados por
        chaves {} e criados com as palavras-chave let e const também possuem
        ambientes de referênciação. Isso significa que as variáveis declaradas
        com let e const têm escopo restrito ao bloco em que foram declaradas, em
        vez de serem acessíveis em todo o escopo da função.
      </p>
      <h3>Encerramentos (Closures)</h3>
      <p>
        Em JavaScript, os encerramentos permitem que funções acessem variáveis
        declaradas em seus ambientes externos (escopos "pais"). Isso ocorre
        porque, quando uma função é definida dentro de outra função, a função
        interna "lembra" do ambiente de referênciação onde ela foi criada e pode
        acessar as variáveis desse ambiente, mesmo que a função externa já tenha
        sido concluída.
      </p>
      <h2>Constantes</h2>
      <p>
        As constantes em JavaScript são valores que não podem ser alterados após
        serem atribuídos. Elas são usadas para armazenar informações que não
        devem ser modificadas ao longo da execução do programa. Diferentemente
        das variáveis, que podem ter seus valores atualizados, as constantes
        permanecem constantes durante toda a vida útil do programa.
      </p>
      <h3>Principais características das constantes em JavaScript</h3>
      <p>
        <strong>Declaração:</strong>Em JavaScript, você pode declarar uma
        constante usando a palavra-chave const, seguida pelo nome da constante e
        pelo valor que ela receberá.
      </p>
      <p>
        <strong>Atribuição Única:</strong>Uma vez atribuído um valor a uma
        constante, esse valor não pode ser alterado. Tentar reatribuir um valor
        a uma constante resultará em um erro.
      </p>
      <p>
        <strong>Escopo:</strong>Assim como variáveis declaradas com let, as
        constantes têm escopo de bloco. Isso significa que elas estão
        disponíveis apenas dentro do bloco em que foram declaradas.
      </p>
      <p>
        <strong>Boas Práticas:</strong>Por convenção, o nome das constantes é
        geralmente escrito em letras maiúsculas e separadas por underscores.
        Isso melhora a legibilidade e facilita a identificação das constantes no
        código.
      </p>
      <h3>Benefícios do uso de constantes</h3>
      <p>
        O uso de constantes torna o código mais legível, pois indica que aquele
        valor não deve ser alterado, impede a inadvertida alteração de valores
        que deveriam permanecer constantes e facilita a manutenção do código,
        pois você sabe que valores constantes permanecerão os mesmos ao longo do
        tempo.
      </p>
      <h2>Tipos Primitivos</h2>
      <p>
        Os tipos primitivos em JavaScript são categorias fundamentais de valores
        que representam os dados mais básicos e simples. Eles são valores
        indivisíveis e imutáveis, ou seja, não podem ser modificados após serem
        criados. Os tipos primitivos incluem:
      </p>
      <p>
        <strong>Number:</strong>Representa valores numéricos, incluindo números
        inteiros e números de ponto flutuante. Exemplo: 10, 3.14.
      </p>
      <p>
        <strong>String:</strong>Representa sequências de caracteres, como texto.
        As strings são definidas entre aspas simples ou duplas. Exemplo: 'Olá',
        "Mundo".
      </p>
      <p>
        <strong>Boolean:</strong>Representa valores lógicos, verdadeiro ou
        falso. É frequentemente usado para tomada de decisões em expressões
        condicionais. Exemplo: true, false.
      </p>
      <p>
        <strong>Null:</strong>Representa a ausência intencional de qualquer
        valor ou objeto. É um valor único. Exemplo: null.
      </p>
      <p>
        <strong>Undefined:</strong>Representa o valor de uma variável que foi
        declarada, mas não foi atribuída com um valor. É também um valor único.
        Exemplo: undefined.
      </p>
      <p>
        <strong>Symbol:</strong>Introduzido no ECMAScript 6 (ES6), os símbolos
        são valores únicos e imutáveis que são frequentemente usados como chaves
        para propriedades de objetos. Exemplo: Symbol("descricao").
      </p>
      <p>
        <strong>BigInt:</strong>Introduzido no ECMAScript 11, os BigInts são
        usados para representar inteiros maiores do que o limite superior que o
        tipo Number pode acomodar. Eles são criados adicionando a letra "n" ao
        final de um número inteiro. Exemplo:
        1234567890123456789012345678901234567890n.
      </p>
      <p>
        Esses tipos primitivos são a base de dados em JavaScript. Ao contrário
        de objetos, eles são imutáveis, ou seja, quando você realiza operações
        com eles, você cria novos valores em vez de modificar os existentes. É
        importante entender esses tipos para manipular eficazmente os dados em
        JavaScript e para compreender como ocorrem as operações e comparações
        entre eles.
      </p>
      <h2>Array</h2>
      <p>
        Um array é uma estrutura de dados que permite armazenar uma coleção
        ordenada de elementos. Em JavaScript, um array pode conter valores de
        diferentes tipos, incluindo números, strings, objetos e até mesmo outros
        arrays. Os arrays são muito úteis para armazenar listas de informações
        relacionadas, como uma lista de números, nomes de pessoas ou objetos.
      </p>
      <h3>Principais características dos arrays em JavaScript</h3>
      <p>
        <strong>Declaração:</strong>Os arrays em JavaScript podem ser declarados
        usando colchetes [] e separando os elementos por vírgulas. Por exemplo:
      </p>
      <div className="code">
        <code>
          let numeros = [1, 2, 3, 4, 5]; <br />
          let nomes = ["Alice", "Bob","Charlie"];
        </code>
      </div>
      <p>
        <strong>Acesso aos Elementos:</strong>Os elementos dentro de um array
        são acessados por meio de um índice numérico baseado em zero. Por
        exemplo, numeros[0] acessa o primeiro elemento do array numeros.
      </p>
      <p>
        <strong>Tamanho do Array:</strong>O tamanho (ou comprimento) de um array
        é determinado pela quantidade de elementos que ele contém. Isso pode ser
        obtido usando a propriedade length.
      </p>
      <p>
        <strong>Métodos do Array:</strong>JavaScript oferece uma série de
        métodos embutidos para manipular arrays, como push(), pop(), shift(),
        unshift(), splice(), concat(), join(), indexOf(), slice() e muitos
        outros.
      </p>
      <p>
        <strong>Iteração:</strong>Pode-se percorrer os elementos de um array
        usando loops, como o for, ou métodos como forEach(), map(), filter(),
        reduce().
      </p>
      <p>
        <strong>Arrays Multidimensionais:</strong>Arrays podem conter outros
        arrays, criando arrays multidimensionais que representam estruturas mais
        complexas, como matrizes.
      </p>
      <h3>Exemplo de uso de um array em JavaScript</h3>
      <div className="code">
        <code>
          let frutas = ["maçã", "banana", "laranja"];
          <br />
          console.log(frutas[0]); // Saída: "maçã"
          <br />
          frutas.push("morango"); // Adiciona "morango" ao final do array
          <br />
          console.log(frutas); // Saída: ["maçã", "banana", "laranja",
          "morango"]
          <br />
          frutas.pop(); // Remove o último elemento do array
          <br />
          console.log(frutas); // Saída: ["maçã", "banana", "laranja"]
        </code>
      </div>
      <h2>Tipo Registro</h2>
      <p>
        Em JavaScript, objetos são usados para criar tipos de dados
        personalizados, que são semelhantes aos tipos de registro em outras
        linguagens. Um objeto pode conter propriedades que representam
        diferentes características ou atributos do objeto. As propriedades podem
        ser strings (para propriedades nomeadas) ou símbolos (para propriedades
        únicas e não enumeráveis).
      </p>
      <div className="code">
        <code>{message}</code>
      </div>
      <h2>Tipo União</h2>
      <p>
        JavaScript não possui um tipo de união nativamente, como algumas
        linguagens como TypeScript e Flow. No entanto, você pode criar um tipo
        de união manualmente usando o conceito de tipagem dinâmica. Por exemplo,
        uma variável pode armazenar valores de diferentes tipos e você pode
        verificar e manipular esses valores usando declarações condicionais.
      </p>
      <div className="code">
        <code>{message2}</code>
      </div>
      <h2>Tipo Ponteiro</h2>
      <p>
        JavaScript é uma linguagem de alto nível que gerencia a alocação de
        memória automaticamente, portanto, você não precisa se preocupar com
        ponteiros como em linguagens de programação de baixo nível. Em
        JavaScript, você trabalha com referências a objetos em vez de ponteiros
        para posições de memória específicas.
      </p>
      <h2>Verificação de Tipo</h2>
      <p>
        JavaScript é uma linguagem dinamicamente tipada, o que significa que os
        tipos das variáveis são determinados em tempo de execução. Você pode
        usar operadores como typeof ou instanceof para verificar o tipo de uma
        variável.
      </p>
      <h2>Expressões Aritméticas</h2>
      <p>
        As expressões aritméticas em JavaScript envolvem operações matemáticas.
        Os operadores aritméticos incluem adição (+), subtração (-),
        multiplicação (*), divisão (/) e o módulo (%). Você também pode usar
        parênteses para definir a ordem de avaliação.
      </p>
      <div className="code">
        <code>
          let soma = 5 + 3; // 8<br />
          let produto = 4 * 2; // 8<br />
          let divisao = 10 / 2; // 5<br />
          let resto = 10 % 3; // 1
        </code>
      </div>
      <h2>Expressões Condicionais</h2>
      <p>
        O operador condicional ternário (?) permite avaliar uma expressão e
        retornar um valor com base em uma condição verdadeira ou falsa.
      </p>
      <div className="code">
        <code>
          let idade = 18;
          <br />
          let mensagem = (idade >= 18) ? "Adulto" : "Menor de idade";
        </code>
      </div>
      <h2>Expressões Relacionais e Booleanas</h2>
      <p>{message3}</p>
      <div className="code">
        <code>
          let x = 5;
          <br />
          let y = 10;
          <br />
          let comparacao = x > y; // false
        </code>
      </div>
      <p>
        As expressões booleanas envolvem operadores lógicos, como && (AND), ||
        (OR) e ! (NOT). Elas são usadas para criar condições mais complexas,
        avaliando múltiplas expressões booleanas.
      </p>
      <div className="code">
        <code>
          let temCarteira = true;
          <br />
          let temIdade = 18;
          <br />
          let podeDirigir = temCarteira && temIdade; // true
        </code>
      </div>
      <h2>Atribuição</h2>
      <p>
        A atribuição em JavaScript é feita usando o operador =. Você pode
        atribuir um valor a uma variável.
      </p>
      <div className="code">
        <code>
          let nome = "Alice";
          <br />
          let idade = 30;
        </code>
      </div>
    </>
  );
}

export default App;
