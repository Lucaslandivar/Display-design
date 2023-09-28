// !1layout.js

document.addEventListener('DOMContentLoaded', () => {
    const copyCssButton = document.getElementById('firstLayout');
  
    // TODO: Função para copiar o código CSS especificado para a área de transferência
    function copyCssToClipboard() {
      const cssCodeToCopy = `
  /* ?Geral */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      display: flex;
      flex-wrap: wrap;
      margin: 3px;
      flex: 1 1 100vw;
      background: #a1a1a1a1;    
  }
  
  header, nav, main, aside, footer {
      background: #a1a1a1a1;
      display: flex;
      margin: 3px;
  }
  
  a {
      color: inherit;
      text-decoration: none;
  }
  
  /* *Cabeçalho */
  header {
      flex: 1 1 100vw;
      height: 100px;
  }
  
  /* *Navegação */
  nav {
      flex: 1 1 100vw;
      height: 100px;
      align-items: center;
      justify-content: center;
  }
  
  nav a {
      margin: 5%;
      font-size: 20px;
  }
  
  /* *Principal */
  main {
      flex: 20 1 500px;
      height: calc(100vh - 330px);
  }
  
  /* *Barra Lateral */
  aside {
      flex: 1 1 200px;
  }
  
  /* *Rodapé */
  footer {
      flex: 1 1 100vw;
      height: 100px;
  }
  
  /* !Responsividade */
  @media only screen and (max-width: 923px) {
      main {
          height: calc(100vh - 436px);
      }
  
      aside {
          flex: 1 1 100vw;
          height: 100px;
      }
  }`;
  
      // *Cria uma área de texto temporária para copiar o código CSS
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = cssCodeToCopy;
  
      // *Anexa a área de texto ao documento
      document.body.appendChild(tempTextArea);
  
      // *Seleciona o texto e copia para a área de transferência
      tempTextArea.select();
      document.execCommand('copy');
  
      // *Remove a área de texto temporária
      document.body.removeChild(tempTextArea);
  
      // *Fornece um feedback ao usuário (opcional)
      alert('O código CSS foi copiado para a área de transferência.');
    }
  
    // *Adiciona um ouvinte de eventos de clique ao botão
    copyCssButton.addEventListener('click', copyCssToClipboard);
  });