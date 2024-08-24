import { DefaultTheme } from 'styled-components'

export const styledTheme: DefaultTheme = {
  skeleton: {
    backgroundColor: '#E9E8E9',
  },
  fonts: {
    primary: 'Inter',
  },
  button: {
    fontSize: '16px',
    boxShadow: 'none',
    borderRadius: '8px',
  },
  colors: {
    black: '#272727',
    white: '#FFFFFF',
    disabled: '#B9B9B9',
    disabledBackground: '#F5F5F5',
    error: 'tomato',
    focus: '#145D99',
    placeholder: '#8E8E8E',
    required: '#FF0000',
    success: '#2DD975',
    text: '#272727',
  },
  checkbox: {
    size: '20px',
    gap: '16px',
    borderRadius: '2px',
  },
  dropdown: {
    fontSize: '16px',
    fontWeight: 400,
    scrollbarWidth: '8px',
    paddingVertical: '10px',
    itemHoverColor: '#09A7C7',
    paddingHorizontal: '16px',
    backgroundColor: '#FFFFFF',
    scrollbarBackground: '#E2E8F0',
  },
  hoverColors: {
    error: 'tomato',
    primary: '#145D99',
    success: '#2DD975',
    secondary: '#2DD975',
  },
  input: {
    labelFontFamily: 'Inter',
    labelFontSize: '16px',
    labelFontWeight: 400,
    fontSize: '16px',
    fontWeight: 400,
    height: '2.75rem',
    fontFamily: 'Inter',
    borderRadius: '8px',
    borderColor: '#8E8E8E',
    paddingVertical: '10px',
    paddingHorizontal: '16px',
    backgroundColor: '#FFFFFF',
  },
  snackbarColors: {
    error: '#FF6363',
    success: '#54B45C',
    info: '#2196f3',
    warning: '#ff9800',
  },
  table: {
    tableHeader: {
      padding: '0px',
      fontWeight: 700,
      color: '#272727',
      fontSize: '16px',
      height: '3.5rem',
      textAlign: 'start',
      fontFamily: 'Inter',
      borderColor: '#B9B9B9',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #B9B9B9',
    },
    tableBody: {
      padding: '0px',
      fontWeight: 500,
      color: '#272727',
      fontSize: '16px',
      textAlign: 'start',
      rowHeight: '3.5rem',
      fontFamily: 'Inter',
      borderColor: '#E2E8F0',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
    },
    tableAdvancedFilter: {
      width: 'auto',
      height: 'auto',
      borderColor: '#000',
      backgroundColor: '#FFF',
    },
  },
  textArea: {
    height: '40px',
    fontSize: '14px',
    fontWeight: 500,
    borderRadius: '8px',
    fontFamily: 'Inter',
    borderColor: '#8E8E8E',
    paddingVertical: '8px',
    paddingHorizontal: '14px',
    backgroundColor: '#FFFFFF',
  },
}

export const theme = {
  colors: {
    primary: '#0D008F',
    secondary: '#0CC0DF',

    black: '#272727',
    white: '#FFFFFF',

    gray400: '#EEEEEE',
    gray500: '#B9B9B9',
    gray600: '#8E8E8E',
    gray700: '#5A5A5A',
    gray800: '#3B3B3B',
    gray900: '#353535',

    cyan500: '#0AA699',
    cyan600: '#035952',

    blue400: '#09A7C7',
    blue500: '#145D99',

    yellow: '#FFD600',

    orange: '#F2A227',

    label: '#353535',
    disabled: '#B9B9B9',
    placeholder: '#8E8E8E',

    scrollbar200: 'rgb(209,209,209, 0.4)',
  },

  fontFamily: {
    inter: 'Inter',
  },

  fontSize: {
    h0: '48px',
    h1: '36px',
    h2: '32px',
    h3: '28px',
    h4: '24px',
    h5: '22px',
    h6: '20px',
    h7: '18px',
    h8: '16px',
    h9: '14px',
    h10: '10px',
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
}