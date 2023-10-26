const theme: {
  colors: { [key: string]: string };
  fontSizes: { [key: string]: string };
} = {
  colors: {
    gray100: '#f4f3f1',
    gray200: '#dddbd8',
    gray300: '#ccc9c6',
    gray400: '#aeaba7',
    gray500: '#8a8784',
    gray600: '#656360',
    gray700: '#4b4a47',
    gray800: '#31302e',
    gray900: '#1f1d1b',
    primary100: '#fcf3e1',
    primary200: '#fceccd',
    primary300: '#fae1af',
    primary400: '#fbd997',
    primary500: '#ffd37c',
    primary600: '#f9c762',
    primary700: '#fbc14d',
    primary800: '#fab833',
    primary900: '#f6ad1b',
  },
  fontSizes: {
    text2xl: 'clamp(5.63rem, calc(5.27rem + 1.79vw), 6.88rem)', // min 90 max 110
    text46px: 'clamp(2.38rem, calc(2.23rem + 0.71vw), 2.88rem)', // min 38 max 46
    textXl: 'clamp(1.25rem, calc(1.18rem + 0.36vw), 1.5rem)', //min 20 max 24
    text20: 'clamp(1.06rem, calc(1.01rem + 0.27vw), 1.25rem)', //min 17 max 20
    textBase: 'clamp(0.88rem, calc(0.84rem + 0.18vw), 1rem)', // min 14, max 16
    textXbase: 'clamp(0.81rem, calc(0.78rem + 0.18vw), 0.94rem)', // min 13, max 15
    textSm: 'clamp(0.75rem, calc(0.71rem + 0.18vw), 0.88rem)', // min 12, max 14
  },
};
export default theme;
