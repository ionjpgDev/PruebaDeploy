// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";


// https://astro.build/config
export default defineConfig({
	site: 'https://ionjpgdev.github.io',
	base: '/PruebaDeploy',
	integrations: [
		starlight({
			plugins: [ion()],
			title: 'Transportadora Colque Machicado SRL',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ionjpgdev/PruebaDeploy' }],
			sidebar: [
  {
    label: 'Inicio',
    link: '/',
  },
  {
    label: '1. Aspectos Generales',
    link: '/01-aspectos-generales/',
  },
  {
    label: '2. Marco Metodológico',
    link: '/02-marco-metodologico/',
  },
  {
    label: '3. Marco Teórico',
    link: '/03-marco-teorico/',
  },
  {
    label: '4. Planificación',
    link: '/04-planificacion/',
  },
  {
    label: '5. Bibliografía',
    link: '/05-bibliografia/',
  },
  {
    label: '6. Equipo de Trabajo',
    link: '/06-equipo/',
  },
],
		}),
	],
});
