<p align="center">
    <a href="https://minerger.fr">
        <img width="60px" src="https://minerger.vercel.app/images/minerger.svg" />
    </a>
</p>
    
<h1 align="center">MinergerApi</h1>

<p align="center">
    <a href="https://github.com/Minerger/MinergerApi/actions/workflowcodeql-analysis.yml">
        <img src="https://github.com/Minerger/MinergerApi/actions/workflows/codeql-analysis.yml/badge.svg">
    </a>
    <a href="https://github.com/Minerger/MinergerApi/actions/workflows/build.yml">
        <img src="https://github.com/Minerger/MinergerApi/actions/workflows/build.yml/badge.svg">
    </a>
    <a href="https://discord.gg/qDY2epj">
        <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg">
    </a>
</p>

<p align="center">This repository covers the minimum configurations for information retrieval for <a href="https://minerger.fr">our website</a> it uses <a href="https://github.com/strapi/strapi">Strapi</a>.
</p>
<p align="center">
    <a href="https://minerger-api.herokuapp.com">Visit website demo</a>
</p>
<br>

## ⚙️ Installation

First, clone the repo via git and install dependencies :

- Clone repository (`depth` is the amount of commits you want to include. i.e. if you just want the latest commit use git clone --depth 1)

```bash
git clone --depth 1 https://github.com/Minerger/MinergerApi your-project-name
```

- (Use yarn to install the Strapi project (recommended). [Install yarn with these docs](https://classic.yarnpkg.com/en/docs/install/).)

```bash
cd your-project-name
yarn install
```

## Start the project

Start the app in the `dev` environment :

```bash
yarn dev
```

Start the app in the `prod` environment :

```bash
yarn start-prod
```

## Requirements

Complete installation requirements can be found in the documentation under [Installation Requirements](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html#recommended-requirements).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Try live demo

See for yourself what's under the hood by getting access to a [hosted Strapi](https://minerger-api.herokuapp.com/) project with sample data.

## License

This project are released under the [MIT License](https://github.com/Minerger/MinergerApi/blob/main/LICENSE.md)
