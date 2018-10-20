<template>
  <div>
    <h1>Update the switch informations</h1>
    <form @submit.prevent='onSubmit'>
      <div>
        <label>name:</label>
        <input name='name' v-model='name'>
      </div>
      <div>
        <label>image url:</label>
        <input name='name' v-model='image_url'>
      </div>
      <div>
        <label>sound url:</label>
        <input name='name' v-model='sound_url'>
      </div>
      <input type='submit' value='Update'>
    </form>
    <nuxt-link to=''>
      <button>delete</button>
    </nuxt-link>
    <nuxt-link to='/'>
      <button>back</button>
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      name: '',
      image_url: '',
      sound_url: '',
    }
  },
  asyncData: function ({ params }) {
    return params;
  },
  methods: {
    onSubmit: function(e) {
      const { name, image_url, sound_url } = this;
      console.log(`${name}, ${image_url}, ${sound_url}`);
      axios.put(
        `http://localhost:3000/switches/${this.id}`,
        { name, image_url, sound_url },
      )
        .then(res => {
          console.log(res);
          this.$router.push('/');
        })
        .catch(err => console.log(err));
    },
  },
  created: function () {
    console.log('created');
    axios.get(`http://localhost:3000/switches/${this.id}`)
      .then(({ data }) => {
        this.name = data.name;
        this.image_url = data.image_url;
        this.sound_url = data.sound_url;
      })
      .catch(err => console.log(err));
  },
}
</script>

<style>

</style>
