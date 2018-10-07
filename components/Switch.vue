<template>
  <div class='myContainer' v-on:click='onClick'>
    <img
      :src="imgPath"
      class='myImage'
    >
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    soundSrc: String,
  },
  computed: {
    imgPath: function() {
      return `${process.env.cdnPathBase}/${this.imgSrc}`;
    },
  },
  data: function() {
    return {
      player: new Howl({ src: `${process.env.cdnPathBase}/${this.soundSrc}` }),
    };
  },
  methods: {
    onClick: function () {
      this.player.play();
    },
  },
}
</script>

<style lang="scss" scoped>
.my {
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
</style>
