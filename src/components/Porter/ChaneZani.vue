<template>
  <main class="my-5">
    <aos-vue>
      <section class="p-4">
        <div data-aos="fade-up" class="mb-4 rounded-8vw bg-info2 col-lg-9 mr-auto pb-4">
          <h2 class="text-center fw-bold py-4"> ﻗﺪﺭﺕ چاﻧﻪ ﺯنی ﻣﺸﺘﺮﯾﺎﻥ ﻧﻬﺎیی (مشترکین صنعتی)</h2>
          <div class="d-flex mx-0 align-items-center p-4">
            <form class="shadow col-7 flex-grow-1 flex-shrink-0 border-info border border-2 rounded-8vw p-4 bg-white">
              <div class="shadow rounded-8vw p-4 bg-white">
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                  >1-ﺗﻌﺪﺍﺩ خریداران مهم را چطور ارزیابی می کنید؟</label
                >
                  <div class="mt-3">
                      <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                        <p class="mb-0 fw-bold text-danger">کم</p>
                        <div class="flex-grow-1">
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                          >
                            <p class="mb-0 text-end -bottom-1vw">قدرت چانه زنی<br> بالا</p>
                            <p class="mb-0 -right-18">قدرت چانه زنی<br> نسبتا بالا</p>
                            <p class="mb-0 start-0 -bottom-1vw">قدرت<br> بی تفاوت</p>
                            <p class="mb-0 right-15">قدرت چانه زنی<br> نسبتا کم</p>
                            <p class="mb-0 text-start -bottom-1vw">قدرت چانه زنی<br> کم</p>
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
                        <p class="mb-0 fw-bold text-success">زیاد</p>
                      </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >2- ﻭﺟﻮﺩ ﺟﺎﯾگزﯾﻦ ﺑﺮﺍی ﺗﻮﻟﯿﺪﺍﺕ ﺻﻨﻌﺖ را چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                      <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                        <p class="mb-0 fw-bold text-danger">زیاد</p>
                        <div class="flex-grow-1">
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                          >
                            <p class="mb-0 text-end -bottom-1vw">قدرت چانه زنی<br> بالا</p>
                            <p class="mb-0 -right-18">قدرت چانه زنی<br> نسبتا بالا</p>
                            <p class="mb-0 start-0 -bottom-1vw">قدرت<br> بی تفاوت</p>
                            <p class="mb-0 right-15">قدرت چانه زنی<br> نسبتا کم</p>
                            <p class="mb-0 text-start -bottom-1vw">قدرت چانه زنی<br> کم</p>
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
                        <p class="mb-0 fw-bold text-success">کم</p>
                      </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >3-ﻫﺰﯾﻨﻪ ﺗﻐﯿﯿﺮ کاﺭﺑﺮی ﺑﺮﺍی ﺧﺮﯾﺪﺍﺭﺍﻥ را چطور ارزیابی
                  می کنید؟</label
                  >
                  <div class="mt-3">
                      <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                        <p class="mb-0 fw-bold text-danger">پایین</p>
                        <div class="flex-grow-1">
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                          >
                            <p class="mb-0 text-end -bottom-1vw">قدرت چانه زنی<br> بالا</p>
                            <p class="mb-0 -right-18">قدرت چانه زنی<br> نسبتا بالا</p>
                            <p class="mb-0 start-0 -bottom-1vw">قدرت<br> بی تفاوت</p>
                            <p class="mb-0 right-15">قدرت چانه زنی<br> نسبتا کم</p>
                            <p class="mb-0 text-start -bottom-1vw">قدرت چانه زنی<br> کم</p>
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
                        <p class="mb-0 fw-bold text-success">بالا</p>
                      </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >4-ﺗﻬﺪﯾﺪ ﺗﺮکﯿﺐ ﺑﺎﻻ ﺩﺳﺘی ﺧﺮﯾﺪﺍﺭﺍﻥ (رو به عقب) را چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                      <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                        <p class="mb-0 fw-bold text-danger">بالا</p>
                        <div class="flex-grow-1">
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                          >
                            <p class="mb-0 text-end -bottom-1vw">قدرت چانه زنی<br> بالا</p>
                            <p class="mb-0 -right-18">قدرت چانه زنی<br> نسبتا بالا</p>
                            <p class="mb-0 start-0 -bottom-1vw">قدرت<br> بی تفاوت</p>
                            <p class="mb-0 right-15">قدرت چانه زنی<br> نسبتا کم</p>
                            <p class="mb-0 text-start -bottom-1vw">قدرت چانه زنی<br> کم</p>
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
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >5-کﻤک ﺑﻪ کﯿﻔﯿﺖ ﻭ ﺧﺪﻣﺎﺕ ﻣﺤﺼﻮﻻﺕ ﺧﺮﯾﺪﺍﺭﺍﻥ را چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                      <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                        <p class="mb-0 fw-bold text-danger">کوچک</p>
                        <div class="flex-grow-1">
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                          >
                            <p class="mb-0 text-end -bottom-1vw">قدرت چانه زنی<br> بالا</p>
                            <p class="mb-0 -right-18">قدرت چانه زنی<br> نسبتا بالا</p>
                            <p class="mb-0 start-0 -bottom-1vw">قدرت<br> بی تفاوت</p>
                            <p class="mb-0 right-15">قدرت چانه زنی<br> نسبتا کم</p>
                            <p class="mb-0 text-start -bottom-1vw">قدرت چانه زنی<br> کم</p>
                          </div>
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 inputBox"
                          >
                            <div
                              v-for="(n, index) in 5"
                              :key="index"
                              :class="{ active: selectedOption5 === n }"
                              class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                            >
                              <input
                                :value="n"
                                v-model="selectedOption5"
                                @change="updateChartData5(index + 1)"
                                type="radio"
                                name="radio"
                                class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                              />
                              {{ n }}
                            </div>
                          </div>
                        </div>
                        <p class="mb-0 fw-bold text-success">بزرگ</p>
                      </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="fs-1-2vw text-dark fw-bold"
                    >6-ﻣﺠﻤﻮﻉ ﻫﺰﯾﻨﻪﻫﺎی ﺧﺮﯾﺪﺍﺭﺍﻥ کﻪ ﺗﻮﺳﻂ ﺻﻨﻌﺖ ﺗﺎﻣﯿﻦ ﻣیﺷﻮﺩ را چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                      <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                        <p class="mb-0 fw-bold text-danger">زیاد</p>
                        <div class="flex-grow-1">
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                          >
                            <p class="mb-0 text-end -bottom-1vw">قدرت چانه زنی<br> بالا</p>
                            <p class="mb-0 -right-18">قدرت چانه زنی<br> نسبتا بالا</p>
                            <p class="mb-0 start-0 -bottom-1vw">قدرت<br> بی تفاوت</p>
                            <p class="mb-0 right-15">قدرت چانه زنی<br> نسبتا کم</p>
                            <p class="mb-0 text-start -bottom-1vw">قدرت چانه زنی<br> کم</p>
                          </div>
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 inputBox"
                          >
                            <div
                              v-for="(n, index) in 5"
                              :key="index"
                              :class="{ active: selectedOption6 === n }"
                              class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                            >
                              <input
                                :value="n"
                                v-model="selectedOption6"
                                @change="updateChartData6(index + 1)"
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
                    >7-ﺳﻮﺩﺁﻭﺭی ﺧﺮﯾﺪﺍﺭﺍﻥ را چطور ارزیابی می کنید؟</label
                  >
                  <div class="mt-3">
                      <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                        <p class="mb-0 fw-bold text-danger">پایین</p>
                        <div class="flex-grow-1">
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border-b-info-3 text-center radioLabel pb-3 mb-3 text-info"
                          >
                            <p class="mb-0 text-end -bottom-1vw">قدرت چانه زنی<br> بالا</p>
                            <p class="mb-0 -right-18">قدرت چانه زنی<br> نسبتا بالا</p>
                            <p class="mb-0 start-0 -bottom-1vw">قدرت<br> بی تفاوت</p>
                            <p class="mb-0 right-15">قدرت چانه زنی<br> نسبتا کم</p>
                            <p class="mb-0 text-start -bottom-1vw">قدرت چانه زنی<br> کم</p>
                          </div>
                          <div
                            class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 inputBox"
                          >
                            <div
                              v-for="(n, index) in 5"
                              :key="index"
                              :class="{ active: selectedOption7 === n }"
                              class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                            >
                              <input
                                :value="n"
                                v-model="selectedOption7"
                                @change="updateChartData7(index + 1)"
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
      console.log(this.series[0].data[0],this.series[0].data[1],this.series[0].data[2],this.series[0].data[3],this.series[0].data[4],this.series[0].data[5],this.series[0].data[6]);
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
    updateChartData5(index) {
      this.selectedOption5 = index;
      this.series[0].data[4] = index;
    },
    updateChartData6(index) {
      this.selectedOption6 = index;
      this.series[0].data[5] = index;
    },
    updateChartData7(index) {
      this.selectedOption7 = index;
      this.series[0].data[6] = index;
    },
  },
  data: function () {
    return {
      selectedOption: 5,
      selectedOption2: 3,
      selectedOption3: 5,
      selectedOption4: 4,
      selectedOption5: 5,
      selectedOption6: 5,
      selectedOption7: 5,
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
          "تعداد خریداران مهم",
            "وجود جایگزین برای تولیدات صنعت",
            "هزینه تغییر کاربری برای خریداران",
            "تهدید ترکیب بالادستی خریداران",
            "کمک به کیفیت و خدمات محصولات خریداران",
            "مجموع هزینه های خریداران که توسط صنعت تامین می شود",
            "سودآوری خریداران",
          ],
          labels: {
            show: true,
            style: {
              colors: [
                "#000000",
                "#000000",
                "#000000",
                "#000000",
                "#000000",
                "#000000",
                "#000000",
              ],
            },
          },
        },
      },
      series: [
        {
          name: "Vue Chart",
          data: [5, 3, 5, 4, 5,5,5],
        },
      ],
    };
  },
};
</script>

<style>
</style>