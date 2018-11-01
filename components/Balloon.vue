<template>
<div :class='$style.balloon'>
  <div :class='$style.balloonContent'>
    {{ content }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    content: null,
  },
}
</script>

<style lang="scss" module>
.balloon{
  position: relative;
  padding: 16px;
  background-color: #ffdfff;
  border-radius: 36px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    border-radius: 50%;
    background-color: #ffe8ff;
    left: 25%;
    top: 105%;
    width: 16px;
    height: 16px;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    border-radius: 50%;
    background-color: #ffefff;
    left: 35%;
    top: 135%;
    width: 8px;
    height: 8px;
  }

  &Content {
    margin: 0;
    padding: 0;
  }
}
</style>
