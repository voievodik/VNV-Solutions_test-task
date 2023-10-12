import English from '../languages/en-US.json';

export type LanguageType = {
  [key in keyof typeof English]: string;
}
