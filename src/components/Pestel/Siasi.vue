<template>
    <!-- modal -->
    <Modal @closeModal="toggleModal" :modalActive="modalActive">
    <div class="p-4">
      <h2 class="text-dark fs-15vw font-bold -mt-33">اقتصادی بودن اندازه</h2>
      <div class="mt-4">
        <input
          placeholder="جستجو..."
          class="outline-none rounded-8vw border border-dark w-100 p-2 fs-1vw fw-bold bg-white"
        />
        <div class="table-responsive fs-1vw fw-bold mt-3">
          <div class="rounded-8vw overflow-hidden border border-dark">
            <div
              class="row align-items-stretch fs-1-2vw mx-0 text-center bg-info text-white"
            >
              <div class="col-2 th">انتخاب</div>
              <div class="col-2 th">کد</div>
              <div class="col-8 th">عنوان</div>
            </div>
            <div
                  class="row align-items-stretch mx-0 text-center bg-white border-bottom"
                >
                  <div class="col-2 th2"><input type="radio" name="name" class="form-check-input cursor-pointer"></div>
                  <div class="col-2 th2">76</div>
                  <div class="col-8 th2">غیرجذاب</div>
            </div>
            <div
                  class="row align-items-stretch mx-0 text-center bg-white border-bottom"
                >
                  <div class="col-2 th2"><input type="radio" name="name" class="form-check-input cursor-pointer"></div>
                  <div class="col-2 th2">82</div>
                  <div class="col-8 th2">غیرجذاب متوسط</div>
            </div>
            <div
                  class="row align-items-stretch mx-0 text-center bg-white border-bottom"
                >
                  <div class="col-2 th2"><input type="radio" name="name" class="form-check-input cursor-pointer"></div>
                  <div class="col-2 th2">90</div>
                  <div class="col-8 th2">بی تفاوت</div>
            </div>
            <div
                  class="row align-items-stretch mx-0 text-center bg-white border-bottom"
                >
                  <div class="col-2 th2"><input type="radio" name="name" class="form-check-input cursor-pointer"></div>
                  <div class="col-2 th2">39</div>
                  <div class="col-8 th2">جذاب متوسط</div>
            </div>
            <div
                  class="row align-items-stretch mx-0 text-center bg-white border-bottom"
                >
                  <div class="col-2 th2"><input type="radio" name="name" class="form-check-input cursor-pointer"></div>
                  <div class="col-2 th2">54</div>
                  <div class="col-8 th2">جذاب </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="d-flex align-items-center justify-content-center mt-4 gap-4">
        <input
          type="submit"
          value="تایید"
          class="w-8vw h-3vw bg-info d-flex align-items-center justify-content-center border-0 rounded-8 text-white fs-15vw fw-bold"
        />
      </div>
    </div>
  </Modal>

  <main>
      <aos-vue>
       <section>
         <div class="container p-4">
          <h2 class="text-center fw-bold py-4">ﺟﺪﻭﻝ ﺍﺭﺯﻳﺎﺑﻲ ﻣﻮﺍﺭﺩ ﻓﺮﺻﺖ ﻭ ﺗﻬﺪﻳﺪ ﻫﻠﺪﻳﻨگ/ﺷﺮکﺖ</h2>
          <h4 class="text-center fw-bold text-info">متغیر سیاسی</h4>
           <div data-aos="fade-up" class="rounded-8vw text-center fs-1-1vw border shadow overflow-hidden"> 
              <div class="bg-info text-white fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th">ردیف</div>
                <div class="col-1 th">شاخص ها</div>
                <div class="col-2 th px-0 pb-0">
                  <div class="w-100">
                    <p class="mb-0 position-relative top-1vw">تبیین معیارهای اهمیت هر شاخص</p>
                    <div class="row mx-0 border-top border-white mt-5"> 
                      <div class="col-4 border-end border-white">معیار 1</div>
                      <div class="col-4 border-end border-white">معیار 2</div>
                      <div class="col-4">معیار 3</div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th">ضریب اهمیت</div>
                <div class="col-1 th">نسبت وزنی</div>
                <div class="col-3 th px-0 pb-0">
                  <div class="w-100">
                    <p class="mb-0 position-relative top-1vw">تبیین فرصت ها و تهدیدات</p>
                    <div class="row mx-0 border-top border-white mt-5"> 
                      <div class="col-6 border-end border-white">فرصت ها</div>
                      <div class="col-6">تهدیدها</div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th px-0 pb-0">
                  <div class="w-100">
                      <p class="mb-0 px-2">میزان جذابیت (تهدید یا فرصت)</p>
                      <div class="row mx-0 border-top border-white mt-3"> 
                        <div class="col-6 border-end border-white">نمره</div>
                        <div class="col-6">امتیاز</div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th px-0 pb-0">
                  <div class="w-100">
                      <p class="mb-0 px-2">نحوﻩ پاﺳﺨگﻮﻳﻲ ﺩﺭ ﻭﺿﻊ موجود</p>
                      <div class="row mx-0 border-top border-white mt-3"> 
                        <div class="col-6 border-end border-white">نمره</div>
                        <div class="col-6">امتیاز</div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th px-0 pb-0">
                  <div class="w-100">
                      <p class="mb-0 px-2">نحوﻩ پاﺳﺨگﻮﻳﻲ ﺩﺭ ﻭﺿﻊ ﺁﺗﻲ</p>
                      <div class="row mx-0 border-top border-white mt-3"> 
                        <div class="col-6 border-end border-white">نمره</div>
                        <div class="col-6">امتیاز</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th2">1</div>
                <div class="col-1 th2">رابطه ایران با کشورهای هدف</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100">
                    <div class="row mx-0"> 
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-6"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th2">2</div>
                <div class="col-1 th2">شرایط سیاسی کشورها</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100">
                    <div class="row mx-0"> 
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-6"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th2">3</div>
                <div class="col-1 th2">تحریم</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100">
                    <div class="row mx-0"> 
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-6"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th2">4</div>
                <div class="col-1 th2">تغییر و تحولات سیاسی داخلی</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100">
                    <div class="row mx-0"> 
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-6"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th2">5</div>
                <div class="col-1 th2">سیاست ها و پیمان های منطقه ای و جهانی</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100">
                    <div class="row mx-0"> 
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-6"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th2">6</div>
                <div class="col-1 th2">سیاست های صادرات</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100">
                    <div class="row mx-0"> 
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-6"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-1 th2">7</div>
                <div class="col-1 th2">سیاست های واردات</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100">
                    <div class="row mx-0"> 
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-4"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-1 th2 py-0"><input class="w-100 h-100 border-0 outline-none"></div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                      <div class="col-6"><textarea class="w-100 outline-none resize-none border-0"></textarea></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark"><input class="w-100 h-100 border-0 outline-none"></div>
                        <div class="col-6"><input class="w-100 h-100 border-0 outline-none"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-white text-dark fw-bold row mx-0 align-items-cente border-bottom border-dark">
                <div class="col-2 th2">مجموع</div>
                <div class="col-2 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-4 border-end border-dark"></div>
                      <div class="col-4 border-end border-dark"></div>
                      <div class="col-4"></div>
                    </div>
                  </div>
                </div>
                <div class="col-1 th2 py-0">0</div>
                <div class="col-1 th2 py-0">0.00</div>
                <div class="col-3 th2 p-0">
                  <div class="w-100 h-100">
                    <div class="row mx-0 h-100"> 
                      <div class="col-6 border-end border-dark"></div>
                      <div class="col-6"></div>
                    </div>
                 </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark">مجموع امتیازها=</div>
                        <div class="col-6 th">0.00</div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark">مجموع امتیازها=</div>
                        <div class="col-6 th">0.00</div>
                      </div>
                  </div>
                </div>
                <div class="col-1 th2 p-0">
                  <div class="w-100 h-100">
                      <div class="row mx-0 h-100"> 
                        <div class="col-6 border-end border-dark">مجموع امتیازها=</div>
                        <div class="col-6 th">0.00</div>
                      </div>
                  </div>
                </div>
              </div>
           </div>
         </div>
       </section>
      </aos-vue>
  </main>

</template>

<script setup >
import { ref } from "vue";
import Modal from "@/components/Modal/Modal.vue";

const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style>

</style>