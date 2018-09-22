<template>
  <div class='myContainer'>
    <div class='mySwitchContainer'>
      <img src='http://www.kailh.com/uploads/180605/2-1P60514211HI.jpg' class='mySwitchImage'>
    </div>
    <div class='mySwitchContainer'>
      <img src='http://www.kailh.com/uploads/allimg/180605/2-1P605143J60-L.jpg' class='mySwitchImage'>
    </div>
    <div class='mySwitchContainer'>
      <img src='http://www.kailh.com/uploads/180605/2-1P6051029105Q.jpg' class='mySwitchImage'>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.my {
  &Container {
    display: flex;
  }

  &Switch {
    &Container {
      margin: 16px;
      padding: 16px;
      border: solid 2px black;
      border-radius: 8px;
    }

    &Image {
      width: 128px;
      height: 128px;
    }
  }
}
</style>
