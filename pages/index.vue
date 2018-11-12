<template>
  <div :class='$style.myContainer'>
    <switch-component
      v-for='item in switches'
      :key='item.id'
      :name='item.name'
      :id='item.id.toString()'
      :img-src='item.image_url'
      :sound-src='item.sound_url'
    />
  </div>
</template>

<script>
import axios from 'axios';
import { Howl } from 'howler';
import Switch from '~/components/Switch.vue';

export default {
  components: {
    'switch-component': Switch,
  },
  data: function () {
    return {
      switches: [],
    };
  },
  created: function () {
    axios.get(`${process.env.apiUrl}/switches`)
      .then(res => {
        const { data } = res;
        data.forEach(item => this.switches.push(item));
      })
      .catch(error => {
        console.error('unexpected error!');
        console.error(error);
      });
  },
}
</script>

<style lang="scss" module>
.my {
  &Container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 32px;
    justify-content: space-around;
  }
}
</style>
