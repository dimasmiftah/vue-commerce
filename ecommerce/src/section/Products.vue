<template>
    <div class="products">
        <div class="container">
            <h1>Our Products</h1>
            <div class="produk">
                <div class="kotak">
                    <div class="gambar"></div>
                    <h2>Surface Book</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quod voluptatum ipsum distinctio, doloribus nobis facilis suscipit dolorem aut soluta quidem. Dolor dolorum minima ipsa nulla molestias amet est aspernatur.</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
                <div class="kotak">
                    <div class="gambar"></div>
                    <h2>Surface Book</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quod voluptatum ipsum distinctio, doloribus nobis facilis suscipit dolorem aut soluta quidem. Dolor dolorum minima ipsa nulla molestias amet est aspernatur.</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
                <div class="kotak">
                    <div class="gambar"></div>
                    <h2>Surface Book</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quod voluptatum ipsum distinctio, doloribus nobis facilis suscipit dolorem aut soluta quidem. Dolor dolorum minima ipsa nulla molestias amet est aspernatur.</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.products{
    background: #f7f7f7;
    height: 100vh;
}
.gambar{
    width: 340px;
    height: 200px;
    background: url(./../assets/img/laptop.jpg) center no-repeat;
    background-size: cover;
}
h1{
    padding: 50px 0;
}
.produk{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.kotak{
    width: 340px;
    background:white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .4);
    text-align: left;
}
h2,p,button{
    margin: 20px;
}
h2{
    font-size: 24px;
}
p{
    font-size: 14px;
}
</style>
