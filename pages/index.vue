<template>
  <div class='myContainer'>
    <div class='mySwitchContainer' v-on:click='onClickMXGreen'>
      <img
        :src="imgPath('cherry-mx-green.png')"
        class='mySwitchImage'
      >
    </div>
    <div class='mySwitchContainer' v-on:click='onClickMXGray'>
      <img
        :src="imgPath('cherry-mx-gray.png')"
        class='mySwitchImage'
      >
    </div>
    <div class='mySwitchContainer' v-on:click='onClickMXRed'>
      <img
        :src="imgPath('cherry-mx-red.png')"
        class='mySwitchImage'
      >
    </div>
  </div>
</template>

<script>
import { Howl } from 'howler';

export default {
  computed: {
    imgPath: () => {
      return fileName => `${process.env.cdnPathBase}/${fileName}`;
    },
  },
  methods: {
    onClickMXGreen: function (e) {
      const player = new Howl({
        src: `${process.env.cdnPathBase}/cherry-mx-green.mp3`,
      });
      player.play();
    },
    onClickMXGray: function (e) {
      const player = new Howl({
        src: `${process.env.cdnPathBase}/cherry-mx-gray.mp3`,
      });
      player.play();
    },
    onClickMXRed: function (e) {
      const player = new Howl({
        src: `${process.env.cdnPathBase}/cherry-mx-red.mp3`,
      });
      player.play();
    },
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
