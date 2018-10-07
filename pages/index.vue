<template>
  <div class='myContainer'>
    <switch-component img-src='cherry-mx-green.png' sound-src='cherry-mx-green.mp3' />
    <switch-component img-src='cherry-mx-gray.png' sound-src='cherry-mx-gray.mp3' />
    <switch-component img-src='cherry-mx-red.png' sound-src='cherry-mx-red.mp3' />
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
    justify-content: space-around;
  }

  &Switch {
    &Container {
      margin: 16px;
      padding: 16px;
      border: solid 2px black;
      border-radius: 8px;
    }

    &Image {
      max-width: 128px;
      max-height: 128px;
    }
  }
}
</style>
