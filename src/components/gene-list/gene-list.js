import _ from 'lodash'
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isOpen: false,
      highlightedPosition: 0,
      keyword: ''
    }
  },
  methods: {
    onInput (value) {
      this.isOpen = !!value
      this.highlightedPosition = 0
    },
    moveDown () {
      if (!this.isOpen) {
        return
      }
      this.highlightedPosition =
        (this.highlightedPosition + 1) % this.fOptions.length
    },
    moveUp () {
      if (!this.isOpen) {
        return
      }
      this.highlightedPosition = this.highlightedPosition - 1 < 0
        ? this.fOptions.length - 1
        : this.highlightedPosition - 1
    },
    select () {
      const selectedOption = this.fOptions[this.highlightedPosition]
      this.keyword = selectedOption.Gene_Name
      this.isOpen = false
      this.$emit('select', selectedOption)
    }
  },
  computed: {
    fOptions () {
      const re = new RegExp(this.keyword, 'i')
      return _.chain(this.options).filter(o => o.match(re)).take(10).value()
    }
  }
}
