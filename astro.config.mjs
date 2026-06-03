import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://seclabs-cc.github.io',
	base: '/HackTheBox',
	integrations: [
		starlight({
			title: '📦 Hack the Box',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/seclabs-cc/HackTheBox' },
			],
			sidebar: [
  {
    "label": "📦 Hack the Box",
    "slug": "index"
  },
  {
    "label": "Introduction",
    "slug": "introduction"
  },
  {
    "label": "📠 Machines",
    "items": [
      {
        "label": "Ambassador",
        "slug": "machines/ambassador"
      },
      {
        "label": "Precious",
        "slug": "machines/precious"
      },
      {
        "label": "Blue",
        "slug": "machines/blue"
      },
      {
        "label": "Academy",
        "slug": "machines/academy"
      },
      {
        "label": "Dev",
        "slug": "machines/dev"
      },
      {
        "label": "Butler",
        "slug": "machines/butler"
      },
      {
        "label": "Blackpearl",
        "slug": "machines/blackpearl"
      }
    ]
  }
],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
