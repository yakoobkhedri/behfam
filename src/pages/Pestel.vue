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
          <div class="container p-5">
            <h2 class="text-center fw-bold border-bottom py-4">
              تحلیل تازه واردین
            </h2>
            <div class="table-responsive fs-1vw fw-bold">
              <div class="rounded-8vw overflow-hidden border">
                <div
                  class="row align-items-stretch mx-0 text-center bg-info text-white"
                >
                  <div class="col-1 th">ردیف</div>
                  <div class="col-1 th">اقتصادی بودن اندازه</div>
                  <div class="col-1 th">تنوع محصول</div>
                  <div class="col-1 th">معروفیت نام تجاری</div>
                  <div class="col-1 th">هزینه تغییر کاربری</div>
                  <div class="col-1 th">دسترسی به مجاری توزیع</div>
                  <div class="col-1 th">نیاز به سرمایه</div>
                  <div class="col-1 th">دسترسی به آخرین تکنولوژی</div>
                  <div class="col-1 th">دسترسی به مواد خام</div>
                  <div class="col-1 th">حمایت دولت</div>
                  <div class="col-1 th">اثر تجربه و یادگیری</div>
                  <div class="col-1 th">عملیات</div>
                </div>
                <div
                  class="row align-items-stretch mx-0 text-center bg-secondary border-bottom"
                >
                  <div class="col-1 th2">#</div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      @click="toggleModal"
                      class="border border-info text-info rounded-8vw py-2 px-3 cursor-pointer"
                    >
                      انتخاب کنید
                    </div>
                  </div>
                  <div class="col-1 th2">
                    <div
                      class="d-flex align-items-center justify-content-center gap-8vw w-100"
                    >
                      <a class="cursor-pointer w-2vw h-2vw">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="currentColor"
                          class="bi bi-floppy2-fill text-success w-2vw h-2vw"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12 2h-2v3h2z" />
                          <path
                            d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0zM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1zM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1"
                          />
                        </svg>
                      </a>
                      <a class="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="currentColor"
                          class="bi bi-arrow-counterclockwise text-danger w-2vw h-2vw"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
                          />
                          <path
                            d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="row align-items-stretch mx-0 text-center bg-white border-bottom"
                >
                  <div class="col-1 th2">1</div>
                  <div class="col-1 th2">غیرجذاب</div>
                  <div class="col-1 th2">غیرجذاب متوسط</div>
                  <div class="col-1 th2">بی تفاوت</div>
                  <div class="col-1 th2">جذاب متوسط</div>
                  <div class="col-1 th2">غیرجذاب</div>
                  <div class="col-1 th2">بی تفاوت</div>
                  <div class="col-1 th2">غیرجذاب متوسط</div>
                  <div class="col-1 th2">جذاب</div>
                  <div class="col-1 th2">جذاب متوسط</div>
                  <div class="col-1 th2">جذاب</div>
                  <div class="col-1 th2">
                    <div
                      class="d-flex align-items-center justify-content-center gap-8vw w-100"
                    >
                      <a
                        class="cursor-pointer w-2vw h-2vw rounded-circle d-flex align-items-center justify-content-center bg-danger text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          class="bi bi-trash-fill w-1vw h-1vw"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                          />
                        </svg>
                      </a>
                      <a
                        class="cursor-pointer w-2vw h-2vw rounded-circle d-flex align-items-center justify-content-center bg-warning text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          class="bi bi-pencil-fill w-1vw h-1vw"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"
                          />
                        </svg>
                      </a>
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