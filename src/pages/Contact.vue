<template>
  <Layout>
    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class="about-post"
    >
      <div class="container about">
        <h2 class="about-title">{{ item.node.title }}</h2>
        <p class="about-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query about {
	posts: allProjectPost {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style scoped>
.container.about {
  max-width: 720px;
}
.about-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.about-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.about-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.about-post > * {
  transition: transform 0.5s ease;
}
.about-post:hover {
  background-color: var(--color-base-1);
}
.about-post h1,
.about-post h2 {
  margin: 0;
  padding: 0;
}
.about-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.about-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .about-post {
    padding: 3rem 0;
  }
}

</style>
