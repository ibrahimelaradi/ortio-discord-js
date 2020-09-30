# Ortio Quickstart Template

A quickstart template for discord bot projects using [ortio](https://github.com/Darkystel/ortio-core)

```
├── build               // Compiled files go here
├── src
│   ├── commands
│   │   └── ...         // Commands go here
│   ├── environment.js  // Environment init
│   ├── client.js       // Discord client config file
│   └── index.js        // Entry file
├── .env                // Put API token here
├── .env.test           // Put testing variables here
├── .eslintrc           // ESLint config file
├── .jestrc             // Jest config file
├── .prettierrc         // Prettier config file
├── jest.global.js      // Jest global script
├── package.json
├── tsconfig.json
└── README.md
```

Make sure to open `.gitignore` and add `.env` and `.env.test` after adding your tokens

## Commands

- `npm run dev`/`yarn dev`: Start development environment
- `npm run dev:watch`/`yarn dev:watch`: Start transcompiler with --watch flag for update on change
- `npm run dev:start`/`yarn dev:start`: Start nodemon on transcompiled files
- `npm run test`/`yarn test`: Start testing

## License

MIT © Ibrahim Elaradi
