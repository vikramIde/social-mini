<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-button size="sm"  type="button" class="nav-btn" > <a href="/leftnav"> ></a> </b-button>
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          <b-button size="sm"  class="nav-btn" type="button"><a href="/rightnav"> < </a></b-button>
        </b-nav-form>
      </b-navbar-nav>

    </b-collapse>
    </b-navbar>
    <main >
      <b-container fluid>
        <!-- Content here -->
        <b-row auto>
            <b-col xl="3">
              <LeftNav class="navBars"/>
            </b-col>
            <b-col xl="6">
              <router-view></router-view>
            </b-col>
            <b-col xl="3">
              <RightNav class="navBars"/>
            </b-col>
        </b-row>
      </b-container>
      
    </main>
    <!-- navbar-1.vue -->
  </div>
</template>


<script>
  import LeftNav from './components/LeftNav.vue';
  import RightNav from './components/RightNav.vue';

export default {
  name: 'app',
  components: { LeftNav,RightNav },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {

    .navBars{
      display: none;
    }
    .nav-btn{
      display: block;
    }

  }

@media not all and (min-device-width : 320px) 
and (max-device-width : 480px)  {
   .nav-btn{
      display: none;
    }
}
.flyout {
  display:flex;
  flex-direction: column;
  min-height:100vh;
  justify-content: space-between;
}

.active{
  background-color: rgba(255, 255, 255, 0.1);
}

</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
