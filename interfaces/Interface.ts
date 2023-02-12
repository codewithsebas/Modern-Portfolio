export interface InterfaceLayout {
  children: React.ReactNode;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InterfaceThemePath {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  asPath?: string;
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InterfaceTheme {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  lang: boolean;
}

export interface Copy {
  value: string;
}

export interface InterfaceThemeLanguage {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TooltipInterface {
  title: string;
  theme: boolean;
}
