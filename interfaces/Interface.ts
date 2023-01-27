export interface InterfaceLayout {
  children: React.ReactNode;
  theme: boolean;
	setTheme: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface InterfaceThemePath {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  asPath?: string;
}

export interface InterfaceTheme {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Copy {
  value: string;
}
