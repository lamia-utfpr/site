interface IAuth {
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export default {
  jwt: {
    secret: `${process.env.APP_SECRET}`,
    expiresIn: `${process.env.APP_SECRET_EXPIRES_IN}`,
  },
} as IAuth;
