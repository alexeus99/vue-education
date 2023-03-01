<template>
  <div>   
    <h1>Страница с постами</h1>
    <!-- <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input> -->
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <!-- <my-select v-model="selectedSort" :options="sortOptions" /> -->
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="soretedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div> -->
     <div class="page__wrapper">
        <div 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        class="page" 
        :class="{
          'current-page' : page === pageNumber
        }"
        @click="changePage(pageNumber)"
        > {{ pageNumber }}</div>
      </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    // PostList,
    // PostForm,
    // MyDialog,
    // MyButton,
    // MySelect,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },

  methods: {
    ...mapMutations ({
      
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    //  this.page = pageNumber;
    //
    //},
    
  },
  mounted() {
    // this.fetchPosts();
    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>
