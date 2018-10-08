<template>
  <div class='myContainer' v-on:click='onClick'>
    <div class='myName'>
      {{ name }}
    </div>
    <div class="myImageContainer" v-on:click='onClick'>
      <img
        :src="imgPath"
        class='myImage'
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    soundSrc: String,
    name: String,
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
    display: flex;
    flex-direction: column;
    margin: 16px;
    padding: 16px;
    border: solid 2px #cccccc;
    border-radius: 8px;
  }

  &Name {
    padding: 0 0 16px 0;
    font-weight: 400;
    text-align: center;
  }

  &Image {
    &Container {
      margin: auto;
    }

    max-width: 128px;
    max-height: 128px;
  }
}
</style>
