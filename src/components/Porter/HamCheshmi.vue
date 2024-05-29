<template>
  <main class="my-5">
    <aos-vue>
      <section class="p-4">
        <div data-aos="fade-up" class="mb-4 rounded-8vw bg-info2 col-lg-9 mr-auto pb-4">
          <h2 class="text-center fw-bold py-4">ﺟﺬﺍﺑﯿﺖ چشم ﻭ ﻫم چشمی ﺑﯿﻦ ﺭﻗﺒﺎ</h2>
          <div class="d-flex mx-0 align-items-center p-4">
            <form class="shadow col-7 flex-grow-1 flex-shrink-0 border-info border border-2 rounded-8vw p-4 bg-white">
              <div class="shadow rounded-8vw p-4 bg-white">
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                >1-ﺗﻌﺪﺍﺩ ﺭﻗﺒﺎی ﻫﻢ ﺳﻄﺢ را چطور ارزیابی می کنید؟</label
              >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">بزرگ</p>
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
                      <p class="mb-0 fw-bold text-success">کوچک</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >2- ﺭﺷﺪ ﻧﺴﺒی ﺻﻨﻌﺖ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">آهسته</p>
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
                      <p class="mb-0 fw-bold text-success">سریع</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >3-ﻫﺰﯾﻨﻪ ﺛﺎﺑﺖ ﯾﺎﺍﻧﺒﺎﺭ کﺮﺩﻥ را چطور ارزیابی
                می کنید؟</label
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
                  >4-ﻣﺸﺨﺼﺎﺕ ﻣﺤﺼﻮﻝ یا ﺗﻨﻮﻉ ﻣﺤﺼﻮﻝ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">عمومی</p>
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
                      <p class="mb-0 fw-bold text-success">تخصصی</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >5-ﺍﻓﺰﺍﯾﺶ ﻇﺮﻓﯿﺖ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                    <div class="d-flex align-items-end justify-content-between gap-4 fs-1-2vw mt-3">
                      <p class="mb-0 fw-bold text-danger">تغییرات زیاد</p>
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
                      <p class="mb-0 fw-bold text-success">تغییرات کم</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >6-تنوع رقبا را چطور ارزیابی می کنید؟</label
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
                      <p class="mb-0 fw-bold text-success">پایین</p>
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
          <button class="btn btn-success mx-auto d-block fw-bold">ذخیره</button>
        </div>
      </section>
    </aos-vue>
  </main>
</template>
  

<script>
export default {
  data: function () {
    return {
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
          "تعداد رقبای هم سطح",
            "رشد نسبی صنعت",
            "هزینه ثابت یا انبار کردن",
            "مشخصات محصول",
            "افزایش ظرفیت",
            "تنوع رقبا",
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
              ],
            },
          },
        },
      },
      series: [
        {
          name: "Vue Chart",
          data: [5, 3, 5, 4, 5,5],
        },
      ],
    };
  },
};
</script>

<style>
</style>