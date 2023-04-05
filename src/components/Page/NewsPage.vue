<template>
  <div class="news-page">
    <h1>{{ msg }}</h1>
    <ul v-if="dataFromApi">
      <li
        v-for="(item, index) in [...dataFromApi.articles]"
        :key="index"
        @click="openModal(index)"
      >
        <news-card
          :article="item"
          :ind="index"
        ></news-card>
      </li>
    </ul>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">Update Title</v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
          >
            <v-text-field
              label="New Title"
              v-model="newTitle"
              :rules="titleRules"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click="submitForm"
          >Update</v-btn>
          <v-btn
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../Card';

export default {
  name: 'NewsPage',
  components: {
    NewsCard: Card,
  },
  data() {
    return {
      dialog: false,
      currentArticleId: null,
      currentArticle: null,
      newTitle: '',
      titleRules: [
        v => !!v || 'Title is required',
        v =>
          (v && v.length <= 255) || 'Title must be less than 255 characters',
      ],
      msg: 'Headlines',
    };
  },
  computed: {
    ...mapGetters(['dataFromApi']),
  },
  methods: {
    ...mapGetters(['articleById']),
    openModal(articleId) {
      // Your method code here
      this.currentArticleId = articleId;
      this.currentArticle = this.articleById()(articleId);
      this.newTitle = this.currentArticle.title;
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
          articleId: this.currentArticleId,
          newTitle: this.newTitle,
        });
        // Close the modal form
        this.dialog = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  display: inline-block;
  cursor: pointer;
}
</style>
