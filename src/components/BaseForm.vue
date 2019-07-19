<template>
    <div>
        <h3>Science in the Northwoods Registration</h3>
        <form>
            <label>Name</label>
            <input type="text">
            <div class="multiple-inputs-form-wrapper">
                <div class="label-input-form-wrapper">
                <label>Email Address</label>
                <input type="email">
                </div>
                <div class="label-input-form-wrapper">
                    <label>Phone Number</label>
                    <input type="text">
                </div>
            </div>
            <label>Street Address</label>
            <input type="text">
            <div class="multiple-inputs-form-wrapper">
                <div class="label-input-form-wrapper">
                    <label>City</label>
                    <input id="city-form-input" type="text">
                </div>
                <div class="label-input-form-wrapper">
                    <label>State</label>
                    <input id="state-form-input" type="text">
                </div>
                <div class="label-input-form-wrapper">
                    <label>Zip Code</label>
                    <input id="zip-form-input" type="text">
                </div>
            </div>
                <div class="label-input-form-wrapper">
                    <label>Event Date</label>
                    <input type="date">
                </div>
                <div class="label-input-form-wrapper">
                    <label>Event Time</label>
                    <input type="time">
                </div>
            <label>Radio</label>
            <input type="radio">
            <input type="radio">
            <input type="radio">
            <label>Checkbox</label>
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
            <label>Select Housing</label>
            <select name="select">
                <option>Main Lodge</option>
                <option>Log Cabin A</option>
                <option>Log Cabin B</option>
            </select>
            <BaseButton>Submit</BaseButton>
        </form>
    </div>

</template>


<script>

import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'BaseForm',
  components: {
      BaseButton
      }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    input {
        display: block;
    }

    input[type=radio], input[type=checkbox] {
        display: inline;
    }

    label {
        margin-top: 12px;
        display: block;
    }

    input[type=text], input[type=email] {
        width: 100%;
    }

    .multiple-inputs-form-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .label-input-form-wrapper {
        flex-grow: 1;
    }

    .label-input-form-wrapper:last-child {
        margin-right: 0;
        }

    @media only screen and (min-width: 390px) {
        .label-input-form-wrapper {
        margin-right: 16px;
        }

        .label-input-form-wrapper:last-child {
        margin-right: 0;
        }
    }

    select {
        display: block;
    }

</style>