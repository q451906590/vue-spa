<template>
  <div>
    ComponentB
    <button @click="increment">increment</button>
    <button @click="goto('/vue/ComponentA')">{{testB}}</button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('moduleB')
export default {
  data () {
    return {}
  },
  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState({
      testB: state => state.testB,
    })
  },
  mounted () {

  },
  methods: {
    ...mapMutations([
      'increment',
    ]),
    goto(str) {
      this.$router.push(str)
    }
  }
}
</script>
</script>
