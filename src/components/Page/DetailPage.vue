<template>
  <v-card class="article-page">
    <v-card-actions>
      <v-btn @click="$router.go(-1)">
        {{'&lt;'}}
      </v-btn>
    </v-card-actions>
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-subtitle class="mb-2">
      {{ article.author }} | {{ article.source.name }} | {{ article.publishedAt | date }}
    </v-card-subtitle>
    <v-img
      :src="article.urlToImage"
      height="400px"
      class="mx-auto"
      contain
    ></v-img>
    <v-card-text class="article-description">{{ article.description }}</v-card-text>
    <v-card-text class="article-content">{{ article.content }}
      <a
        :href="article.url"
        target="_blank"
      >Full version in Source</a>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DetailPage',
  computed: {
    ...mapGetters(['articleById']),
    article() {
      const id = this.$route.params.id;
      return this.articleById(id);
    },
  },
  mounted() {
    this.$store.commit('PUSH_VISITED', {
      title: this.article.title,
      ind: this.$route.params.id,
    });
  },
};
</script>

<style scoped>
</style>
