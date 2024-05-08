import {
  defineConfig, presetAttributify, presetIcons, presetUno
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        'simple': () => import('@iconify-json/simple-line-icons/icons.json').then(i => i.default)
      },
      // Optional
      extraProperties: {
        display: 'inline-block', 'vertical-align': 'middle'
      }
    })]
})
