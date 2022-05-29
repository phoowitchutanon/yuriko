import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'components/**/*.vue',
    ],
  },
  theme: {},
  plugins: [
    require('windicss/plugin/forms'),
  ],
  css: [
    'virtual:windi.css',
    'virtual:windi-devtools',
  ],
})
