import {View} from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

/**
 * 全局底部组件
 */
export default () => {
  return (
    <View className='globalFooter'>
      作者：森繁
    </View>
  )
}
