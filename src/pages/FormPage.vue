<template>
      <section>
        <div class="section-content">
          <h1>Forms</h1>
          <p>
            Forms show up all over the place on the web. Forms consist of inputs and their labels. Each input and its label is wrapped in a div with class <code>.label-input-form-wrapper</code>. These divs can be aligned horizontally at large screens by placing them in a div with class <code>multiple-inputs-form-wrapper</code>.
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