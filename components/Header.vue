<template>
  <div :class='$style.myContainer'>
    <img src='~/assets/logo_outlined.svg' :class='$style.myLogo'>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' module>
.my {
  &Container {
    display: flex;
    max-height: 64px;
    justify-content: center;
    margin: 24px;
  }

  &Logo {
    margin: auto;
    height: 100%;
  }
}
</style>
