<template>
  <button class="mood">
    {{ state ? 'On' : 'Off' }}
  </button>
</template>
<script>
export default {
    data: () => ({ state: false })
}
</script>

<style>
.mood:after {
  color: white;
  background: blue;
}
</style>