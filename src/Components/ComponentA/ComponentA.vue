<template>
  <div>
    ComponentA
    {{all}}
    <button @click="increment">increment</button>
    <button @click="goto('/vue/ComponentB')">{{testA}}</button>
    <button @click="goto('/home')">home</button>
  </div>
</template>
<script>
import { createNamespacedHelpers, mapState, mapMutations, mapGetters } from 'vuex'
// const { mapState, mapMutations } = createNamespacedHelpers('moduleA')
export default {
  data () {
    return {}
  },
  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState('moduleA', {
      testA: state => state.testA,
    }),
    ...mapGetters('all', [
      'all'
    ])
  },
  mounted () {
  },
  methods: {
    ...mapMutations('moduleA', [
      'increment',
    ]),
    ...mapMutations('all', [
      'setAll',
    ]),
    goto(str) {
      this.$router.push(str)
    }
  }
}
</script>
