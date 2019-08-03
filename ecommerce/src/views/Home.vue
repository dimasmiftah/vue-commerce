<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Products />
    <Footer />
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/section/Products.vue";
import Footer from "@/section/Footer.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Hero,
    Products,
    Footer,
    Login
  }
};
</script>