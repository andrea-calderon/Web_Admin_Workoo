import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    primaryContainer: Palette['primary'];
    secondaryContainer: Palette['secondary'];
    tertiaryContainer: Palette['tertiary'];
    errorContainer: Palette['error'];
    surfaceVariant: Palette['background'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    primaryContainer?: PaletteOptions['primary'];
    secondaryContainer?: PaletteOptions['secondary'];
    tertiaryContainer?: PaletteOptions['tertiary'];
    errorContainer?: PaletteOptions['error'];
    surfaceVariant?: PaletteOptions['background'];
  }
}

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  
  export default ReactComponent;
}
