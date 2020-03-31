type Swatch = {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
}

function buildSwatch(hue: number, saturation: number): Swatch {
  if (hue < 0 || hue > 255) {
    throw RangeError(`Hue must be between 0 and 255, got ${hue}.`);
  }
  if (saturation < 0 || saturation > 100) {
    throw RangeError(`Saturation must be between 0 and 100, got ${saturation}.`);
  }

  const swatch: Swatch = {
    0: '',
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: '',
  };
  let count = 0;
  
  while (count <= 10) {
    const lightness = count * 10;
    swatch[lightness] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    count ++;
  }
  
  return swatch;
};

/**
 * Centralized location for design related values.
 */
export const DESIGN_TOKEN = {
  colors: {
    swatch_1: buildSwatch(0, 0),
    swatch_2: buildSwatch(192, 100),
  },
  fonts: {
    font_1: {
      family: `'Open Sans', sans-serif`,
      weight: {
        light: 300,
        regular: 400,
        semi_bold: 600,
        bold: 700
      }
    },
    font_2: {
      family: `'Playfair Display', serif`,
      weight: {
        regular: 400,
        bold: 700
      }
    }
  }
}