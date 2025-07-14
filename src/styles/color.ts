import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const colorList = defineTokens({
    colors: {
      basicColor: {
        black: { value: '#000000' },
        white: { value: '#FFFFFF' },
      },
      gray: {
        gray075: { value: '#1B1F2F' },
        gray100: { value: '#1E1E2E' },
        gray650: { value: '#98A8B8' }
      },
      orange: {
        orange100: { value: '#FFC6AE' },
        orange300: { value: '#F58D1D' }, 
        orange400: { value: '#FF7622' },
      },
      blue: {
        blue400: { value: '#169CE8' },
        blue700: { value: '#395998' },
      }
    },
});

export const semanticColorList = defineSemanticTokens({
    colors: {
        text: {
          DEFAULT: { value: "{colors.gray.gray650}" },
        },
        background: {
          DEFAULT: { value: "{colors.gray.gray100}" },
        },
        primary: {
          DEFAULT: { value: "{colors.blue.blue400}" },
          _hover: { value: "{colors.blue.blue700}" },
        },
        danger: {
          DEFAULT: { value: "{colors.orange.orange400}" },
        }
      }
});