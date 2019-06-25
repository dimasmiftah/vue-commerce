<template>
    <footer>
        <div class="container">
            <div class="kiri">
                <img src="./../assets/img/footer.jpg" width="550px" alt="">
            </div>
            <div class="kanan">
                <h2>Learn More About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit laudantium earum atque totam nemo enim laborum quod excepturi iusto nihil blanditiis maxime distinctio, veniam dolorem tenetur iure voluptatem non.</p>
                <button type="button" class="btn btn-outline-primary">Browse Products</button>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
footer{
    background: #f7f7f7;
}
.container{
    display: flex;
    align-content: center;
    justify-content: center;
}
.kanan{
    width: 600px;
    height: 200px;
    text-align: left;
    margin-top: 50px;

    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // flex-grow: 0;
}

</style>

