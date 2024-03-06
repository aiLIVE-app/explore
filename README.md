## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Build notes

npm run build

pm2 npm --name "fable" -- start

Required node -v 20.11.1

Ignore head warnings. Some weird bug with nextjs 14.1 with the Head migrations.