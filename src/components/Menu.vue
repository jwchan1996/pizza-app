<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝pizza!</h1>
                <h2>这里有你非常喜欢的pizza!</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #home{
        background: url('../../src/assets/menu.jpg') center center;
        height: 200vh;
        padding: 10%;
        color: #000;
        margin-top: 40px;
    }

    h1,h2{
        margin: 6%;
    }

    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>
