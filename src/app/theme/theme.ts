interface Theme {
  colors: {
    'bg-primary': string;
    'bg-secondary': string;
    'blue-primary': string;
    'blue-secondary': string;
    'text-primary': string;
    'text-secondary': string;
    divider: string;
    'button-hover': string;
    'button-active': string;
    bubble: string;
  };
  fontSizes: {
    small: string;
    normal: string;
    medium: string;
    large: string;
    heading: string;
    subtitle: string;
    title: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
    heading: number;
    subtitle: number;
  };
}

export const theme: Theme = {
  colors: {
    'bg-primary': '#FFF',
    'bg-secondary': '#F0F8FF',
    'blue-primary': '#0084FF',
    'blue-secondary': '#007EFF',
    'text-primary': '#121212',
    'text-secondary': '#808080',
    divider: '#C8D4DD',
    'button-hover': '#3095FC',
    'button-active': '#60ACF9',
    bubble: '#F7F8FB',
  },
  fontSizes: {
    small: '0.75rem',
    normal: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
    heading: '2rem',
    subtitle: '2.5rem',
    title: '4.5rem',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    heading: 700,
    subtitle: 600,
  },
};
