// src/utils/tailwindConfig.ts

interface TailwindConfig {
  theme: {
    extend: {
      colors: {
        [key: string]: string;
      };
      spacing: {
        [key: string]: string;
      };
      fontFamily: {
        [key: string]: string[];
      };
    };
  };
  variants: {
    extend: {
      [key: string]: string[];
    };
  };
  plugins: any[];
}

const tailwindConfig: TailwindConfig = {
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#F59E0B',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};

export default tailwindConfig;