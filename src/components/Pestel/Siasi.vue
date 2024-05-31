<template>
  <!-- modal -->
  <Modal @closeModal="toggleModal" :modalActive="modalActive">
    <div class="p-4">
      <h2 class="text-dark fs-15vw font-bold -mt-33">افزودن معیار جدید</h2>
      <div class="mt-4">
        <input v-model="MeayarName"
          placeholder="نام معیار"
          class="outline-none rounded-8vw text-end border border-dark w-100 p-3 fs-1vw fw-bold bg-white"
        />
      </div>
      <!--  -->
      <div class="d-flex align-items-center justify-content-center mt-4 gap-4">
        <input @click="addMeayar"
          type="submit"
          value="تایید"
          class="w-8vw h-3vw bg-info d-flex align-items-center justify-content-center border-0 rounded-8 text-white fs-15vw fw-bold"
        />
        <input @click="modalActive=!modalActive"
          type="submit"
          value="لغو"
          class="w-8vw h-3vw bg-danger d-flex align-items-center justify-content-center border-0 rounded-8 text-white fs-15vw fw-bold"
        />
        <div class="position-relative">
          <ul v-show="openDropDown" class="position-absolute transition top-2 bg-white rounded-8vw list-unstyled p-0 py-2 m-0 fs-15vw w-9">
            <li class="px-3 cursor-pointer hover1">ویرایش</li>
            <li class="px-3 cursor-pointer hover1">حذف</li>
          </ul>
          <svg @click="toggleDropDown"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-three-dots cursor-pointer w-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
            />
          </svg>
        </div>
      </div>
    </div>
  </Modal>

  <main>
    <aos-vue>
      <section>
        <div class="container p-4">
          <h2 class="text-center fw-bold py-4">
            ﺟﺪﻭﻝ ﺍﺭﺯﻳﺎﺑﻲ ﻣﻮﺍﺭﺩ ﻓﺮﺻﺖ ﻭ ﺗﻬﺪﻳﺪ ﻫﻠﺪﻳﻨگ/ﺷﺮکﺖ
          </h2>
          <h4 class="text-center fw-bold text-info">متغیر سیاسی</h4>
          <div
            data-aos="fade-up"
            class="rounded-8vw text-center fs-1-1vw border border-dark shadow overflow-hidden"
          >
            <div
              class="bg-info text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th">ردیف</div>
              <div class="col-1 th">شاخص ها</div>
              <div class="col-2 th px-0 pb-0">
                <div class="w-100">
                  <p class="mb-0 position-relative top-1vw">
                    تبیین معیارهای اهمیت هر شاخص
                  </p>
                  <div class="position-relative">
                    <span
                      title="افزودن معیار"
                      @click="toggleModal"
                      class="bg-warning activeEffect fs-1-4vw rounded-circle -end-1 position-absolute fw-bold w-10 h-10 d-flex align-items-center justify-content-center cursor-pointer"
                      >+</span
                    >
                    <div
                      class="row flex-nowrap overflow-x-auto mx-0 border-top border-white mt-5"
                    >
                      <div
                        v-for="(meayar, index) in meayars"
                        :key="index"
                        class="col-4 border-end border-white"
                      >
                        معیار {{ index + 1 }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th">ضریب اهمیت</div>
              <div class="col-1 th">نسبت وزنی</div>
              <div class="col-3 th px-0 pb-0">
                <div class="w-100 h-100">
                  <p class="mb-0 position-relative top-1vw">
                    تبیین فرصت ها و تهدیدات
                  </p>
                  <div class="row mx-0 border-top border-white mt-5 h-100">
                    <div class="col-6 border-end border-white">فرصت ها</div>
                    <div class="col-6">تهدیدها</div>
                  </div>
                </div>
              </div>
              <div class="col-1 th px-0 pb-0">
                <div class="w-100 h-100">
                  <p class="mb-0 px-2">میزان جذابیت (تهدید یا فرصت)</p>
                  <div class="row mx-0 border-top border-white mt-3 h-100">
                    <div class="col-6 border-end border-white">نمره</div>
                    <div class="col-6">امتیاز</div>
                  </div>
                </div>
              </div>
              <div class="col-1 th px-0 pb-0">
                <div class="w-100 h-100">
                  <p class="mb-0 px-2">نحوﻩ پاﺳﺨگﻮﻳﻲ ﺩﺭ ﻭﺿﻊ موجود</p>
                  <div class="row mx-0 border-top border-white mt-3 h-100">
                    <div class="col-6 border-end border-white">نمره</div>
                    <div class="col-6">امتیاز</div>
                  </div>
                </div>
              </div>
              <div class="col-1 th px-0 pb-0">
                <div class="w-100 h-100">
                  <p class="mb-0 px-2">نحوﻩ پاﺳﺨگﻮﻳﻲ ﺩﺭ ﻭﺿﻊ ﺁﺗﻲ</p>
                  <div class="row mx-0 border-top border-white mt-3 h-100">
                    <div class="col-6 border-end border-white">نمره</div>
                    <div class="col-6">امتیاز</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th2 bg-info">1</div>
              <div class="col-1 th2 bg-info border-end border-white">
                رابطه ایران با کشورهای هدف
              </div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div
                    class="row flex-nowrap meayar overflow-x-auto mx-0 h-100"
                  >
                    <div
                      v-for="(meayar, index) in meayars"
                      :key="index"
                      class="col-4 border-end border-dark"
                    >
                      <textarea
                        :placeholder="(meayar)"
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                    <div class="col-6">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th2 bg-info">2</div>
              <div class="col-1 th2 bg-info border-end border-white">
                شرایط سیاسی کشورها
              </div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div
                    class="row flex-nowrap meayar overflow-x-auto mx-0 h-100"
                  >
                    <div
                      v-for="(meayar, index) in meayars"
                      :key="index"
                      class="col-4 border-end border-dark"
                    >
                      <textarea
                        :placeholder="(meayar)"
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                    <div class="col-6">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th2 bg-info">3</div>
              <div class="col-1 th2 bg-info border-end border-white">تحریم</div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div
                    class="row flex-nowrap meayar overflow-x-auto mx-0 h-100"
                  >
                    <div
                      v-for="(meayar, index) in meayars"
                      :key="index"
                      class="col-4 border-end border-dark"
                    >
                      <textarea
                        :placeholder="(meayar)"
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                    <div class="col-6">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th2 bg-info">4</div>
              <div class="col-1 th2 bg-info border-end border-white">
                تغییر و تحولات سیاسی داخلی
              </div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div
                    class="row flex-nowrap meayar overflow-x-auto mx-0 h-100"
                  >
                    <div
                      v-for="(meayar, index) in meayars"
                      :key="index"
                      class="col-4 border-end border-dark"
                    >
                      <textarea
                        :placeholder="(meayar)"
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                    <div class="col-6">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th2 bg-info">5</div>
              <div class="col-1 th2 bg-info border-end border-white">
                سیاست ها و پیمان های منطقه ای و جهانی
              </div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div
                    class="row flex-nowrap meayar overflow-x-auto mx-0 h-100"
                  >
                    <div
                      v-for="(meayar, index) in meayars"
                      :key="index"
                      class="col-4 border-end border-dark"
                    >
                      <textarea
                        :placeholder="(meayar)"
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                    <div class="col-6">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th2 bg-info">6</div>
              <div class="col-1 th2 bg-info border-end border-white">
                سیاست های صادرات
              </div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div
                    class="row flex-nowrap meayar overflow-x-auto mx-0 h-100"
                  >
                    <div
                      v-for="(meayar, index) in meayars"
                      :key="index"
                      class="col-4 border-end border-dark"
                    >
                      <textarea
                        :placeholder="(meayar)"
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                    <div class="col-6">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white text-dark fw-bold row mx-0 border-bottom border-dark"
            >
              <div class="col-1 th2 bg-info">7</div>
              <div class="col-1 th2 bg-info border-end border-white">
                سیاست های واردات
              </div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div
                    class="row flex-nowrap meayar overflow-x-auto mx-0 h-100"
                  >
                    <div
                      v-for="(meayar, index) in meayars"
                      :key="index"
                      class="col-4 border-end border-dark"
                    >
                      <textarea
                        :placeholder="(meayar)"
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-1 th2 py-0">
                <input class="w-100 h-100 border-0 outline-none" />
              </div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                    <div class="col-6">
                      <textarea
                        class="w-100 outline-none resize-none border-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                    <div class="col-6">
                      <input class="w-100 h-100 border-0 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white text-dark fw-bold row mx-0">
              <div
                class="col-2 th2 bg-info border-end border-end-0 border-dark"
              >
                مجموع
              </div>
              <div class="col-2 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-4 border-end border-dark bg-info"></div>
                    <div class="col-4 border-end border-dark bg-info"></div>
                    <div class="col-4 bg-info"></div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 py-0">0</div>
              <div class="col-1 th2 py-0">0.00</div>
              <div class="col-3 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark bg-info"></div>
                    <div class="col-6 bg-info"></div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0 border-end border-dark">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark bg-info">
                      مجموع امتیازها
                    </div>
                    <div class="col-6 th">0.00</div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0 border-end border-dark">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark bg-info">
                      مجموع امتیازها
                    </div>
                    <div class="col-6 th">0.00</div>
                  </div>
                </div>
              </div>
              <div class="col-1 th2 p-0">
                <div class="w-100 h-100">
                  <div class="row mx-0 h-100">
                    <div class="col-6 border-end border-dark bg-info">
                      مجموع امتیازها
                    </div>
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
const meayars = ref(['معیار اول', 'معیار دوم', 'معیار سوم']);
const MeayarName = ref('');
const openDropDown = ref(false)

function addMeayar() {
  if (MeayarName.value) {
    modalActive.value = false;
    meayars.value.push(MeayarName.value);
  }
}
const toggleDropDown = () => {
  openDropDown.value = !openDropDown.value;
};
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style>
</style>