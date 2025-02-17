import { INestjsBffConfigEnv } from '@nestjs-bff/backend/lib/config/nestjs.config.env.interface';
import { extractKey } from '@nestjs-bff/backend/lib/shared/utils/key.shared.utils';

export const NestjsConfigEnv: INestjsBffConfigEnv = {
  nodeEnv: 'test',
  db: {
    mongo: {
      mongoConnectionUri: 'mongodb://root:example@mongodb:27017',
      options: {
        dbName: 'nest-e2e-data',
      },
    },
  },
  http: {
    bffDomain: 'localhost',
    bffPort: 1337,
    get bffRootUrl() {
      return `http://${this.bffDomain}:${this.bffPort}`;
    },
    spaDomain: 'localhost',
    spaPort: 4200,
    get spaRootUrl() {
      return `http://${this.spaDomain}:${this.spaPort}`;
    },
  },
  social: {
    facebook: {
      clientID: 'your-secret-clientID-here', // your App ID
      clientSecret: 'your-client-secret-here', // your App Secret
    },
  },
  jwt: {
    jwtPrivateKey: extractKey(`${process.cwd()}/backend/src/config/keys/jwt.private-key.test.pem`),
    jwtPublicKey: extractKey(`${process.cwd()}/backend/src/config/keys/jwt.public-key.test.pem`),
  },
};
