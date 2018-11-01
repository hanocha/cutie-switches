<template>
  <div>
    <h1>Create new switch</h1>
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
      <input type='submit' value='Create new switch'>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      name: '',
      image_url: '',
      sound_url: '',
    }
  },
  methods: {
    onSubmit: function(e) {
      const { name, image_url, sound_url } = this;
      axios.post(
        `${process.env.apiUrl}/switches`,
        { name, image_url, sound_url },
      )
        .then(res => {
          console.log(res);
          this.$router.push('/');
        })
        .catch(err => console.log(err));
    },
  },
}
</script>

<style>

</style>
