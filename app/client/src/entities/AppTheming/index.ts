export interface AppTheme {
  name: string;
  created_by: string;
  created_at: string;
  config: {
    colors: {
      primaryColor: string;
      backgroundColor: string;
      [key: string]: string;
    };
    borderRadius: {
      [key: string]: {
        [key: string]: string;
      };
    };
    boxShadow: {
      [key: string]: {
        [key: string]: string;
      };
    };
    fontFamily: {
      [key: string]: string[];
    };
  };
  stylesheet: {
    [key: string]: {
      [key: string]: string;
    };
  };
  properties: {
    colors: {
      primaryColor: string;
      backgroundColor: string;
      [key: string]: string;
    };
    borderRadius: {
      [key: string]: string;
    };
    boxShadow: {
      [key: string]: string;
    };
    fontFamily: {
      [key: string]: string;
    };
  };
}