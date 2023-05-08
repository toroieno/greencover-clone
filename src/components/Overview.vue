<template>
  
  <v-container>
    <v-card style="height: calc(100vh - 130px); background: rgb(244, 236, 253); border-radius: 10px;">
      <div style="border-radius:10px 10px 0 0;height: 70px;border: 1px solid rgba(137, 63, 242, 0.2);box-shadow: rgba(0, 0, 0, 0.22) 0px 0px 4px inset;background: linear-gradient(rgb(239, 239, 239) 76.97%, rgba(227, 227, 227, 0.28) 100%);">
        <div class="layout fill-height">
          <div class="fill-height" style="width:50%;">
            <div class="layout fill-height px-5 align-center">
              <span style="font-size: 0.8vw;">Overview of Changes in</span>
              <div class="pl-3" style="width:300px;">
                <v-select
                  solo
                  dense
                  v-model="select"
                  return-object
                  :items="aoi"
                  item-text="name"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="flex fill-height pl-3" style="width:50%;">
            <div class="layout fill-height align-center justify-end">
              <div class="mx-2" style="width:50%;">
                <div class="layout fill-height align-center">
                  <div style="width: 150px; font-size: 0.8vw;">Compare Month</div>
                  <input type="date" style="padding:12px;background-color: #fff;border-radius: 5px;box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); height:40px;">
                </div>
              </div>
              <div class="mr-2" style="width:50%;">
                <div class="layout fill-height align-center">
                  <div style="width: 150px; font-size: 0.8vw;">VS Month</div>
                  <input type="date" style="padding:12px;background-color: #fff;border-radius: 5px;box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); height:40px;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="height: calc(100% - 70px);background-color:#fff">
        <div class="layout fill-height pa-3">
          <div class="layout fill-height pa-3 elevation-2" style="border-radius: 10px;">
            <div class="layout overflow-y-hidden elevation-2 column" style="height: 100%; width: 50%; border-radius: 11px 0px 0px 11px;background-color: #f7f3f8;">
              <v-card>
                <v-tabs
                  
                  background-color="#f7f3f8"
                  color="deep-purple accent-4"
                >
                  <v-tab>
                    GREEN COVER
                  </v-tab>
                  
                  <v-tab>
                    PLANT HEALTH
                  </v-tab>
                  <v-tab>
                    PLANT DENSITY
                  </v-tab>

                  <!-- GREEN COVER -->
                  <v-tab-item style="height: calc(100vh - 295px);">
                    <v-card
                      class="pa-md-4 mx-lg-auto"
                      color="#f7f3f8"
                      height="100%"
                    >
                      <v-row>
                        <v-col
                          sm="5"
                          md="6"
                          class="py-md-9"
                        >
                          <h1 style="font-size: 36px; font-weight: 600; color: rgb(0, 0, 0);">Green Cover</h1>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          sm="5"
                          md="6"
                        >
                          <span style="font-size: 16px; color: rgb(0, 0, 0); line-height: 50px; font-weight: 500;">
                            Data for the month of <span style="color: rgb(137, 63, 242);">Aug/2022</span>
                          </span>
                          <v-card
                            width="100%"
                            class="rounded-xl mx-auto mt-8"
                            elevation="12"
                          >
                            <v-row v-if="datajp.result">
                              <v-col>{{ datajp.result.green_cover_area.toFixed(2) +' sqkm' }}</v-col>
                              <v-col>
                                <span style="color: rgb(137, 63, 242);font-weight: bold;font-size: 0.9vw;" >- </span>
                                  Non Green Area: {{ this.datajp.result.non_green_area.toFixed(2) +' sqkm' }}
                              </v-col>
                              <v-col>
                                <span style="color: rgb(137, 63, 242);font-weight: bold;font-size: 0.9vw;" >- </span>
                                Water Area: {{ this.datajp.result.water_area.toFixed(2) + ' sqkm' }}
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                        <v-col
                          sm="5"
                          md="6"
                        >
                          <span style="font-size: 16px; color: rgb(0, 0, 0); line-height: 50px; font-weight: 500;">
                            Data for the month of <span style="color: rgb(137, 63, 242);">Aug/2022</span>
                          </span>
                          <v-card
                            width="100%"
                            class="rounded-xl mx-auto mt-8"
                            elevation="12"
                          >
                            <v-row v-if="datajp.compare_result">
                              <v-col>{{ datajp.compare_result.green_cover_area.toFixed(2) +' sqkm' }}</v-col>
                              <v-col>
                                <span style="color: rgb(137, 63, 242);font-weight: bold;font-size: 0.9vw;" >- </span>
                                  Non Green Area: {{ this.datajp.compare_result.non_green_area.toFixed(2) +' sqkm' }}
                              </v-col>
                              <v-col>
                                <span style="color: rgb(137, 63, 242);font-weight: bold;font-size: 0.9vw;" >- </span>
                                Water Area: {{ this.datajp.compare_result.water_area.toFixed(2) + ' sqkm' }}
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          cols="12"
                          class="pa-5"
                        >
                        <v-card
                            width="100%"
                            class="rounded-xl ma-0"
                            elevation="12"
                          >
                            <v-row v-if="datajp.result && datajp.compare_result">
                              <v-col>{{ Math.abs(datajp.result.area_percent_change.toFixed(2)) +' %' }}</v-col>
                              <v-col>
                                {{ (datajp.result.green_cover_area - datajp.compare_result.green_cover_area).toFixed(0) + 'sqkm'}}
                              </v-col>
                            </v-row>
                        </v-card>
                      </v-col>
                      </v-row>                 
                    </v-card>
                  </v-tab-item>
                  <!-- /GREEN COVER -->
                  <!-- PLANT HEALTH -->
                  <v-tab-item style="height: calc(100vh - 295px);">
                    <v-card
                      class="pa-md-4 mx-lg-auto"
                      color="#f7f3f8"
                      height="100%"
                    >
                      <v-row>
                        <v-col
                          sm="5"
                          md="6"
                          class="py-md-9"
                        >
                          <h1 style="font-size: 36px; font-weight: 600; color: rgb(0, 0, 0);">Plant Health</h1>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          sm="5"
                          md="6"
                        >
                          <span style="font-size: 16px; color: rgb(0, 0, 0); line-height: 50px; font-weight: 500;">
                            Data for the month of <span style="color: rgb(137, 63, 242);">Aug/2022</span>
                          </span>
                          <v-card
                            width="100%"
                            
                            class="rounded-xl mx-auto mt-8"
                            elevation="12"
                          >
                            <v-row v-for="(items,i) in datajp.plant_health" :key="i">
                              <v-col>{{ items.label }}</v-col>
                              <v-col style="display: flex;align-items: center;">
                              <div 
                                :style="{backgroundColor:items.color,width:'100%',height:'3px'}"
                              ></div></v-col>
                              <v-col>{{ items.value.toFixed(2) }}</v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                        <v-col
                          sm="5"
                          md="6"
                        >
                          <span style="font-size: 16px; color: rgb(0, 0, 0); line-height: 50px; font-weight: 500;">
                            Data for the month of <span style="color: rgb(137, 63, 242);">Aug/2022</span>
                          </span>
                          <v-card
                            width="100%"
                            class="rounded-xl mx-auto mt-8"
                            elevation="12"
                          >
                            <v-row v-for="(items,i) in datajp.compare_plant_health" :key="i">
                              <v-col>{{ items.label }}</v-col>
                              <v-col style="display: flex;align-items: center;">
                              <div 
                                :style="{backgroundColor:items.color,width:'100%',height:'3px'}"
                              ></div></v-col>
                              <v-col>{{ items.value.toFixed(2) }}</v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          cols="12"
                          class="pa-5"
                        >
                        <v-card
                            width="100%"
                            class="rounded-xl ma-0"
                            elevation="12"
                        >
                          <v-row v-for="(items,i) in datajp.plant_health" :key="i">
                            <v-col>{{ items.label }}</v-col>
                            <v-col style="display: flex;align-items: center;">
                              <div 
                                :style="{backgroundColor:items.color,width:'100%',height:'3px'}"
                              ></div></v-col>
                            <v-col>{{ items.change_percent.toFixed(2) }}</v-col>
                            </v-row>
                        </v-card>
                      </v-col>
                      </v-row>                 
                    </v-card>
                  </v-tab-item>
                  <!-- /PLANT HEALTH -->
                  <!-- PLANT DENSITY -->
                  <v-tab-item style="height: calc(100vh - 295px);">
                    <v-card
                      class="pa-md-4 mx-lg-auto"
                      color="#f7f3f8"
                      height="100%"
                    >
                      <v-row>
                        <v-col
                          sm="5"
                          md="6"
                          class="py-md-9"
                        >
                          <h1 style="font-size: 36px; font-weight: 600; color: rgb(0, 0, 0);">Plant Density</h1>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          sm="5"
                          md="6"
                        >
                          <span style="font-size: 16px; color: rgb(0, 0, 0); line-height: 50px; font-weight: 500;">
                            Data for the month of <span style="color: rgb(137, 63, 242);">Aug/2022</span>
                          </span>
                          <v-card
                            width="100%"
                            class="rounded-xl mx-auto mt-8"
                            elevation="12"
                          >
                            <v-row v-for="(items,i) in datajp.green_density" :key="i">
                              <v-col>{{ items.label }}</v-col>
                              <v-col style="display: flex;align-items: center;">
                              <div 
                                :style="{backgroundColor:items.color,width:'100%',height:'3px'}"
                              ></div></v-col>
                              <v-col>{{ items.value.toFixed(2) }}</v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                        <v-col
                          sm="5"
                          md="6"
                        >
                          <span style="font-size: 16px; color: rgb(0, 0, 0); line-height: 50px; font-weight: 500;">
                            Data for the month of <span style="color: rgb(137, 63, 242);">Aug/2022</span>
                          </span>
                          <v-card
                            width="100%"
                            class="rounded-xl mx-auto mt-8"
                            elevation="12"
                          >
                          <v-row v-for="(items,i) in datajp.compare_green_density" :key="i">
                              <v-col>{{ items.label }}</v-col>
                              <v-col style="display: flex;align-items: center;">
                              <div 
                                :style="{backgroundColor:items.color,width:'100%',height:'3px'}"
                              ></div></v-col>
                              <v-col>{{ items.value.toFixed(2) }}</v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          cols="12"
                          class="pa-5"
                        >
                        <v-card
                            width="100%"
                            class="rounded-xl ma-0"
                            elevation="12"
                          >
                          <v-row v-for="(items,i) in datajp.green_density" :key="i">
                              <v-col>{{ items.label }}</v-col>
                              <v-col style="display: flex;align-items: center;">
                              <div 
                                :style="{backgroundColor:items.color,width:'100%',height:'3px'}"
                              ></div></v-col>
                              <v-col>{{ items.change_percent.toFixed(2) + '%'}}</v-col>
                            </v-row>
                        </v-card>
                      </v-col>
                      </v-row>                 
                    </v-card>
                  </v-tab-item>
                  <!-- /PLANT DENSITY -->
                </v-tabs>
              </v-card>
            </div>
            <div class="ml-6 d-flex flex-column" style="height: calc(100% - 5px); width: 50%;">
              <v-card>
                <Dashboard :dataJP="datajp" />
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>

