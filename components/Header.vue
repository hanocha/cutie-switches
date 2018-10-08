<template>
  <div :class='$style.myContainer'>
    <img src='~/assets/logo_outlined.svg'>
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
    height: 64px;
    justify-content: center;
    margin: 24px;
  }

  &Headline {
    margin: auto;
  }
}
</style>
