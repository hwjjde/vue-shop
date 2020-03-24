import Vue from 'vue'
import { Button } from 'element-ui'
import { form, formItem } from 'element-ui'
import { input } from 'element-ui'
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(form)
Vue.use(formItem)
Vue.use(input)
Vue.prototype.$message = Message