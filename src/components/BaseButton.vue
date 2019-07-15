<template>
    <a href="https://google.com" role="button" class="btn"><slot></slot></a>

</template>


<script>
export default {
  name: 'BaseButton',
  props: {
  }
}
</script>


<style lang="scss">

    @import "../assets/style-variables.scss";

    .btn {
        background-color: $blue;
        border-radius: .2rem;
        padding: .6rem .8rem;
        color: #fff;
        text-decoration: none;
        box-shadow: 0px 2px 1px -2px rgba(0,0,0,0.2)
        , 0px 2px 2px 0px rgba(0,0,0,0.14)
        , 0px 1px 5px 0px rgba(0,0,0,0.12);
        transition: background-color .18s ease-in-out;
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        margin: 16px 0 24px 0;
        font-size: .875rem;
        line-height: 1.2rem;
    }

    .btn:hover {
        background-color: $dark-blue;
        text-decoration: none;
    }

    .btn:active {
        text-decoration: none;
    }

    .secondary-btn {
        background-color: $white;
        color: $blue;
        box-shadow: none;
        transition: color .18s ease-in-out;
    }

    .secondary-btn:hover {
        color: $dark-blue;
        background-color: $white;
    }

    .outline-btn {
        background-color: $white;
        border: 1px solid $blue;
        color: $blue;
        padding: .5rem .7rem;
    }

    .outline-btn:hover {
        background-color: $light-blue;
    }

    .btn + .btn {
        margin-left: .2em;
    }

</style>