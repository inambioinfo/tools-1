<template>
  <div class="autocomplete-input">
    <p class="control has-icon has-icon-right">
    <input
       v-model="keyword"
       class="input is-medium is-loading"
       placeholder="gene name search"
       @input="onInput($event.target.value)"
       @keyup.esc="isOpen = false"
       @blur="isOpen = false"
       @keydown.down="moveDown"
       @keydown.up="moveUp"
       @keydown.enter="select"
       >
       <i class="fa fa-angle-down"></i>
    </p>
    <ul v-show="isOpen"
        class="options-list">
      <li v-for="(fOption, index) in fOptions"
          :class="{
          'highlighted': index === highlightedPosition
          }"
          @mouseenter="highlightedPosition = index"
          @mousedown="select"
          >
          {{ fOption }}
      </li>
    </ul>
  </div>
</template>

<script src='./gene-list.js'></script>
<style src='./gene-list.css'></style>
