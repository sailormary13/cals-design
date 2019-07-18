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
          <table id="typography-display-table"> 
            <tr><td>
              <h1>Heading 1</h1>
            </td></tr>
            <tr><td>
              <h2>Heading 2</h2>
            </td></tr>
            <tr><td>
              <h3>Heading 3</h3>
            </td></tr>
            <tr><td>
              <h4>Heading 4</h4>
            </td></tr>
            <tr><td>
              <h5>Heading 5</h5>
            </td></tr>
            <tr><td>
              <p>Paragraph</p>
            </td></tr>
            <tr><td>
              <small>Small</small>
            </td></tr>
            <tr><td>
              <code>Code</code>
            </td></tr>
            <tr><td>
              <blockquote>Blockquote.</blockquote>
            </td></tr>
            <tr>
              <td>
                <ul>
                  <li>
                    Unordered
                  </li>
                  <li>
                    List
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <ol>
                  <li>
                    Ordered
                  </li>
                  <li>
                    List
                  </li>
                </ol>
              </td>
            </tr>
          </table>
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

    #typography-display-table { 
    border-collapse: collapse;
    width: 100%;
    }

    #typography-display-table td {
      border-bottom: 1px solid $medium-gray;
    }

    #typography-display-table td:first-child {
      border-top: 1px solid $medium-gray;
      padding-top: 5px;
    }


</style>