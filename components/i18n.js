import I18nHelper from '../src/index'
import getWrapper from '../src/wrapper'

export const i18nHelper = new I18nHelper({
  defaultLang: 'zh',
  supportLangs: ['en', 'zh'],
  forceInitalLanguage: 'zh'
})

export const wrapper = getWrapper(i18nHelper)