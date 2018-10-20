<template>
  <div>
    <div :class='$style.myContainer'>
      <switch-component
        v-for='item in switches'
        :key='item.id'
        :name='item.name'
        :id='item.id'
        :img-src='item.image_url'
        :sound-src='item.sound_url'
      />
    </div>
    <nuxt-link to='/new'>create</nuxt-link>
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
    axios.get('http://localhost:3000/switches')
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
  }
}
</style>
