<template>
  <v-card class="overview rounded-lg">
    <v-card-text class="no-padding" style="height: 100%">
      <div class="content" style="height: 100%">
        <v-layout class="card-header align-center">
          <v-layout class="aoi align-center px-5">
            <span><b>Overview of Changes in</b></span>
            <div class="pl-3 select-input">
              <v-select
                class="select-aoi"
                v-model="selectAoi"
                :items="aois"
                :menu-props="{ top: false, offsetY: true }"
                label="Label"
                item-text="name"
                item-value="id"
                solo
                dense
              ></v-select>
            </div>
          </v-layout>
          <div class="times d-inline-flex">
            <v-layout class="month align-center">
              <span><b>Compare Month</b></span>
              <div class="pl-3 select-input">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      append-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>
            </v-layout>
            <v-layout class="month align-center ml-3 mr-3">
              <span><b>VS Month</b></span>
              <div class="pl-3 select-input">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      append-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>
            </v-layout>
          </div>
        </v-layout>
        <div class="card-content pa-3" style="height: calc(100% - 70px)">
          <v-layout class="fill-height pa-3 elevation-2 rounded-lg">
            <v-row>
              <v-col cols="12" md="6">
                <v-card
                  class="elevation-2 rounded-tl-lg rounded-bl-lg fill-height"
                  style="background-color: #f7f3f8"
                >
                  <v-tabs
                    v-model="tab"
                    background-color="backgroundColor2"
                    color="primary"
                    fixed-tabs
                  >
                    <v-tab>GREEN COVER</v-tab>
                    <v-tab>PLANT HEALTH</v-tab>
                    <v-tab>PLANT DENSITY</v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item> 1 </v-tab-item>
                    <v-tab-item>
                      <PlantHealth />
                    </v-tab-item>
                    <v-tab-item> 3 </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="elevation-0 rounded-tr-lg rounded-br-lg fill-height">
                  <v-layout class="flex-column fill-height">
                    <div class="map" style="height: 50%">
                      <MapBox :data="dataMap"/>
                    </div>
                    <div class="db" style="height: 50%; padding-top: 20px;">
                      <v-row>
                        <v-col cols="12" md="8">
                          <div class="dashboard" style="width: 100%; position: relative;">
                            <span class="text-header-chart"
                              >Recorded trends of Green Cover Change</span
                            >
                            <Dashboard />
                          </div>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-layout class="btn-icon align-end justify-end mb-5">
                            <v-icon class="btn-reload">mdi-reload</v-icon>
                          </v-layout>
                          <div class="choose-option">
                            <v-expansion-panels accordion flat>
                              <v-expansion-panel
                                v-for="(item, i) in options_dashboard"
                                :key="i"
                                >
                                <v-expansion-panel-header class="pl-2 pr-2 mb-2" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px inset; border-radius: 7px;">
                                <v-layout class="fill-height align-center" style="color: rgb(128, 8, 250);">
                                  <v-icon>mdi-drag</v-icon>
                                  <v-checkbox hide-details>input</v-checkbox>
                                  <span>{{ item.name }}</span>
                                </v-layout>
                              </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  {{ item.options }}
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                            </v-expansion-panels>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-layout>
                </v-card>
              </v-col>
            </v-row>
          </v-layout>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import api from '@/api/Api'
import PlantHealth from "@/components/overview/PlantHealth.vue";
import Dashboard from "@/components/overview/Dashboard.vue";
import MapBox from "@/components/overview/MapBox.vue";

export default {
  name: "OverviewDB",
  components: {
    PlantHealth,
    Dashboard,
    MapBox
  },
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      dataMap: {},
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      aois: [],
      tab: 1,
      select: '',
      selectAoi: {},
      compareMonth: '',
      month: '',
      items: ["1", "2", "3"],
      options_dashboard: [
        {
          name: "Forest cover change",
          options: "22",
        },
        {
          name: "Forest cover",
          options: "22",
        },
        {
          name: "Plant health",
          options: "22",
        },
        {
          name: "Plant density",
          options: "22",
        }
      ],
    };
  },
  methods: {
    loading() {
      this.$emit('update:isLoading', true)
    },
    loaded() {
      this.$emit('update:isLoading', false)
    }
  },
  async mounted() {
    this.loading()

    let resultAoi = await api.getAoi()
    this.aois = resultAoi.data.data
    this.selectAoi = this.aois[0]
    this.dataMap = this.selectAoi.geometry
    console.log('aoi', this.aois);

    let resultMonth = await api.getMonth()
    console.log(resultMonth);

    this.loaded()
  }
};
</script>

<style scoped>
.overview {
  margin: 0px 36px 16px;
  width: 100%;
}
.no-padding {
  padding: 0;
}
.content {
  width: 100%;
}
.card-header {
  height: 70px;
  background-color: #efefef;
  padding: 0;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 0px 4px inset;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.month {
  width: auto;
}
.select-input {
  height: 38px;
}
.select-aoi {
  width: 288px;
}
.select-time {
  width: 180px;
}
.text-header-chart {
  font-size: 22px;
  font-weight: 500;
  padding-left: 24px;
  color: #893ff2;
}
.v-input {
  margin-top: 0;
  padding-top: 0;
}
.v-expansion-panel-header {
  min-height: 32px;
  padding: 0;
}
.btn-reload {
  transform: rotate(-90deg);
  color: green;
  cursor: pointer;
}
</style>
