<template>
  <div>
  <section class="hero is-fullheight">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <gene-list :options="genes" @select="onOptionSelect"></gene-list>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-active">
              Home
            </a>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body has-text-left">
      <section>
        <div class="container is-fluid">
          <div class="heading">
            <h1 class="title">Gene Name</h1>
            <h2 class="subtitle">
              {{ selected.Gene_Name }}
            </h2>
          </div>
          <div>
            <p>
            <span v-for="piece in allSeq" style="background: piece.col">{{ piece.seq }}</span>
            </p>
            <p>
            <span>|</span>
            <span v-for="seq in sequences" class="tooltip" @mouseenter="substrings(seq)" @mouseout="resetSS"> {{ seq }} |</span>
            </p>
            <p>
            <span v-for="ss in substrings">-{{ ss }}-</span>
            </p>
          </div>
        </div>
        </section>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active"><a>Overview</a></li>
            <li><a>Modifiers</a></li>
<!--            <li><a>Grid</a></li>
            <li><a>Elements</a></li>
            <li><a>Components</a></li>
            <li><a>Layout</a></li> -->
          </ul>
        </div>
      </nav>
    </div>
  </section>
  <span class="tooltiptext">Tooltip text</span>
  </div>
</template>

<script>
  import _ from 'lodash'
  import GeneList from './gene-list/gene-list.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        all: [{'': -1, SEQ: ['asd'], NP_Counts: 1, Gene_Name: 'aaa001'}],
        selected: [{'': -1, SEQ: ['asd'], NP_Counts: 1, Gene_Name: 'aaa001'}],
        sequences: [],
        genes: [],
        fasta_seq: ['', '', '']
      }
    },
    created () {
      console.log('created')
      var oReq = new XMLHttpRequest()

      // oReq.addEventListener('progress', updateProgress)
      // oReq.addEventListener('load', transferComplete.call(this))
      // oReq.addEventListener('error', transferFailed)
      // oReq.addEventListener('abort', transferCanceled)

      oReq.open('get', '/static/subsetForTesting.txt', true)
      // oReq.open('get', '/static/Hu_Output_Ver7.txt', true)
      oReq.onreadystatechange = (aEvt) => {
        if (oReq.readyState === XMLHttpRequest.DONE) {
          var temp = oReq.responseText.replace(/\n$/, '').split('\n')
          var keys = temp.shift().split('\t')
          var o = _.map(temp, (t) => _.zipObject(keys, _.map(t.replace(/'/g, '').split('\t'))))
          this.all = _.groupBy(o, 'Gene')
          this.genes = _.keys(this.all)
          this.selected = this.all['AADACL3']
          this.fasta_seq = [this.selected[0].FASTA_SEQ, '', '']
          this.sequences = this.selected[0].UNIQ_SEQ.replace(/\s/g, '').split(',')
        }
      }
      oReq.onprogress = function (event) {
        event.loaded
        event.total
        console.log(event.loaded / event.total)
      }
      oReq.send()
    },
    components: {
      GeneList
    },
    methods: {
      onOptionSelect (option) {
        console.log('Selected option:', option)
        this.selected = this.all[option]
        this.fasta_seq = [this.selected[0].FASTA_SEQ, '', '']
        this.sequences = this.selected[0].UNIQ_SEQ.replace(/\s/g, '').split(',')
      },
      // substrings (w) {
        // const i = this.selected[0].FASTA_SEQ.indexOf(w)
        // if (i !== -1) {
          // const s1 = this.selected[0].FASTA_SEQ.slice(0, i)
          // const s2 = this.selected[0].FASTA_SEQ.slice(i, i + w.length)
          // const s3 = this.selected[0].FASTA_SEQ.slice(i + w.length)
          // this.fasta_seq = [s1, s2, s3]
        // } else {
          // this.resetSS()
        // }
      // },
      resetSS () {
        this.fasta_seq = [this.selected[0].FASTA_SEQ, '', '']
      }
    },
    computed: {
      allSeq () {
        // const i = this.selected[0].FASTA_SEQ.indexOf(w)
        // if (i !== -1) {
          // const s1 = this.selected[0].FASTA_SEQ.slice(0, i)
          // const s2 = this.selected[0].FASTA_SEQ.slice(i, i + w.length)
          // const s3 = this.selected[0].FASTA_SEQ.slice(i + w.length)
          // this.fasta_seq = [s1, s2, s3]
        // } else {
          // this.resetSS()
        // }
      }
      // substrings () {
        // const seq = this.selected[0].FASTA_SEQ
        // return _.map(this.sequences, s => {
          // const start = seq.indexOf(s)
          // return { start: start, end: start + s.length, seq: s }
        // })
      // }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .hero-body {
    align-items: flex-start !important;
  }
  .main-content {
    background: white;
    color: black;
  }
  .tooltip {
    position: relative;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  span {
    word-break: break-all;
  }
  </style>
