<template>
  <main class="my-5">
    <aos-vue>
      <section class="p-4">
        <div
          data-aos="fade-up"
          class="mb-4 rounded-8vw bg-info2 col-lg-9 mr-auto pb-4"
        >
          <h2 class="text-center fw-bold py-4">تحلیل جایگزین ها</h2>
          <div class="row mx-0 align-items-center p-4">
            <form
              class="shadow col-7 flex-grow-1 flex-shrink-0 border-info border border-2 rounded-8vw p-4 bg-white"
            >
              <div class="shadow rounded-8vw p-4 bg-white">
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >1-ﻭﺟﻮﺩ ﺟﺎﯾگزﯾﻦ ﻫﺎی ﻧﺰﺩﯾک را چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                    <div
                      class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3"
                    >
                      <p class="mb-0 fw-bold text-danger">زیاد</p>
                      <div class="flex-grow-1">
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                        >
                          <p class="mb-0">غیرجذاب</p>
                          <p class="mb-0">
                            غیرجذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">بی تفاوت</p>
                          <p class="mb-0">
                            جذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">جذاب</p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 inputBox"
                        >
                          <div
                            v-for="(n, index) in 5"
                            :key="index"
                            :class="{ active: selectedOption === n }"
                            class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                          >
                            <input
                              :value="n"
                              v-model="selectedOption"
                              @change="updateChartData(index + 1)"
                              type="radio"
                              name="radio"
                              class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                            />
                            {{ n }}
                          </div>
                        </div>
                      </div>
                      <p class="mb-0 fw-bold text-success">کم</p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >2- ﻫﺰﯾﻨﻪ ﺗﻐﯿﯿﺮ کاﺭﺑﺮی ﺑﺮﺍی ﻣﺼﺮﻑ کﻨﻨﺪگاﻥ را چطور ارزیابی می
                    کنید؟</label
                  >
                  <div class="mt-3">
                    <div
                      class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3"
                    >
                      <p class="mb-0 fw-bold text-danger">پایین</p>
                      <div class="flex-grow-1">
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                        >
                          <p class="mb-0">غیرجذاب</p>
                          <p class="mb-0">
                            غیرجذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">بی تفاوت</p>
                          <p class="mb-0">
                            جذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">جذاب</p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 inputBox"
                        >
                          <div
                            v-for="(n, index) in 5"
                            :key="index"
                            :class="{ active: selectedOption2 === n }"
                            class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                          >
                            <input
                              :value="n"
                              v-model="selectedOption2"
                              @change="updateChartData2(index + 1)"
                              type="radio"
                              name="radio"
                              class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                            />
                            {{ n }}
                          </div>
                        </div>
                      </div>
                      <p class="mb-0 fw-bold text-success">بالا</p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >3-ﺳﻮﺩﺁﻭﺭی ﻭ ﺗﻬﺎﺟمی ﺑﻮﺩﻥ ﺟﺎﯾگزﯾﻦ ﻫﺎ ﺑﺮﺍی ﺗﻮﻟﯿﺪ کﻨﻨﺪﻩﻫﺎ را
                    چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                    <div
                      class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3"
                    >
                      <p class="mb-0 fw-bold text-danger">بالا</p>
                      <div class="flex-grow-1">
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                        >
                          <p class="mb-0">غیرجذاب</p>
                          <p class="mb-0">
                            غیرجذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">بی تفاوت</p>
                          <p class="mb-0">
                            جذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">جذاب</p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 inputBox"
                        >
                          <div
                            v-for="(n, index) in 5"
                            :key="index"
                            :class="{ active: selectedOption3 === n }"
                            class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                          >
                            <input
                              :value="n"
                              v-model="selectedOption3"
                              @change="updateChartData3(index + 1)"
                              type="radio"
                              name="radio"
                              class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                            />
                            {{ n }}
                          </div>
                        </div>
                      </div>
                      <p class="mb-0 fw-bold text-success">پایین</p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >4-ﻗﯿﻤﺖ ﯾﺎﺍﺭﺯﺵ ﺟﺎﯾگزﯾﻦ ﻫﺎ را چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                    <div
                      class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3"
                    >
                      <p class="mb-0 fw-bold text-danger">بالا</p>
                      <div class="flex-grow-1">
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                        >
                          <p class="mb-0">غیرجذاب</p>
                          <p class="mb-0">
                            غیرجذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">بی تفاوت</p>
                          <p class="mb-0">
                            جذاب<br />
                            متوسط
                          </p>
                          <p class="mb-0">جذاب</p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 inputBox"
                        >
                          <div
                            v-for="(n, index) in 5"
                            :key="index"
                            :class="{ active: selectedOption4 === n }"
                            class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                          >
                            <input
                              :value="n"
                              v-model="selectedOption4"
                              @change="updateChartData4(index + 1)"
                              type="radio"
                              name="radio"
                              class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                            />
                            {{ n }}
                          </div>
                        </div>
                      </div>
                      <p class="mb-0 fw-bold text-success">پایین</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div class="mt-5 col-5 flex-grow-1 flex-shrink-0">
              <apexchart
                width="700"
                class="w-100"
                type="radar"
                :options="options"
                :series="series"
              ></apexchart>
            </div>
          </div>
          <button @click="showData" class="btn btn-success mx-auto d-block fw-bold">ذخیره</button>
        </div>
      </section>
    </aos-vue>
  </main>
</template>
  

<script>
export default {
  methods: {
    showData(){
      console.log(this.series[0].data[0],this.series[0].data[1],this.series[0].data[2],this.series[0].data[3]);
    },
    updateChartData(index) {
      this.selectedOption = index;
      this.series[0].data[0] = index;
    },
    updateChartData2(index) {
      this.selectedOption2 = index;
      this.series[0].data[1] = index;
    },
    updateChartData3(index) {
      this.selectedOption3 = index;
      this.series[0].data[2] = index;
    },
    updateChartData4(index) {
      this.selectedOption4 = index;
      this.series[0].data[3] = index;
    },
  },
  data: function () {
    return {
      selectedOption: 5,
      selectedOption2: 3,
      selectedOption3: 5,
      selectedOption4: 4,
      options: {
        markers: {
          size: 5,
          hover: {
            size: 10,
          },
        },
        fill: {
          opacity: 0.2,
          colors: ["#3c76f2"],
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: "#e8e8e8",
              fill: {
                colors: ["#f5f4f8", "#fff"],
              },
            },
          },
        },
        xaxis: {
          categories: [
            "وجود جایگزین های نزدیک",
            "هزینه تغییر کاربری برای مصرف کنندگان",
            "سودآوری و تهاجمی بودن جایگزین ها برای تولیدکننده ها",
            "قیمت یا ارزش جایگزین ها",
          ],
          labels: {
            show: true,
            style: {
              // fontSize: "1vw",
              // fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: "bold",
              colors: ["#000000", "#000000", "#000000", "#000000"],
            },
          },
        },
      },
      series: [
        {
          name: "Vue Chart",
          data: [5, 3, 5, 4],
        },
      ],
    };
  },
};
</script>

<style>
</style>