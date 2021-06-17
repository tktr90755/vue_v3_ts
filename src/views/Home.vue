<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
    <!-- <HelloWorld2 ref="componentRef" size="small" :displayPagesPerPage="10"/> -->
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import HelloWorld2 from '@/components/HelloWorld2.vue'; // @ is an alias to /src
import { defineComponent } from "vue";
// import { defineComponent, ref, onMounted } from "vue";
//https://qiita.com/jay-es/items/6d0279737fb510b0aa6c
export default defineComponent({
  components: {
    HelloWorld,
    // HelloWorld2
  },
  // setup(){
  //   const componentRef = ref<InstanceType<typeof HelloWorld2>>()
  //   console.log(componentRef.value) // undefined
  //   ////
  //   // onMounted
  //   onMounted(() => {
  //     console.log(componentRef.value) // コンポーネントの Proxy
  //     if (!componentRef.value) return
  //     console.log(componentRef.value.$el) // テキストノード
  //     console.log(componentRef.value.bmi) // テキストノード
  //     console.log(componentRef.value.state) // テキストノード
  //     console.log(componentRef.value.state.isLogin) // テキストノード
  //     // console.log(componentRef.value.$props.msg) // props で渡した値
  //     // const props = componentRef.value.$props as any;
  //     // console.log(props.size) // props で渡した値
  //     // console.log(componentRef.value.$props.displayPagesPerPage) // props で渡した値
  //     // console.log(componentRef.value.$props.pages) // props で渡した値
  //     // console.log(componentRef.value.$data.count) // コンポーネントの $data の値
  //     // componentRef.value.count++ // バッドプラクティス！
  //     // console.log(componentRef.value.count) // 増えている
  //     console.log("-----------------------------")
  //   })
  //   return { componentRef }
  // }
});
</script>
