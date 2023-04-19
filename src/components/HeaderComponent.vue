<template>
    <div class="header p-2 d-flex justify-content-between align-items-center">
        <h1 class="text-uppercase text-danger">Boolflix</h1>
        <div>
            <input type="text">
            <button>Search</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
    .header{
        height: 80px;
        width: 100%;
        background-color: #121212;
    }
</style>