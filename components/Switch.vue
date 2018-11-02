<template>
  <div :class='$style.myContainer'>
    <div :class='$style.myBalloon'>
      <balloon content='Click me!' />
    </div>
    <div :class="$style.myImageContainer" @click='onClick' @mousedown='onMouseDown' @mouseup='onMouseUp'>
      <img
        :class='$style.myImage'
        :src="imgSrc"
      >
    </div>
    <div :class='$style.myName'>
      {{ name }}
    </div>
  </div>
</template>

<script>
import Balloon from '~/components/Balloon.vue';

export default {
  components: {
    'balloon': Balloon,
  },
  props: {
    imgSrc: String,
    soundSrc: String,
    name: String,
    id: String,
  },
  data: function() {
    return {
      player: new Howl({ src: this.soundSrc }),
      detailPath: `/${this.id}`,
    };
  },
  methods: {
    onClick: function () {
      this.player.play();
    },
    onMouseDown: function (e) {
      e.target.classList.add(this.$style.myImageClicked);
    },
    onMouseUp: function (e) {
      e.target.classList.remove(this.$style.myImageClicked);
    }
  },
}
</script>

<style lang="scss" module>
.my {
  &Container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 160px;
    min-height: 320px;
    margin: 16px;
    padding: 16px;
    border: solid 2px #cccccc;
    border-radius: 8px;
  }

  &Name {
    font-weight: 600;
    font-size: 1.25em;
    color: #666666;
    text-align: center;
  }

  &Image {
    &Container {
      margin: 16px auto 0 auto;
    }
    
    &Clicked {
      margin-top: 4px;
    }

    max-width: 128px;
    max-height: 128px;
  }

  &Balloon {
    margin-bottom: 8px;
  }

  &Link {
    text-decoration: none;
    color: #999999;
  }
}
</style>
