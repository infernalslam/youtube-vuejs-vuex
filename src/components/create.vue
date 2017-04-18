<template lang="html">
  <div>
    <title-sub></title-sub>
    <form-view></form-view>
  </div>
</template>

<script>
import titleSub from './header/titleSub'
import formView from './form/form'
export default {
  name: 'create',
  components: {
    titleSub,
    formView
  }
}
</script>
