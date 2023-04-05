<template functional>
  <div>
    <v-card
      class="mx-auto card"
      height="260"
      width="480"
    >
      <v-card-text class="card-content">
        <div class="card-time">
          {{props.article.publishedAt | date}}
          {{props.article.publishedAt | datetime}}
        </div>
        <p class="text-h5 text--primary card-title">
          {{props.article.title}}
        </p>
        <div class="text--primary card-description">
          {{props.article.description}}
        </div>
      </v-card-text>
      <v-card-actions>
        <router-link :to="'/article/' + props.ind">Read More</router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  functional: true,
  props: {
    article: {
      type: Object,
      required: true,
    },
    ind: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      newTitle: '',
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 50) || 'Title must be less than 50 characters',
      ],
    };
  },
  methods: {
    showModal() {
      // Show the modal form
      this.dialog = true;
    },
    closeModal() {
      // Close the modal form
      this.dialog = false;
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        // Dispatch the mutation to update the article title in the store
        this.$store.commit('UPDATE_ARTICLE_TITLE', {
          articleId: this.article.id,
          newTitle: this.newTitle,
        });
        // Close the modal form
        this.dialog = false;
      }
    },
  },
};
</script>

<style scoped>
.card {
  text-align: left;
  overflow-y: hidden;
}

.card-content {
  overflow-y: auto;
  max-height: calc(100% - 48px);
}
</style>
