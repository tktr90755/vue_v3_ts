<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
// import ArrayUtils from '@/libs/tk90755/utils/ArrayUtils';
// import DateUtils from '@/libs/tk90755/utils/DateUtils';
// import MathUtils from '@/libs/tk90755/utils/MathUtils';
import Event from '@/libs/tk90755/events/Event';
import { defineComponent } from "vue";
export default defineComponent({
  setup():void{
    // console.log(ArrayUtils.findMax([1,2,3,4,5,6,7,8,9]));
    // console.log(ArrayUtils.findMin([1,2,3,4,5,6,7,8,9]));
    // // console.log(ArrayUtils.shuffle([1,2,3,4,5,6,7,8,9]));
    // console.log(ArrayUtils.shuffleNumbers([1,2,3,4,5,6,7,8,9]));
    // console.log(ArrayUtils.shuffleStrings(["1","2","3","4","5","6","7","8","9"]));
    // console.log(ArrayUtils.inverse<string>(["1","2","3","4","5","6","7","8","9"]));
    // console.log(ArrayUtils.inverse<number>([1,2,3,4,5,6,7,8,9]));
    // console.log(ArrayUtils.inverse<number|string>([1,2,"3",4,5,6,7,8,9]));
    // console.log(ArrayUtils.inverseNumbers([1,2,3,4,5,6,7,8,9]));
    // console.log(ArrayUtils.inverseStrings(["1","2","3","4","5","6","7","8","9"]));
    // console.log(ArrayUtils.random<string>(["1","2","3","4","5","6","7","8","9"])); // ["9", "8", "7", "6", "5", "4", "3", "2", "1"]
    // console.log(ArrayUtils.random<number>([1,2,3,4,5,6,7,8,9]));                   // [9, 8, 7, 6, 5, 4, 3, 2, 1]
    // console.log(ArrayUtils.random<number|string>([1,2,"3",4,5,6,7,8,9]));          // [9, 8, 7, 6, 5, 4, "3", 2, 1]
    // console.log(ArrayUtils.randomNumber([1,2,3,4,5,6,7,8,9]));
    // console.log(ArrayUtils.isContain<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // true
    // console.log(ArrayUtils.isContain<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
    // console.log(ArrayUtils.isContain<string>(["A", "B"], "A")); // true
    // console.log(ArrayUtils.isContain<string>(["A", "B"], "C")); // false
    // console.log(ArrayUtils.isContain<string|number>(["A", "B"], 99)); // false
    // console.log(ArrayUtils.isContainInNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // true
    // console.log(ArrayUtils.isContainInNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
    // console.log(ArrayUtils.isContainInStrings(["A", "B"], "A")); // true
    // console.log(ArrayUtils.isContainInStrings(["A", "B"], "C")); // false
    // console.log(DateUtils.unixTime());
    // console.log(DateUtils.unixTime(new Date( 2012, 11, 5, 3, 15, 30 ))); //1354644930000
    // console.log(MathUtils.sign(46));  //  1 
    // console.log(MathUtils.sign(-34)); // -1
    // console.log(MathUtils.fract(46.39)); //0.39
    // let i = 0;
    // setInterval(() => {
    //   i += 0.1;
    //   MathUtils.omitFloat(i,1000);
    // }, 100);
    // console.log(MathUtils.factorial(4)); //
    // console.log(MathUtils.inRange(12,10,20)); //true
    // console.log(MathUtils.inRange(21,10,20)); //false
    // console.log(MathUtils.normalize(50,0,100)); //0.5
    // console.log(MathUtils.normalize(21,10,20)); //1.1
    const event:Event = new Event("aaa");
  }
});














// import { Options, Vue } from 'vue-class-component';

// @Options({
//   props: {
//     msg: String
//   }
// })
// export default class HelloWorld extends Vue {
//   msg!: string
// }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
