<template>
      <section>
        <div class="section-content">
          <h1>Forms</h1>
          <p>
            Forms show up all over the place on the web.
          </p>
          <BaseForm></BaseForm>
        </div>
      </section>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";


</style>


<script>
import BaseForm from '../components/BaseForm.vue'

export default {
  name: 'FormPage',
  components: {
    BaseForm
  }
}
</script>