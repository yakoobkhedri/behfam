<template>
  <main class="my-5">
    <aos-vue>
      <section>
        <div data-aos="fade-up" class="max-w-96 mx-auto mb-4 rounded-8vw p-4 bg-info2">
          <h2 class="text-center fw-bold py-4"> ﺟﺬﺍﺑﯿﺖ ﻗﺪﺭﺕ ﺗﺄﻣﯿﻦ کنندگاﻥ (تامین کنندگان خدمات)</h2>
          <div class="d-flex align-items-center border-info border border-2 rounded-8vw p-4 bg-white">
            <form class="rounded-8vw p-4 shadow flex-grow-1 flex-shrink-0">
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                >1-ﺗﻌﺪﺍﺩ ﻋﺮﺿﻪ کﻨﻨﺪﻩﻫﺎی ﻣﻬﻢ را چطور ارزیابی می کنید؟</label
              >
                <div class="mt-3">
                    <div class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info">
                        <p class="mb-0">غیرجذاب</p>
                      <p class="mb-0">غیرجذاب متوسط</p>
                      <p class="mb-0">بی تفاوت</p>
                      <p class="mb-0">جذاب متوسط</p>
                      <p class="mb-0">جذاب</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3">
                      <p class="mb-0">کم</p>
                      <div class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox">
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input checked type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         1
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         2
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         3
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         4
                       </div>
                       <div class="position-relative active border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         5
                       </div>
                      </div>
                      <p class="mb-0">زیاد</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >2- ﻭﺟﻮﺩ ﺟﺎﯾگﺰﯾﻦ ﺑﺮﺍی ﻣﺤﺼﻮﻻﺕ ﻋﺮﺿﻪ کﻨﻨﺪﻩﻫﺎ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                     <div class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info">
                        <p class="mb-0">غیرجذاب</p>
                      <p class="mb-0">غیرجذاب متوسط</p>
                      <p class="mb-0">بی تفاوت</p>
                      <p class="mb-0">جذاب متوسط</p>
                      <p class="mb-0">جذاب</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3">
                      <p class="mb-0">پایین</p>
                      <div class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox">
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input checked type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         1
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         2
                       </div>
                       <div class="position-relative active border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         3
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         4
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         5
                       </div>
                      </div>
                      <p class="mb-0">بالا</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >3-ﺗﻨﻮﻉ ﯾﺎ ﻫﺰﯾﻨﻪ ﺗﻐﯿﯿﺮ کﺎﺭﺑﺮی ﺗﻮﻟﯿﺪﺍﺕ ﻋﺮﺿﻪ کﻨﻨﺪﻫﺎ را چطور ارزیابی
                می کنید؟</label
                >
                <div class="mt-3">
                     <div class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info">
                        <p class="mb-0">غیرجذاب</p>
                      <p class="mb-0">غیرجذاب متوسط</p>
                      <p class="mb-0">بی تفاوت</p>
                      <p class="mb-0">جذاب متوسط</p>
                      <p class="mb-0">جذاب</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3">
                      <p class="mb-0">بالا</p>
                      <div class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox">
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input checked type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         1
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         2
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         3
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         4
                       </div>
                       <div class="position-relative active border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         5
                       </div>
                      </div>
                      <p class="mb-0">پایین</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >4-ﺗﻬﺪﯾﺪ ﻋﺮﺿﻪ کﻨﻨﺪﻩﻫﺎ ﺑﻪ ﺗﺮکﯿﺐ پاﯾﯿﻦ ﺩﺳﺘی را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                     <div class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info">
                        <p class="mb-0">غیرجذاب</p>
                      <p class="mb-0">غیرجذاب متوسط</p>
                      <p class="mb-0">بی تفاوت</p>
                      <p class="mb-0">جذاب متوسط</p>
                      <p class="mb-0">جذاب</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3">
                      <p class="mb-0">بالا</p>
                      <div class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox">
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input checked type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         1
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         2
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         3
                       </div>
                       <div class="position-relative active border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         4
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         5
                       </div>
                      </div>
                      <p class="mb-0">پایین</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >5-ﺳﻬﻢﻋﺮﺿﻪ کﻨﻨﺪﻩﻫﺎ ﺩﺭ کﯿﻔﯿﺖ ﯾﺎ ﺧﺪﻣﺖ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                     <div class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info">
                      <p class="mb-0">غیرجذاب</p>
                      <p class="mb-0">غیرجذاب متوسط</p>
                      <p class="mb-0">بی تفاوت</p>
                      <p class="mb-0">جذاب متوسط</p>
                      <p class="mb-0">جذاب</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3">
                      <p class="mb-0">بالا</p>
                      <div class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox">
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input checked type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         1
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         2
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         3
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         4
                       </div>
                       <div class="position-relative border active rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         5
                       </div>
                      </div>
                      <p class="mb-0">پایین</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >6-ﺳﻬﻢ ﻋﺮﺿﻪ کﻨﻨﺪﻩﻫﺎ ﺩﺭ کﻞ ﻫﺰﯾﻨﻪ ﺻﻨﻌﺖ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                     <div class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info">
                        <p class="mb-0">غیرجذاب</p>
                      <p class="mb-0">غیرجذاب متوسط</p>
                      <p class="mb-0">بی تفاوت</p>
                      <p class="mb-0">جذاب متوسط</p>
                      <p class="mb-0">جذاب</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3">
                      <p class="mb-0">زیاد</p>
                      <div class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox">
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input checked type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         1
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         2
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         3
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         4
                       </div>
                       <div class="position-relative border active rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         5
                       </div>
                      </div>
                      <p class="mb-0">کم</p>
                    </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="fs-1-2vw text-dark fw-bold"
                  >7-ﺍﻫﻤﯿﺖ ﺻﻨﻌﺖ ﺩﺭ کﺴﺐ ﺳﻮﺩ ﻋﺮﺿﻪ کﻨﻨﺪﻩﻫﺎ را چطور ارزیابی می کنید؟</label
                >
                <div class="mt-3">
                     <div class="d-flex align-items-center justify-content-between border-b-info-3 radioLabel pb-3 text-info">
                        <p class="mb-0">غیرجذاب</p>
                      <p class="mb-0">غیرجذاب متوسط</p>
                      <p class="mb-0">بی تفاوت</p>
                      <p class="mb-0">جذاب متوسط</p>
                      <p class="mb-0">جذاب</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-5 fs-1-2vw mt-3">
                      <p class="mb-0">کوچک</p>
                      <div class="d-flex align-items-center justify-content-between gap-1 border rounded-8vw border-dark p-2 flex-grow-1 inputBox">
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input checked type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         1
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         2
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         3
                       </div>
                       <div class="position-relative border rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         4
                       </div>
                       <div class="position-relative border active rounded-1 border-dark bg-secondary w-2vw h-2vw d-flex align-items-center justify-content-center"> 
                        <input type="radio" name="radio" class="position-absolute opacity-none top-0 end-0 bottom-0 start-0 w-100 h-100 cursor-pointer">
                         5
                       </div>
                      </div>
                      <p class="mb-0">بزرگ</p>
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
          "تعداد عرضه کننده های مهم",
            "وجود جایگزین برای محصولات عرضه کننده ها",
            "تنوع یا هزینه تغییر کاربری تولیدات عرضه کننده ها",
            "تهدید عرضه کننده ها به ترکیب پایین دستی",
            "سهم عرضه کننده ها در کیفیت یا خدمت",
            "سهم عرضه کننده ها در کل هزینه صنعت",
            "اهمیت صنعت در کسب سود عرضه کننده ها",
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