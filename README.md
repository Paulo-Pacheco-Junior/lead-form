# Formulário de Cadastro

Este é um formulário de cadastro simples que valida as entradas de nome, email, telefone e mensagem.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Funcionalidades

- **Validação do campo Nome**: O nome precisa ter pelo menos 2 caracteres.
- **Validação do campo Email**: O email deve ter um formato válido (ex: `exemplo@dominio.com`).
- **Validação do campo Telefone**: O telefone é opcional, mas, se preenchido, ele precisa ter 11 caracteres.
- **Formatação automática do telefone** no formato `(XX) XXXXX-XXXX`.
- **Validação de campos obrigatórios**: O botão **Cadastrar** ficará desabilitado enquanto os campos obrigatórios (Nome e Email) não forem preenchidos.
- **Exibição de mensagens de erro**: Mensagens de erro são exibidas abaixo dos campos caso algum valor inválido seja inserido.
- **Mensagem de sucesso**: Após o cadastro bem-sucedido, uma mensagem de sucesso é exibida e o formulário é desabilitado por 3,5 segundos. Após esse tempo, a mensagem de sucesso desaparece, o formulário é limpo e os campos são reabilitados.
- **Persistência de dados**: Os dados do formulário (Nome, Email, Telefone e Mensagem) são armazenados no **localStorage** após um cadastro bem-sucedido, para que possam ser recuperados posteriormente.

## Como rodar o projeto

Para rodar este projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Paulo-Pacheco-Junior/lead-form.git
   ```

2. Abra o projeto no **Visual Studio Code**.
3. Instale a extensão **Live Server** se ainda não a tiver.
4. Clique com o botão direito no `index.html` e escolha **Open with Live Server**.

Isso deve abrir o projeto em um servidor local e você verá a página no navegador.
