

<template>
  <div class="hello">
    <div>{{size}}</div>
    <div>{{displayPagesPerPage}}</div>
    <div>{{pages}}</div>
  </div>
</template>

<script lang="ts">
// https://qiita.com/Ryo9597/items/956daec2cbc91b423782

import { defineComponent, reactive, onMounted, onUpdated, onUnmounted } from "vue";

// types
// import { PageSize, PageDisplayPagesPerPage, PagePages, Props } from './PageInterface';
type Props = {
  size: string,
  displayPagesPerPage: number
};
export default defineComponent({
  // props:{
  //   size: {
  //     type: String as PropType<PageSize>,
  //     default: 'medium',
  //     validator: function (value: string) {
  //       return ['small', 'medium', 'large'].indexOf(value) !== -1;
  //     },
  //   },
  //   displayPagesPerPage: {
  //     type: Number as PropType<PageDisplayPagesPerPage>,
  //     default: 5,
  //     validator: function (value: number) {
  //       console.log([5, 10].indexOf(value) !== -1,"@@@@@@@@@@@@@@")
  //       return [5, 10].indexOf(value) !== -1;
  //     },
  //   },
  //   pages: {
  //     type: Array as PropType<PagePages>,
  //   },
  // },
  props: {
    size: {
      type: String,
      default: "small"
    },
    displayPagesPerPage: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {
      count: 0,
    }
  },
  setup(props:Props){
    // const props = $props as any;

    const bmi = (height: number, weight: number, isConsole?: boolean): number | undefined => {
      const culc: number = weight / (height * height);
      if (isConsole) {
        return culc;
      }
    };

    const state = reactive({
      isLogin: false,
      app_setting : {
        arapp_setting :{
          adjust_base_position :{
            x: 0,
            y: 0,
            z: 0
          },
          adjust_base_rotation :{
            x: 0,
            y: 0,
            z: 0
          },
        },
      },
    });

    ////
    // onMounted
    onMounted(() => {
      console.log('mounted! props' ,props) 
      // console.log('mounted! props' ,props.size) 
      console.log('mounted! state' ,state) 
    })

    ////
    // onUpdated
    onUpdated(() => {
      console.log('updated!')
    })

    ////
    // onUnmounted
    onUnmounted(() => {
      console.log('unmounted!')
    })

    return {
      bmi,
      state
    };
  }
});


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
