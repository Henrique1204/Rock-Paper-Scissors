export const theme = {
  gradientes: {
    azulEscuroInicial: 'hsl(214, 47%, 23%)',
    azulEscuroFinal: 'hsl(237, 49%, 15%)',
    brancoInicial: '#F3F3F3',
    brancoFinal: '#FFF',
  },
  cores: {
    textoEscuro: 'hsl(229, 25%, 31%)',
    textoPontuacao: 'hsl(229, 64%, 46%)',
    bordaDoHeader: 'hsl(217, 16%, 45%)',
    branco: '#FFF'
  },
  fundo: {
    amarelo: 'hsl(39, 89%, 49%)',
    azul: 'hsl(230, 89%, 62%)',
    vermelho: 'hsl(349, 71%, 52%)',
    roxo: 'hsl(261, 73%, 60%)',
    ciano: 'hsl(189, 59%, 53%)',
  },
  sombras: {
    amarelo: '#C76C1B',
    azul: '#2A45C2',
    vermelho: '#9D1634',
    roxo: '#5F37A8',
    ciano: '#2D8DAB',
    cinza: '#BABFD4',
  }
};

type ThemeFundoType = typeof theme.fundo;
export type ThemeFundoKey = keyof ThemeFundoType;

