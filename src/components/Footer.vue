<template>
    <v-container>
        <v-layout>
            <v-flex>
                 <span v-html="settings.footer" />
            </v-flex>
        </v-layout>
    </v-container>
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
