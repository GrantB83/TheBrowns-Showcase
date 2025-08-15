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
			padding: {
				DEFAULT: '1rem',
				xs: '0.75rem',
				sm: '1rem',
				md: '1.25rem',
				lg: '1.5rem',
				xl: '2rem',
				'2xl': '2.5rem',
			},
			screens: {
				'xs': '360px',
				'sm': '576px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1200px',
				'2xl': '1366px',
				'3xl': '1536px',
				'4xl': '1920px'
			}
		},
		screens: {
			'xs': '360px',
			'mobile-landscape': '390px',
			'sm': '576px',
			'md': '768px',
			'tablet-large': '810px',
			'lg': '1024px',
			'xl': '1200px',
			'laptop': '1366px',
			'2xl': '1536px',
			'desktop-lg': '1920px',
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			spacing: {
				'xs': '0.25rem',   // 4px
				'sm': '0.5rem',    // 8px
				'md': '0.75rem',   // 12px
				'lg': '1rem',      // 16px
				'xl': '1.25rem',   // 20px
				'2xl': '1.5rem',   // 24px
				'3xl': '2rem',     // 32px
				'4xl': '2.5rem',   // 40px
				'5xl': '3rem',     // 48px
				'6xl': '4rem',     // 64px
				'fluid-xs': 'clamp(0.25rem, 2vw, 0.5rem)',
				'fluid-sm': 'clamp(0.5rem, 3vw, 1rem)',
				'fluid-md': 'clamp(0.75rem, 4vw, 1.5rem)',
				'fluid-lg': 'clamp(1rem, 5vw, 2rem)',
				'fluid-xl': 'clamp(1.25rem, 6vw, 2.5rem)',
				'fluid-2xl': 'clamp(1.5rem, 8vw, 3rem)',
				'fluid-3xl': 'clamp(2rem, 10vw, 4rem)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
