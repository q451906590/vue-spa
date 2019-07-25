
<template>
  <div id="vue-spa">
    vue {{test}}
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      test: 'hello'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
