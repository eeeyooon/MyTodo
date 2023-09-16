import 'styled-components';

declare module 'styled-components' {
	export interface theme {
		fontWeight: {
			light: string;
			regular: string;
			medium: string;
			semibold: string;
			bold: string;
		};

		fontSize: {
			xs: string;
			sm: string;
			base: string;
			lg: string;
			xl: string;
			'2xl': string;
			'3xl': string;
			'4xl': string;
			'5xl': string;
			'6xl': string;
			'7xl': string;
		};
	}
}
