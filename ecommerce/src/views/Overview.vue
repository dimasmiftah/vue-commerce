<template>
  <div class="overview">
      <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>This is overview section</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit ipsa, ratione numquam similique recusandae exercitationem doloremque at non eligendi.
          </div>
          <div class="col-md-6">
            <img src="../assets/img/svg/overview.svg" alt="overview" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "overview",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
