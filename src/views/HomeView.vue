<template>
  <div class="home">
    <BigScreen :dataInfo="dataInfo" :eventList="eventList"></BigScreen>
    <Scene :eventList="eventList"></Scene>
     
  </div>
</template>

<script setup>
// @ is an alias to /src
import Scene from '@/components/scene.vue'
import BigScreen from '@/components/BigScreen.vue'
import { onMounted, reactive,ref } from 'vue';
import { getSmartCityInfo,getSmartCityList } from '@/api/api';
import gsap from "gsap";

const dataInfo = reactive({
  iot: { number: 0 },
  event: { number: 0 },
  power: { number: 0 },
  test: { number: 0 },
});
onMounted(async () =>{
  changeInfo();
  getEventList();
  setInterval(() =>{
    changeInfo();
    getEventList();
    
  },10000)


  // let res = await getSmartCityInfo();
  // console.log(res);
  // dataInfo.iot = res.data.data.iot;
  // dataInfo.event = res.data.data.event;
  // dataInfo.power = res.data.data.power;
  // dataInfo.test = res.data.data.test;


});

const changeInfo =async() =>{
  let res = await getSmartCityInfo();
  // console.log(res);
  // dataInfo.iot = res.data.data.iot;
  // dataInfo.event = res.data.data.event;
  // dataInfo.power = res.data.data.power;
  // dataInfo.test = res.data.data.test;
  // console.log(dataInfo)
  for(let key in dataInfo){
    dataInfo[key].name = res.data.data[key].name;
    dataInfo[key].unit = res.data.data[key].unit;
    gsap.to(dataInfo[key],{
    number: res.data.data[key].number,
    duration:1,
  });
  }

}

const eventList = ref([]);
const getEventList = async () => {
  let result = await getSmartCityList();
  eventList.value = result.data.list;
  // console.log(result.data.list);
};
</script>
 