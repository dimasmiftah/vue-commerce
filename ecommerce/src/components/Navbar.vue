<template>
    <div class="bungkus">
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
            <div class="container">
            <a class="navbar-brand" href="#">VueShop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
        
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
    // width: 85%;
    // margin: 0 auto;
    padding-top: 20px;  
    padding-bottom: 20px;  
    box-shadow: 0px 1px 10px rgba(0, 0, 0, .1); 
}
</style>
