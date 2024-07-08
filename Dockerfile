FROM node:18

RUN npm install -g npm@10.5.0

ARG NPM_TOKEN=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

WORKDIR /app

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > $HOME/.npmrc

RUN npm i -g @othentic/othentic-cli --legacy-peer-deps

ENTRYPOINT [ "othentic-cli" ]
