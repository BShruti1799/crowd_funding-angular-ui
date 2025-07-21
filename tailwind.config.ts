// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,ts}'], // make sure Angular files are included
  theme: {
    extend: {
      colors: {
        primary: 'var(--theme-primary)',
        primaryDark: 'var(--theme-primary-dark)',
        surface: 'var(--theme-surface)',
        background: 'var(--theme-background)',
        textPrimary: 'var(--theme-text-primary)',
        textAccent: 'var(--theme-text-accent)',
        gold: 'var(--theme-gold)',
        black: 'var(--theme-black)',
        'gold-light': 'var(--theme-gold-light)', // needed for your navbar hover
      },
    },
  },
  plugins: [],
};

export default config;
