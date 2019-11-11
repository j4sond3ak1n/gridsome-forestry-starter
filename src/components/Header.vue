<template>
    <v-app class="v-application-wrap white" style="z-index: 1">
        <v-container>
            <v-layout>
                    <nav class="nav">
                        <v-flex>
                            <g-link :to="{ name: 'home' }" >
                                <g-image 
                                    src="../../static/logo.svg"
                                    :alt="settings.site_name" 
                                    style="height: 6rem;"
                                />
                            </g-link>
                        </v-flex>
                        <v-flex>
                            <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <g-link style="text-decoration: none">
                                <v-btn
                                    text
                                    v-on="on"
                                    style="text-transform: none"
                                    :to="$url('/google-marketing-platform-services/')"
                                    >
                                    Google Marketing Platform Services
                                </v-btn>
                            </g-link>
                        </template> 
                        <v-list>
                            <v-list-item
                            v-for="(item, index) in googleItems"
                            :key="index"
                            :to="$url(`${item.url}`)"
                            >
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <g-link style="text-decoration: none">
                                <v-btn
                                    text
                                    v-on="on"
                                    style="text-transform: none"
                                    :to="$url('/search-tech-and-tools/')"
                                    >
                                    Search Tech & Tools
                                </v-btn>
                            </g-link>
                        </template>
                        <v-list>
                            <v-list-item
                            v-for="(item, index) in searchItems"
                            :key="index"
                            :to="$url(`${item.url}`)"
                            >
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                     <g-link class="nav__link" to="/about" style="text-decoration: none"><v-btn style="text-transform: none" text>About</v-btn></g-link>
                    <g-link class="nav__link" to="/contact" style="text-decoration: none"><v-btn style="text-transform: none" color="error" rounded>Contact us</v-btn></g-link>
                        </v-flex>
                   
                </nav>
            </v-layout>
        </v-container>
    </v-app> 
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo.svg"),
        settings: require("../../data/theme.json"),
        googleItems: [
            { title: 'Search Ads 360', url: '/google-marketing-platform-services/search-ads360' },
            { title: 'Display & Video 360', url: '/google-marketing-platform-services/display-and-video360' },
            { title: 'Google Analytics 360', url: '/google-marketing-platform-services/google-analytics360' },
            { title: 'Optimize 360', url: '/google-marketing-platform-services/optimize360' },
            { title: 'Data Studio 360', url: '/google-marketing-platform-services/data-studio360' },
            { title: 'Campaign Manager', url: '/google-marketing-platform-services/campaign-manager' },
            { title: 'Cloud', url: '/google-marketing-platform-services/cloud' },
            { title: 'Creative', url: '/google-marketing-platform-services/creative' },
            { title: 'AMP', url: '/google-marketing-platform-services/amp' },
            { title: 'Case Studies', url: '/google-marketing-platform-services/case-studies' },
            { title: 'Service Offering', url: '/google-marketing-platform-services/service-offering' }
        ],
        searchItems: [
            { title: 'Paid search', url: '/search-tech-and-tools/paid-search' },
            { title: 'Organic search', url: '/search-tech-and-tools/organic-search' },
            { title: 'Benchmarking', url: '/search-tech-and-tools/benchmarking' },
        ]
    }
  }
}
</script>

<style scoped>
.v-application-wrap {
    max-height: 10vh !important;
}
.nav {
    display: flex;
    align-items: center;
}
</style>
