<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>
        {{title}}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="openModal">
        Activities
      </v-btn>
    </v-app-bar>
    <v-dialog
      v-model="dialog"
      max-width="900"
    >
      <v-card>
        <v-card-title class="headline">Activities</v-card-title>
        <v-card-text
          v-if="visits"
          class="activity-container"
        >
          <div
            v-for="(visit, index) in visits"
            :key="index"
            class="activity"
          >
            <span class="headline">Visited "{{visit.title}}"</span>
            <span class="time"> on {{visit.time | date}} {{visit.time | datetime}}</span>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppBar',
  data() {
    return {
      dialog: false,
    };
  },
  props: ['title'],
  computed: {
    ...mapGetters(['visits']),
  },
  methods: {
    openModal() {
      this.dialog = true;
    },
  },
};
</script>


<style scoped>
.activity {
  display: flex;
  justify-content: space-between;
}
.activity-container {
  max-height: 700px;
  overflow-y: auto;
}
.activity .time {
  width: 352px;
}
</style>
