<template>
  <div :class='$style.myContainer'>
    <div :class='$style.myName'>
      {{ name }}
    </div>
    <div :class="$style.myImageContainer" v-on:click='onClick'>
      <img
        :src="imgPath"
        :class='$style.myImage'
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

<style lang="scss" module>
.my {
  &Container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 164px;
    margin: 16px;
    padding: 16px;
    border: solid 2px #cccccc;
    border-radius: 8px;
  }

  &Name {
    padding: 0 0 16px 0;
    font-weight: 600;
    font-size: 1.25em;
    color: #666666;
    text-align: center;
  }

  &Image {
    &Container {
      margin: 0 auto;
    }

    max-width: 128px;
    max-height: 128px;
  }
}
</style>
