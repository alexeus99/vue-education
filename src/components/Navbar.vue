<template>
    <div class="navbar">
        <div @click="$router.push('/')">Post App</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/pages')">Посты</my-button>
            <my-button @click ="$router.push('/about')" style="margin-left:20px">О нас</my-button>
            <my-button @click ="$router.push('/store')" style="margin-left:20px">Store</my-button>


            
            
        </div>
    </div>
</template>

<script>

    export default {

        
    }
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    background-color:lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0px 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>