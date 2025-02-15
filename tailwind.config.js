/** 
 * Tailwind CSS Configuration File
 * ==================================
 * This file defines the custom Tailwind CSS setup for the template. 
 * It includes theme extensions, dark mode support, and plugin integrations.
 * Use the comments below to understand each section and how to customize it.
 */

module.exports = {
  // Enable dark mode with 
  darkMode: "class", 

  // Specify the paths to all template files where Tailwind CSS classes will be used.
  // This ensures unused CSS is purged during production builds for optimal performance.
  content: [
    "./assets/**/*.{html,js}", // Include all HTML and JS files in the assets folder
    "./index.html",            // Main index file
    "./themes/**/*.{html,js}", // All HTML and JS files in the themes folder
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],

  theme: {
    extend: {
      // Extend the default color palette with custom colors for branding.
      colors: {
        primary: '#2c886f', // Primary color for buttons, links, etc.
        'primary-hover': '#256f5b', // Hover effect for primary elements
        secondary: '#1decb2', // Secondary color for accents
        'secondary-hover': '#00ffc2', // Hover effect for secondary elements
        darkmuted: '#5a5b5a', // muted color for dark mode
        lightmuted: '#dadada', // muted color for light mode
        dark: '#252525', // Background for dark mode
        light: '#f3f4f6', // Background for light mode
      },

      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },

      // Define reusable text colors for typography
      textColor: {
        primary: '#2c886f', // Primary text color for headings or links
        secondary: '#1decb2', // Secondary text color for smaller elements
        muted: '#acb0af', // Muted text for subtle elements
        dark: '#4b5563', // Dark text for light mode
        light: '#f3f4f6', // Light text for dark mode
      },

      // Custom box shadows 
      boxShadow: {
       
        'small' : "0 7px 13px -2px", //small shadow
        'medium' : '0 10px 15px -5px', //medium shadow
        'large': '0 15px 20px -5px', // large shadow
        'extra-large': '0 25px 35px -5px', // extra-large shadow
      

      },
      
    },
  },

  // Add Tailwind plugins to extend functionality
  plugins: [
    require('flowbite/plugin'), // Flowbite plugin for pre-built components 
    require('tailwindcss'),     // Tailwind CSS plugin
    require('autoprefixer'),    // Autoprefixer for browser compatibility
    require('postcss-import'),
  ],
};