import api from '@/api/Api'
import Dashboard from '@/components/Dashboard'

export default {
  name: 'OverviewDB',
  components: {
    Dashboard
  },
  data() {
    return {
      month: [],
      chart_data: [],
      aoi: [],
      datajp:[],
      select: {state:'Jaipur'},
    }
  },
  methods: {
    titleChart() {
      this.month.forEach(y => {
        this.chart_data.unshift({
          year: y
        }) 
      })
      // for(let i=0;i<this.month.length;i++) {
      //   if(i==0) {
      //     this.chart_data.unshift({
      //         year: this.month[i]
      //       }) 
      //   }
      // }
    }
  },
  async created() {
    // aoi
    let resultAoi = await api.getAoi()
    this.aoi = resultAoi.data.data
    this.select = this.aoi[0]

    // get month
    let resultMonth = await api.getMonth()
    this.month = resultMonth.data.data
    this.titleChart(this.month)
    console.log(this.month);

    //dashboard
    let params = {
      month: this.month[1].split('-')[1],
      compare_month: this.month[0].split('-')[1],
      compare_year: this.month[0].split('-')[0],
      year: this.month[1].split('-')[0],
      source: 'sentinel',
      overview_type: 'overall_green_cover',
      aoi_id: 215,
    }
    let resultData = await api.getData(params)

    console.log(resultData);

    //result
    let DataJaipur = await api.getJaipur()
    this.datajp = DataJaipur.data.data
    // console.log(this.datajp)
  }
}
</script>
<style>
.v-text-field__details {
  display:none;
}
</style>
