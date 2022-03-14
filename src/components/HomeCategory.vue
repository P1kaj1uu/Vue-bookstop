<template>
  <div></div>
</template>
<script>
export default {
  name: "HomeCategory",
  data() {
    return {
      categories: [],
    };
  },

  created() {
    this.axios
      .get("/category")
      .then((response) => {
        if (response.status == 200) {
          this.categories = response.data;
        }
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>

</style>