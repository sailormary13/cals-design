<template>
    <div>
      <section>
        <div class="section-content">
          <h1>Buttons</h1>
          <p>
              Buttons indicate an action that the user can take. For accessiblity, the <code>role="button"</code> attribute is used with the link element.
          </p>
          <h3>Primary Button</h3>
          <p>
            Primary button color is <code>$blue</code>, and its text is <code>$white</code>. It has a slight border radius and a box-shadow so that it stands out as a clickable element. It has a mild hover state: the color darkens to <code>$dark-blue</code>. When it's in focus, the text is underlined. The base button component is inline-block.
          </p>
          <BaseButton>Call to Action</BaseButton>
          <h3>Secondary Button</h3>
          <p>
            Secondary buttons also offer an action to the user, but the action is secondary, meaning it could be less likely, less desirable, or just generally not the action the user plans to take. Examples of secondary actions are <em>Reset</em> and <em>Clear</em>. Styling is simple, which results in a button that looks like text. Add the class <code>.secondary-btn</code> to the base button.
          </p>
          <BaseButton class="secondary-btn">Secondary Action</BaseButton>
          <h3>Side-by-Side Display</h3>
          <p>
            Primary and Secondary Buttons are often presented side-by-side as two options for the user.
          </p>
            <BaseButton>Call to Action</BaseButton><BaseButton class="secondary-btn">Secondary Action</BaseButton>
          <h3>Outline Button</h3>
          <p>
            An outline button has less emphasis than a primary button. Use it if you don't want the weighty blue background color. Add the class <code>.outline-btn</code> to the base button.
          </p>
          <BaseButton class="outline-btn">Call to Action</BaseButton>
        </div>
      </section>
    </div>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";


</style>


<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'buttonpage',
  components: {
    BaseButton
  }
}
</script>