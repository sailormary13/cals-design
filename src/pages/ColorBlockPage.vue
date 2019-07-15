<template>
    <div>
        <section>
            <div class="section-content">
                <h1>Color Blocks</h1>
                <p>Color blocks call out content. They use a grid arrangment to separate content with different colored cells.</p>

                <p>These need more thought and development to be useful. The cells need to auto-size to max-content, and content needs to vertically align middle. Different grid sizes and different colors would also be nice, as well as the option to use an image as a cell background.</p>

                <BaseColorBlockThirds>
                    <div class="color-block-content">
                        <h3>17</h3>
                        <p>Academic Departments</p>
                    </div>

                    <div class="color-block-content">
                        <h3>23</h3>
                        <p>Undergraduate Majors</p>
                    </div>

                    <div class="color-block-content">
                        <h3>49</h3>
                        <p>Graduate Programs</p>
                    </div>
                    
                    <div class="color-block-content">
                        <h3>On Wisconsin</h3>
                    </div>
                    
                    <div class="color-block-content">
                        <h3>Bucky</h3>
                        <p>Badger</p>
                    </div>
                    
                    <div class="color-block-content">
                        <h3>Go Badgers</h3>
                    </div>
                    
                </BaseColorBlockThirds>
            </div>

        </section>

    </div>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";

    div.col3-thirds div.color-block-content h3 {
        font-family: Vitesse;
        color: $white;
    }


</style>


<script>
import BaseColThirds from '../components/BaseColThirds.vue'
import BaseColorBlockThirds from '../components/BaseColorBlockThirds.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'ColorBlockPage',
  components: {
    BaseColThirds
    , BaseCard
    , BaseButton
    , BaseColorBlockThirds
  }
}
</script>