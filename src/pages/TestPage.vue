<template>
  <div>
    <section>
        <div class="section-content">
          <BaseColThirds>
              <BaseCard></BaseCard>
              <BaseCard></BaseCard>
              <BaseCard></BaseCard>
          </BaseColThirds>
        </div>
      </section>

      <a v-on:click="myFunction(counter)">{{counter}}</a><br>
        <a v-on:click="myFunction2(counter2)"> {{counter2}} take 2</a><br>
        <a v-on:click="myFunction3(truthValue)">{{truthValue}}</a><br>
        <p 
          class="class-binding-p" 
          v-bind:class="{coolClass: isActive }"
          v-on:click="newFunction(isActive)">
          yo yo yo
          </p>
    </div>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";

.class-binding-p {
  color: hotpink;
  cursor: pointer;
}

.coolClass {
  color: lime;
}

.displayNav {
  display: none;
}

#close-nav-icon {
  text-align: right;
  font-weight: bold;
  font-size: 1.4rem;
}

#close-nav-icon a{
  color: $badger-red;
}

.hamburgerBar {
  width: 32px;
  height: 4px;
  background-color: $badger-red;
  margin: 6px 0;
}

#menuIcon {
  width: 32px;
  margin: auto;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
    .hamburgerBar, #close-nav-icon {
        display: none;
    }
}

.mobileNav {
  display: block;
}



</style>


<script>
import BaseColThirds from '../components/BaseColThirds.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'TestPage',
  components: {
    BaseColThirds
    , BaseCard
    , BaseButton
  }
  , data: function() {
    return {
      counter: 0,
      counter2: 5,
      truthValue: true,
      isActive: false,
      isDisplayed: false
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
    , displayNav: function(isDisplayed) {
      console.log(isDisplayed);
      if (isDisplayed) {
        this.isDisplayed = false;
      }
      else {
        this.isDisplayed = true;
      }
      console.log(this.isDisplayed);
    }
  }
}
</script>