const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, addBase, theme }) {
  addBase({
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '-0.025em',
    },
    'h1': {
      fontSize: theme('fontSize.4xl'),
      '@screen md': {
        fontSize: theme('fontSize.6xl'),
      },
      '@screen lg': {
        fontSize: theme('fontSize.7xl'),
      },
    },
    'h2': {
      fontSize: theme('fontSize.3xl'),
      '@screen md': {
        fontSize: theme('fontSize.5xl'),
      },
    },
    'h3': {
      fontSize: theme('fontSize.2xl'),
      '@screen md': {
        fontSize: theme('fontSize.4xl'),
      },
    },
  });

  addComponents({
    '.btn': {
      padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
      borderRadius: theme('borderRadius.md'),
      fontWeight: theme('fontWeight.medium'),
      transition: 'all 300ms',
      textAlign: 'center',
    },
    '.btn-primary': {
      backgroundColor: '#7F00FF',
      color: 'white',
      boxShadow: theme('boxShadow.lg'),
      '&:hover': {
        backgroundColor: '#6A00D6',
        transform: 'scale(1.05)',
      },
    },
    '.btn-outline': {
      borderWidth: '2px',
      borderColor: '#7F00FF',
      '&:hover': {
        backgroundColor: 'rgba(127, 0, 255, 0.2)',
        transform: 'scale(1.05)',
      },
    },
    '.nav-link': {
      position: 'relative',
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      fontWeight: theme('fontWeight.medium'),
      transition: 'all 300ms',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '0',
        height: '2px',
        backgroundColor: '#7F00FF',
        transition: 'all 300ms',
      },
      '&:hover::after': {
        width: '100%',
      },
    },
    '.section': {
      paddingTop: theme('spacing.16'),
      paddingBottom: theme('spacing.16'),
      '@screen md': {
        paddingTop: theme('spacing.24'),
        paddingBottom: theme('spacing.24'),
      },
    },
    '.container': {
      maxWidth: theme('maxWidth.7xl'),
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme('spacing.4'),
      paddingRight: theme('spacing.4'),
      '@screen sm': {
        paddingLeft: theme('spacing.6'),
        paddingRight: theme('spacing.6'),
      },
      '@screen lg': {
        paddingLeft: theme('spacing.8'),
        paddingRight: theme('spacing.8'),
      },
    },
  });
});
