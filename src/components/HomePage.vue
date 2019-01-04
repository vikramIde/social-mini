<template>
	<div>
		<b-card style="margin-top: 10px">
			<h8  class="card-title">Create Post</h8>
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
		    	<img style="height: 50px;float: left;margin-right: 5px"  src="data:image/jpeg;base64,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">
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