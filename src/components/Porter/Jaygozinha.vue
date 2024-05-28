<template>
  <main class="my-5">
    <aos-vue>
      <section>
        <div
          data-aos="fade-up"
          class="max-w-96 mx-auto mb-4 rounded-8vw p-4 bg-info2"
        >
          <h2 class="text-center fw-bold py-4">تحلیل جایگزین ها</h2>
          <div
            class="d-flex align-items-center border-info border border-2 rounded-8vw p-4 bg-white"
          >
            <form class="rounded-8vw p-4 shadow flex-grow-1 flex-shrink-0">
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >1-ﻭﺟﻮﺩ ﺟﺎﯾگﺰﯾﻦ ﻫﺎی ﻧﺰﺩﯾک را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                  <div
                    class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info"
                  >
                    <p class="mb-0">غیرجذاب</p>
                    <p class="mb-0">غیرجذاب متوسط</p>
                    <p class="mb-0">بی تفاوت</p>
                    <p class="mb-0">جذاب متوسط</p>
                    <p class="mb-0">جذاب</p>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3"
                  >
                    <p class="mb-0">زیاد</p>
                    <div
                      class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox"
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
                    <p class="mb-0">کم</p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >2- ﻫﺰﯾﻨﻪ ﺗﻐﯿﯿﺮ کﺎﺭﺑﺮی ﺑﺮﺍی ﻣﺼﺮﻑ کﻨﻨﺪگاﻥ را چطور ارزیابی می
                  کنید؟</label
                >
                <div class="mt-3">
                  <div
                    class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info"
                  >
                    <p class="mb-0">غیرجذاب</p>
                    <p class="mb-0">غیرجذاب متوسط</p>
                    <p class="mb-0">بی تفاوت</p>
                    <p class="mb-0">جذاب متوسط</p>
                    <p class="mb-0">جذاب</p>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3"
                  >
                    <p class="mb-0">پایین</p>
                    <div
                      class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox"
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
                    <p class="mb-0">بالا</p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >3-ﺳﻮﺩﺁﻭﺭی ﻭ ﺗﻬﺎﺟﻤی ﺑﻮﺩﻥ ﺟﺎﯾگﺰﯾﻦ ﻫﺎ ﺑﺮﺍی ﺗﻮﻟﯿﺪ کﻨﻨﺪﻩﻫﺎ را چطور
                  ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                  <div
                    class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info"
                  >
                    <p class="mb-0">غیرجذاب</p>
                    <p class="mb-0">غیرجذاب متوسط</p>
                    <p class="mb-0">بی تفاوت</p>
                    <p class="mb-0">جذاب متوسط</p>
                    <p class="mb-0">جذاب</p>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3"
                  >
                    <p class="mb-0">بالا</p>
                    <div
                      class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox"
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
                    <p class="mb-0">پایین</p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >4-ﻗﯿﻤﺖ ﯾﺎﺍﺭﺯﺵ ﺟﺎﯾگﺰﯾﻦ ﻫﺎ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                  <div
                    class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info"
                  >
                    <p class="mb-0">غیرجذاب</p>
                    <p class="mb-0">غیرجذاب متوسط</p>
                    <p class="mb-0">بی تفاوت</p>
                    <p class="mb-0">جذاب متوسط</p>
                    <p class="mb-0">جذاب</p>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3"
                  >
                    <p class="mb-0">بالا</p>
                    <div
                      class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox"
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
                    <p class="mb-0">پایین</p>
                  </div>
                </div>
              </div>
            </form>
            <div class="mt-5 flex-grow-1 flex-shrink-0">
              <apexchart
                width="700"
                class="w-40"
                type="radar"
                :options="options"
                :series="series"
              ></apexchart>
            </div>
          </div>
        </div>
      </section>
    </aos-vue>
  </main>
</template>
  

<script>
export default {
  methods: {
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