<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Products />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/section/Products.vue";
import Footer from "@/section/Footer.vue";

export default {
  name: "home",
  components: {
    Hero,
    Products,
    Footer
  }
};
</script>