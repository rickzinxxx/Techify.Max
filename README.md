# Site pronto para Vercel

Este projeto ja esta configurado para funcionar na Vercel com:

- Frontend estatico (`index.html`)
- API serverless (`/api/register`, `/api/login`, `/api/feedback`)
- Banco de dados MongoDB Atlas (persistente)

## 1) Rodar localmente

Crie um arquivo `.env` baseado em `.env.example` e preencha:

```env
MONGODB_URI=...
JWT_SECRET=...
```

Depois rode:

```bash
npm install
npm start
```

Abra: [http://localhost:3000](http://localhost:3000)

## 2) Publicar na Vercel (passo a passo simples)

1. Suba o projeto no GitHub
2. Entre na Vercel e clique em **Add New Project**
3. Selecione o repositorio
4. Em **Environment Variables**, adicione:
   - `MONGODB_URI`
   - `JWT_SECRET`
5. Clique em **Deploy**

Pronto. O site e a API ficam no mesmo dominio da Vercel.

## 3) Banco recomendado

Use MongoDB Atlas (plano gratuito) para armazenar usuarios e feedback.
