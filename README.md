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

## GitHub Deploy Notes

Enable Github Pages requires a subscription 4$ a month

Settings > Pages > Source - Enable GitHub Actions

Tested on a none custom domain

next.config the basepath may need to be removed or modified if repo name or custom domain name is added.

## Nginx Deploy and build notes

npm run build

pm2 npm --name "fable" -- start

Required node -v 20.11.1, pm2

## Bugs

Build bugs. Ignore head warnings. Some weird bug with nextjs 14.1 with the Head migrations.