const extraColors = {
  primary: '#7367F0',
  success: '#28C76F',
  warning: '#FF9F43',
  danger: '#EA5455',
};

const theme = {
  light: {
    background: '#FFF',
    text: '#626262',
    ...extraColors,
  },
  dark: {
    background: '#0F153A',
    text: '#fff',
    ...extraColors,
  },
};

export default theme;
