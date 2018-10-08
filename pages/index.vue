<template>
  <div class='myContainer'>
    <switch-component
      name='ALPS blue'
      img-src='alps_blue.png'
      sound-src='alps_blue.mp3'
    />
    <switch-component
      name='ALPS hulk'
      img-src='alps_hulk.png'
      sound-src='alps_hulk.mp3'
    />
    <switch-component
      name='ALPS white'
      img-src='alps_white.png'
      sound-src='alps_white.mp3'
    />
    <switch-component
      name='Cherry MX silent red'
      img-src='cherry_silent_red.png'
      sound-src='cherry_silent_red.mp3'
    />
    <switch-component
      name='Kailh box pink'
      img-src='kailh_box_pink.png'
      sound-src='kailh_box_pink.mp3'
    />
    <switch-component
      name='Kailh box royal'
      img-src='kailh_box_royal.png'
      sound-src='kailh_box_royal.mp3'
    />
    <switch-component
      name='Kailh box violet'
      img-src='kailh_box_violet.png'
      sound-src='kailh_box_violet.mp3'
    />
    <switch-component
      name='Kailh box white'
      img-src='kailh_box_white.png'
      sound-src='kailh_box_white.mp3'
    />
    <switch-component
      name='Kailh pink'
      img-src='kailh_pink.png'
      sound-src='kailh_pink.mp3'
    />
  </div>
</template>

<script>
import { Howl } from 'howler';
import Switch from '~/components/Switch.vue';

export default {
  components: {
    'switch-component': Switch,
  },
}
</script>

<style lang="scss" scoped>
.my {
  &Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
