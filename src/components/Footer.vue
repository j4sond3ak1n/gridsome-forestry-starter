<template>
        <div class="container">
            <span v-html="settings.footer" />
        </div>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>
