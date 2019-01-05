<template>
	<div>
		<b-card style="margin-top: 10px">
			<h6  class="card-title">Create Post</h6>
			<p class="card-text">
		            <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    				</b-form-textarea>
		    </p>
		</b-card>
		<div v-for="(item, $index) in list" :key="$index" >
			<b-card style="margin-top: 10px">
		    	<img style="height: 50px;float: left;margin-right: 5px;border-radius: 50%;"  src="https://api.adorable.io/avatars/285/abott@adorable.pngCopy%20to%20Clipboard">
		    	<h4  class="card-title">{{item.author}}</h4><h6 class="card-subtitle mb-2 text-muted">{{item.created_at}}</h6>
		        <p class="card-text">
		            {{item.title}}
		        </p>
		        
		        <b-link :href="item.url"
		                class="card-link">link</b-link>
	    	</b-card>
		</div>
		<infinite-loading @infinite="infiniteHandler"></infinite-loading>
	</div>

<!-- card-text-1.vue -->
</template>

<script >
	import axios from 'axios';
	import InfiniteLoading from 'vue-infinite-loading';
	const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';
	export default {
	 components: {
	    InfiniteLoading,
	  },
	  data() {
	    return {
	      page: 1,
	      text:'',
	      list: [],
	    };
	  },
	  methods: {
	    infiniteHandler($state) {
	      axios.get(api, {
	        params: {
	          page: this.page,
	        },
	      }).then(({ data }) => {
	        if (data.hits.length) {
	          this.page += 1;
	          this.list.push(...data.hits);
	          $state.loaded();
	        } else {
	          $state.complete();
	        }
	      });
	    },
	  },
	};
</script>