# NeonCode Solutions - Website

Site responsivo e moderno para a software house fictícia **NeonCode Solutions**, especializada em desenvolvimento de software personalizado e soluções SaaS/ERP para empresas.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com SSR e roteamento
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas e interativas
- **GSAP** - Efeitos de scroll avançados
- **React Hook Form** - Validação de formulários

## 📋 Funcionalidades

### Página Inicial
- ✅ Seção Hero com animações fade-in
- ✅ Seção Sobre Nós com animações slide-up ao scroll
- ✅ Seção Serviços com cards animados
- ✅ Portfólio com galeria de projetos e zoom-in ao hover
- ✅ Formulário de contato com validação completa
- ✅ Menu hambúrguer responsivo para mobile
- ✅ Animações otimizadas para performance

### Design
- ✅ Paleta de cores: Gradiente azul escuro (#003366) a verde claro (#00CC99)
- ✅ Animações de hover em botões (escala e sombra)
- ✅ Efeitos parallax com GSAP
- ✅ Ícones SVG animados
- ✅ Tipografia moderna e responsiva

### SEO e Acessibilidade
- ✅ Meta tags configuradas
- ✅ Alt texts em imagens
- ✅ Alto contraste de cores
- ✅ Navegação por teclado
- ✅ Estrutura semântica HTML

## 🛠️ Instalação

1. **Clone o repositório** (ou use os arquivos fornecidos)

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse o site:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🌐 Deploy

Para fazer deploy do projeto, você pode usar qualquer plataforma que suporte Next.js:

### Build de Produção

Primeiro, crie o build de produção:
```bash
npm run build
```

### Plataformas de Deploy

O projeto pode ser deployado em qualquer plataforma que suporte Next.js, como:

- **Netlify** - Conecte seu repositório e configure o build
- **AWS Amplify** - Configure o build: `npm run build`
- **Railway** - Deploy automático via Git
- **DigitalOcean App Platform** - Suporte nativo para Next.js
- **Servidor próprio** - Execute `npm start` após o build

Todas as plataformas devem usar:
- Build Command: `npm run build`
- Output Directory: `.next` (gerenciado automaticamente pelo Next.js)

## 🔧 Configuração do Formulário de Contato

O formulário de contato está configurado para usar a API route em `/app/api/contact/route.ts`.

### Integração com Serviço de Email

Para habilitar o envio real de emails, você pode usar:

#### Opção 1: Resend (Recomendado)
1. Instale: `npm install resend`
2. Obtenha sua API key em [resend.com](https://resend.com)
3. Adicione no `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```
4. Descomente o código no arquivo `app/api/contact/route.ts`

#### Opção 2: SendGrid
1. Instale: `npm install @sendgrid/mail`
2. Configure similarmente ao Resend

#### Opção 3: Nodemailer
1. Instale: `npm install nodemailer`
2. Configure com seu provedor SMTP

## 🎨 Personalização

### Cores
Edite `tailwind.config.js` para alterar a paleta de cores:
```javascript
colors: {
  primary: {
    dark: '#003366',
    light: '#00CC99',
  },
}
```

### Conteúdo
- Edite os componentes em `/components`
- Modifique textos e imagens diretamente nos arquivos
- Adicione novos projetos em `components/Portfolio.tsx`

### Animações
- Ajuste animações do Framer Motion nos componentes
- Modifique efeitos GSAP em `components/Hero.tsx`

## 📱 Responsividade

O site é totalmente responsivo e testado em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Email Service (opcional)
RESEND_API_KEY=your_api_key_here

# Outras variáveis conforme necessário
```

## 📝 Estrutura do Projeto

```
empresa/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route para formulário
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página inicial
├── components/
│   ├── About.tsx                 # Seção Sobre Nós
│   ├── Contact.tsx               # Seção Contato
│   ├── Footer.tsx                # Rodapé
│   ├── Header.tsx                # Cabeçalho/Navegação
│   ├── Hero.tsx                  # Seção Hero
│   ├── Portfolio.tsx             # Seção Portfólio
│   └── Services.tsx               # Seção Serviços
├── public/                       # Arquivos estáticos
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🐛 Troubleshooting

### Erro ao instalar dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro de build
```bash
# Verifique se todas as dependências estão instaladas
npm install
npm run build
```

### Animações não funcionam
- Verifique se o JavaScript está habilitado
- Confirme que Framer Motion está instalado: `npm list framer-motion`

## 📄 Licença

Este projeto é um exemplo/template e pode ser usado livremente.

## 🤝 Contribuindo

Sinta-se à vontade para fazer fork, melhorar e personalizar conforme suas necessidades!

## 📞 Suporte

Para dúvidas sobre o código ou implementação, consulte a documentação oficial:
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

---

Desenvolvido com ❤️ para NeonCode Solutions

