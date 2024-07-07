
<template>
  <div id="moha-medical">
    <NuxtLayout name="default" >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => { 
  localStorage.setItem("langIds", JSON.stringify([ "en", "zh" ]))
})

</script>

<style lang="scss" scoped>
</style>