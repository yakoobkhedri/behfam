<template>
  <main class="my-5">
    <aos-vue>
      <section class="p-4">
        <div data-aos="fade-up" class="mb-4 rounded-8vw bg-info2 col-lg-9 mr-auto pb-4">
          <h2 class="text-center fw-bold py-4">تحلیل تازه واردین</h2>
          <div class="d-flex mx-0 align-items-center p-4">
            <form class="shadow col-7 flex-grow-1 flex-shrink-0 border-info border border-2 rounded-8vw p-4 bg-white">
              <div class="shadow rounded-8vw p-4 bg-white">
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >1-ﺍﻗﺘﺼﺎﺩی ﺑﻮﺩﻥ ﺍﻧﺪﺍﺯﻩ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">کوچک</p>
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
                      <p class="mb-0 fw-bold text-success">بزرگ</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >2-ﺗﻨﻮﻉ ﻣﺤﺼﻮﻝ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">کم</p>
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
                      <p class="mb-0 fw-bold text-success">زیاد</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >3-ﻣﻌﺮﻭﻓﯿﺖ ﻧﺎﻡ ﺗﺠﺎﺭی را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
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
                  >4-ﻫﺰﯾﻨﻪ ﺗﻐﯿﯿﺮ کاﺭﺑﺮی را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
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
                      <p class="mb-0 fw-bold text-success">بالا</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >5-ﺩﺳﺘﺮسی ﺑﻪ ﻣﺠﺎﺭی ﺗﻮﺯﯾﻊ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">فراوان</p>
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
                      <p class="mb-0 fw-bold text-success">محدود</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >6-ﻧﯿﺎﺯ ﺑﻪ ﺳﺮﻣﺎﯾﻪ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
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
                      <p class="mb-0 fw-bold text-success">بالا</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >7-ﺩﺳﺘﺮسی ﺑﻪ ﺁﺧﺮﯾﻦ ﺗکنوﻟﻮژی را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">فراوان</p>
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
                      <p class="mb-0 fw-bold text-success">محدود</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >8-ﺩﺳﺘﺮسی ﺑﻪ ﻣﻮﺍﺩ ﺧﺎﻡ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">فراوان</p>
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
                            :class="{ active: selectedOption8 === n }"
                            class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                          >
                            <input
                              :value="n"
                              v-model="selectedOption8"
                              @change="updateChartData8(index + 1)"
                              type="radio"
                              name="radio"
                              class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                            />
                            {{ n }}
                          </div>
                        </div>
                      </div>
                      <p class="mb-0 fw-bold text-success">محدود</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >9-ﺣﻤﺎﯾﺖ ﺩﻭﻟﺖ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
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
                            :class="{ active: selectedOption9 === n }"
                            class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                          >
                            <input
                              :value="n"
                              v-model="selectedOption9"
                              @change="updateChartData9(index + 1)"
                              type="radio"
                              name="radio"
                              class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                            />
                            {{ n }}
                          </div>
                        </div>
                      </div>
                      <p class="mb-0 fw-bold text-success">کمیاب</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >10-ﺍﺛﺮ ﺗﺠﺮﺑﻪ ﻭ ﯾﺎﺩگیری را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">اهمیت کم</p>
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
                            :class="{ active: selectedOption10 === n }"
                            class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"
                          >
                            <input
                              :value="n"
                              v-model="selectedOption10"
                              @change="updateChartData10(index + 1)"
                              type="radio"
                              name="radio"
                              class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer"
                            />
                            {{ n }}
                          </div>
                        </div>
                      </div>
                      <p class="mb-0 fw-bold text-success">اهمیت زیاد</p>
                    </div>
                </div>
              </div>
              </div>
            </form>
            <div class="mt-5 flex-grow-1 flex-shrink-0">
              <apexchart
                class="w-40 h-40vw"
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
      console.log(this.series[0].data[0],this.series[0].data[1],this.series[0].data[2],this.series[0].data[3],this.series[0].data[4],this.series[0].data[5],this.series[0].data[6],this.series[0].data[7],this.series[0].data[8],this.series[0].data[9]);
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
    updateChartData8(index) {
      this.selectedOption8 = index;
      this.series[0].data[7] = index;
    },
    updateChartData9(index) {
      this.selectedOption9 = index;
      this.series[0].data[8] = index;
    },
    updateChartData10(index) {
      this.selectedOption10 = index;
      this.series[0].data[9] = index;
    },
  },
  data: function () {
    return {
      selectedOption: 5,
      selectedOption2: 3,
      selectedOption3: 5,
      selectedOption4: 4,
      selectedOption5: 5,
      selectedOption6: 3,
      selectedOption7: 2,
      selectedOption8: 3,
      selectedOption9: 4,
      selectedOption10: 4,
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
            "ﺍﻗﺘﺼﺎﺩی ﺑﻮﺩﻥ ﺍﻧﺪﺍﺯﻩ",
            "تنوع محصول",
            "معروفیت نام تجاری",
            "هزینه تغییر کاربری",
            "ﺩﺳﺘﺮﺳی ﺑﻪ ﻣﺠﺎﺭی ﺗﻮﺯﯾﻊ",
            "ﻧﯿﺎﺯ ﺑﻪ ﺳﺮﻣﺎﯾﻪ",
            "ﺩﺳﺘﺮﺳی ﺑﻪﺁﺧﺮﯾﻦ ﺗکﻨﻮﻟﻮژی",
            "ﺩﺳﺘﺮﺳی ﺑﻪ ﻣﻮﺍﺩ ﺧﺎﻡ",
            "ﺣﻤﺎﯾﺖﺩﻭﻟﺖ",
            "ﺍﺛﺮ ﺗﺠﺮﺑﻪ ﻭ ﯾﺎﺩگﯿﺮی",
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
          data: [5, 3, 5, 4, 5, 3, 2, 3, 4, 4],
        },
      ],
    };
  },
};
</script>

<style>
</style>