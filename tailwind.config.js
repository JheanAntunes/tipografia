/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            screens: {
                '@sm': '24rem',
                '@md': '28rem',
                '@lg': '32rem',
                '@xl': '36rem',
                '@2xl': '42rem',
                '@3xl': '48rem',
                '@4xl': '56rem',
                '@5xl': '64rem',
                '@6xl': '72rem',
                '@7xl': '80rem',
            },
            fontFamily: {
                cinzel: 'var(--font-cinzel)',
                openSans: 'var(--font-openSans)',
                notoSerif: 'var(--font-notoSerif)',
                notoSans: 'var(--font-notoSans)',
                robotoSans: 'var(--font-robotoSans)',
                robotoSerif: 'var(--font-robotoSerif)',
                ibmSans: 'var(--font-ibmPlexSans)',
                ibmSerif: 'var(--font-ibmPlexSerif)',
                merriweatherSans: 'var(--font-merriweatherSans)',
                merriweatherSerif: 'var(--font-merriweatherSerif)',
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'scroll-up': {
                    from: {
                        transform: 'translateX(0px)',
                    },
                    to: {
                        transform: 'translateX(2px)',
                    },
                },
                cursor: {
                    '50%': {
                        borderColor: 'transparent',
                    },
                },
                typing: {
                    from: {
                        width: 0,
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'typewriter-typing':
                    'typing 3s steps(18), cursor 0.8s step-end infinite alternate',
                'scroll-arrow-up': 'scroll-up 0.7s infinite alternate',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
