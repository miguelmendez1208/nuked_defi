## New React Next.js Bun frontend repo
Install bun. It's a drop in replacement for Node.js, but node.js should work too
```
curl -fsSL https://bun.sh/install | bash
```
now install packages
```
bun install
```
now run next.js dev server.
```
bun next dev
```
make sure you're also running an anvil server in the background
```
anvil
```
(foundry install instructions incase it's not installed): 
```
https://book.getfoundry.sh/getting-started/installation
```
and also the seperate backend repo 
```
bun index.ts
```
bun can run typescript files so you dont have to compile it down to javascript (isn't that nice?)
## Okay now you can go open localhost:3000
Click open app which leads you to the dashboard page.
It will retrieve the vaults from the backend repo and display them, and display buttons to connect your account as well as send transaction to the addresses.





## Old boiler plate readme
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
