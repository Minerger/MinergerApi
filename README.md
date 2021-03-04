# MinergerApi [![Build](https://github.com/Minerger/MinergerApi/actions/workflows/build.yml/badge.svg)](https://github.com/Minerger/MinergerApi/actions/workflows/build.yml) [![Join the chat at Discord](https://img.shields.io/badge/chat-on%20discord-7289DA.svg)](https://discord.gg/qDY2epj)


This repository covers the minimum configurations for information retrieval for [our website](https://minerger.fr) it uses [Strapi](https://github.com/strapi/strapi).
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
Complete installation requirements can be found in the documentation under [Installation Requirements](https://strapi.io/documentation/developer-docs/latest/installation/cli.html#step-1-make-sure-requirements-are-met).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project are released under the [MIT License](https://github.com/Minerger/MinergerApi/blob/main/LICENSE.md)