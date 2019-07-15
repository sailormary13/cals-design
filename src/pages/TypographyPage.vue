<template>
    <div>
      <section>
        <div class="section-content">
          <h1>Typography</h1>
          <h3>Fonts</h3>
          <p>
            This is Verlag, UW's main font. It comes in Book, <span id ="bold-example">Bold</span>, and <span id="black-example">Black</span> variations.
          </p>
          <p id="vitesse-example">
            This is Vitesse, UW's accent font. It is to be used sparingly.
          </p>
          <p id="georgia-example">
            This is Georgia, a common font. It can be used for long copy.
          </p>

          <h3>Styles</h3>
          <ul> 
            <li>
              <h1>Heading 1</h1>
            </li>
            <li>
              <h2>Heading 2</h2>
            </li>
            <li>
              <h3>Heading 3</h3>
            </li>
            <li>
              <h4>Heading 4</h4>
            </li>
            <li>
              <h5>Heading 5</h5>
            </li>
            <li>
              <p>Paragraph</p>
            </li>
            <li>
              <small>Small</small>
            </li>
            <li>
              <code>Code</code>
            </li>
            <li>
              <blockquote>Blockquote.</blockquote>
            </li>
          </ul>
        </div>
      </section>
    </div>
</template>

<style lang="scss" scoped>

  @import "../assets/style-variables.scss";

    #vitesse-example {
        font-family: Vitesse;
    }

    #georgia-example {
        font-family: Georgia, serif;
    }

    #bold-example {
        font-family: Verlag-Bold;
    }

    #black-example {
        font-family: Verlag-Black;
    }

    ul {
    list-style-type: none;
    padding: 0;

    }

    ul li {
    padding: 8px 16px;
    border-bottom: 1px solid $medium-gray;
    }

    li:first-child {
        border-top: 1px solid $medium-gray;
    }


</style>