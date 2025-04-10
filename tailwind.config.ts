import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#FFFFFF',
        foreground: '#1A1F36',
        primary: {
          DEFAULT: '#003366',
          foreground: '#FFFFFF',
          light: '#003366',
        },
        secondary: {
          DEFAULT: '#1E2A3B',
          foreground: '#FFFFFF',
        },
        tertiary: {
          DEFAULT: '#003366',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#FF3621',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#F5F7FA',
          foreground: '#6B7280',
        },
        accent: {
          DEFAULT: '#003366',
          foreground: '#FFFFFF'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1F36'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1F36'
        },
        dark: {
          DEFAULT: '#1A1F36',
          lighter: '#384158',
          foreground: '#FFFFFF',
        }
      },
      borderRadius: {
        none: '0',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'elevated': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'prominent': '0 8px 16px rgba(0, 0, 0, 0.16)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        "accordion-up": {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(8px)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.25s ease-out",
        "fade-out": "fade-out 0.25s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
