<template>
    <div>
        <h1>Game page</h1>
        <TotalScore/>
        <UserSelection/>
        <ComputerSelection/>

    </div>
</template>

<script>
import TotalScore from '@/components/TotalScore.vue'
import UserSelection from '@/components/UserSelection.vue'
import ComputerSelection from '@/components/ComputerSelection.vue'

    export default {
        components: {
            TotalScore,
            UserSelection,
            ComputerSelection
        },
        data() {
            return {

            }
        },
        methods: {
            name() {
                
            }
        },
}
</script>

<style lang="scss" scoped>

</style>