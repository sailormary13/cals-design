
<template>
  <div id="root">
    <header id="header-app">
        <div>CALS Design System</div>
        <a v-on:click="myFunction(counter)">{{counter}}</a><br>
        <a v-on:click="myFunction2(counter2)"> {{counter2}} take 2</a><br>
        <a v-on:click="myFunction3(truthValue)">{{truthValue}}</a><br>
        <p 
          class="class-binding-p" 
          v-bind:class="{coolClass: isActive }"
          v-on:click="newFunction(isActive)">
          yo yo yo
          </p>
      </header>
    <div id="nav-main-grid">
      <nav id="nav-app">
        <ul>
            <li><router-link to="/purpose">Purpose</router-link></li>
            <li><router-link to="/principles">Principles</router-link></li>
            <li><router-link to="/logos">Logos</router-link></li>
            <li><router-link to="/Color">Color</router-link></li>
            <li><router-link to="/typography">Typography</router-link></li>
            <li><router-link to="/layout">Layout</router-link></li>
            <li><router-link to="/header">Header</router-link></li>
            <li><router-link to="/colorblocks">Color Blocks</router-link></li>
            <li><router-link to="/buttons">Buttons</router-link></li>
            <li><router-link to="/cards">Cards</router-link></li>
            <li><router-link to="/newsfeed">News Feed</router-link></li>
            <li><router-link to="/eventsfeed">Events Feed</router-link></li>
            <li><router-link to="/images">Images</router-link></li>
            <li><a href="">Forms</a></li>
            <li><a href="">Other</a></li>
            <li><router-link to="/test">Test</router-link></li>
        </ul>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style>

.class-binding-p {
  color: hotpink;
  cursor: pointer;
}

.coolClass {
  color: lime;
}
</style>

<script>

export default {
  name: 'app'
  , data: function() {
    return {
      counter: 0,
      counter2: 5,
      truthValue: true,
      isActive: false
    }
  }
  , methods: {
    myFunction: function(counter) {
      this.counter = counter + 1;
      console.log(this.counter);
    }
    , myFunction2: function(counter2) {
        this.counter2 = counter2 + 1;
        console.log(this.counter2);
    }
    , myFunction3: function(truthValue) {
        console.log(truthValue);
        if (truthValue) {
          this.truthValue = false;}
        else {
          this.truthValue= true;
        }
        console.log(this.truthValue);
    }
    , newFunction: function(isActive) {
      console.log(isActive);
      if (isActive) {
        this.isActive = false;
      }
      else {
        this.isActive = true;
      }
      console.log(this.isActive);
    }
  }
}

</script>
