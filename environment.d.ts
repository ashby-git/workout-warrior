namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    DATABASE_URL: string;
    SECRET: string;
  }
}
