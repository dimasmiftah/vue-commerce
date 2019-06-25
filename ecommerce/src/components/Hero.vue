<template>
    <div class="hero container">
        <div class="kiri">
            <h2>Vue Shop For Developers</h2>
            <p class="satu">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit laudantium earum atque totam nemo enim laborum quod excepturi iusto nihil blanditiis maxime distinctio, veniam dolorem tenetur iure voluptatem non.</p>
            <button class="btn btn-info"> Explore </button>
            <button class="btn btn-outline-dark"> Product </button>
        </div>
        <div class="kanan">
            <img src="./../assets/img/fastShopping.jpg" alt="Gambar mamanx">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.hero{
    display: flex;
    align-items: center;
    align-content: space-between;
    height: 100vh;
    box-sizing: border-box;
}
.kiri{
    width: 500px;
    text-align: left;
}
.kiri h2{
    color: #4C5553;
    font-size: 45px;
    margin-bottom: 15px;
}
.kiri p {
    font-size: 16px;
    color: #999;
    margin: 30px 0;
}
.kanan img{
    width: 700px;
}
button{
    margin-right: 30px; 
    padding: 7px 25px;
}
</style>

