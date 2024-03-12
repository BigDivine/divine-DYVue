import { registDaTreeTableModal } from './common/modals/config'
let extPlugins
if (window.nros && window.nros.getPlugins) {
  extPlugins = window.nros.getPlugins('jjda-tree-table-ext')
} else if (window.context && window.context.getPlugin) {
  extPlugins = window.context.getPlugin('resource').findApps('jjda-tree-table-ext')
}
if (extPlugins && extPlugins.length > 0) {
  extPlugins.forEach((plugin) => {
    let data = plugin.data
    if (!data) return
    let app = data.app
    if (!app) return
    let components = app.component
    if (!components) return
    components.forEach((component) => {
      var script = document.createElement('script')
      script.onload = function () {
        let windowPortalApplication = window['portal_application']
        if (windowPortalApplication) {
          let JJDAExtra = windowPortalApplication.JJDAExtra
          if (JJDAExtra) {
            // 组件包括pc端配置使用和移动端使用
            let modals = JJDAExtra.modals
            if (modals) {
              modals.forEach((modal) => {
                registDaTreeTableModal(modal)
              })
            }
          }
        }
      }
      script.onerror = function () {
        // console.log('文件加载失败:' + component)
      }
      script.src = 'output/' + component
      document.getElementsByTagName('head')[0].appendChild(script)
    })
  })
}
