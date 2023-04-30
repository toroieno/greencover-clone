<template>
    <v-card
        color="grey-lighten-4"
        flat
    >
        <v-toolbar flat color="#f4effa">
            <img
                alt="logo"
                src="https://greencover.eofactory.ai/img/logo.02c23c01.png"
                width="85"
                heigth="50"
                class="ml-2"
            />
            <div class="pr-8 pl-4">
                <h3 style="color:#893ff2;">DASHBROARD</h3>
            </div>

            <v-spacer></v-spacer>
        </v-toolbar>
    </v-card>
    
</template>
<script>
export default {
    name:'HeaderDB'
}
</script>
<style scoped>
img {
    height:50px;
    object-fit:unset;
}

.v-card{
    border-bottom: 1px solid #d3d3d3;
}
</style>