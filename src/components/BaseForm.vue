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

            <label>Participant Type</label>
            <div class="radio-button-container">
                <input type="radio" name="radio" value="radio1">First-Time Participant
            </div>
            <div class="radio-button-container">
                <input type="radio" name="radio" value="radio2">I've Attended Before
            </div>

            <label>Select Housing</label>
            <select name="select">
                <option>Main Lodge</option>
                <option>Log Cabin A</option>
                <option>Log Cabin B</option>
            </select>

            <label>Activities</label>
            <div class="checkbox-container">
                <input type="checkbox" name="Activities" value="natureHike">Nature Hike
            </div>
            <div class="checkbox-container">
                <input type="checkbox" name="Activities" value="pondChemistry">Pond Chemistry
            </div>
            <div class="checkbox-container">
                <input type="checkbox" name="Activities" value="birdWatching">Bird Watching
            </div>

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
        margin-right: 0.5rem;
    }

    label {
        margin-top: 12px;
        display: block;
        font-weight: bold;
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

    .radio-button-container, .checkbox-container {
        margin: 0.4rem 0;
    }

</style>