interface IApi {
  version: string;
  apiUrl: string;
  pathFileStatic: string;
}

export const apiConfig = {
  version: 'v2',
  apiUrl: `${process.env.URL_API}`,
  pathFileStatic: `${process.env.PATH_FILE_STATIC}`,
} as IApi;
