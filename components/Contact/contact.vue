<template>
  <section
    class="mt-30 w-full relative select-none bg-gray-dark-4 pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20"
    :id="MENULINKS[4].ref"
  >
    <div>
      <Toaster />
    </div>
    <div class="section-container flex flex-col justify-center">
      <div class="flex flex-col work-wrapper">
        <div class="flex flex-col">
          <p class="uppercase tracking-widest text-gray-light-1 seq">CONTACT</p>
          <h1 class="text-6xl mt-2 font-medium text-gradient w-fit seq">
            Contact
          </h1>
        </div>
        <h2 class="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
          Get In Touch.
        </h2>
      </div>

      <form class="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem]">
        <div :bottom="{ distance: '4rem' }">
          <div class="relative">
            <input
              type="text"
              id="name"
              class="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5 active:bg-gray-dark-5"
              :value="formData.name"
              @input="handleChange"
              required
            />
            <label
              for="name"
              class="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
            >
              Name
            </label>
          </div>

          <div class="relative mt-14">
            <input
              type="text"
              id="email"
              class="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5 active:bg-gray-dark-5"
              :value="formData.email"
              @input="handleChange"
              required
            />
            <label
              for="email"
              class="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
            >
              Email
            </label>
          </div>

          <div class="relative mt-14">
            <textarea
              id="message"
              class="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5 active:bg-gray-dark-5"
              :value="formData.message"
              @input="handleChange"
              required
            />
            <label
              for="message"
              class="absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all"
            >
              Message
            </label>
          </div>
        </div>

        <div v-if="mailerResponse !== 'not initiated'">
          <div v-if="mailerResponse === 'success'">
            <div class="hidden">{{ success() }}</div>
          </div>
          <div v-else>
            <div class="hidden">{{ error() }}</div>
          </div>
        </div>
      </form>
      <div class="mt-9 mx-auto link">
        <button
          class="button"
          ref="buttonEl"
          :disabled="
            formData.name === '' ||
            formData.email === '' ||
            formData.message === ''
          "
          @click="handleSubmit"
        >
          <span class="default">Send -&gt;</span>
          <span class="success">
            <svg viewBox="0 0 16 16">
              <polyline points="3.75 9 7 12 13 5"></polyline>
            </svg>
            Sent
          </span>
          <svg class="trails" viewBox="0 0 33 64">
            <path
              d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"
            ></path>
            <path
              d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"
            ></path>
          </svg>
          <div class="plane">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import  {ref, reactive, onMounted } from "vue";
import { MENULINKS } from "../../constants/constants";
// import toast, { Toaster } from "react-hot-toast";
// import Fade from "react-reveal/Fade";
import mail from "./mailer";
import gsap from "gsap";


export default {
  data() {
    return {
      MENULINKS,
    };
  },
  setup() {
    const initialState = { name: "", email: "", message: "" };
    const formData = reactive(initialState);
    const mailerResponse = ref("not initiated");
    const isSending = ref(false);
    const buttonEl = ref(null);

    const handleChange = ({ target }) => {
      const { id, value } = target;
      value.length === 0 ? (isSending.value = false) : (isSending.value = true);
      formData[id] =
        value.trim() !== formData[id] ? value : value;
    };

    const emptyForm = () => {
      Object.assign(formData, initialState);
    };

    // const success = () => {
    //   toast.success("Message sent successfully", {
    //     id: "success",
    //     style: {
    //       borderRadius: "10px",
    //       background: "#333",
    //       color: "#fff",
    //     },
    //   });
    // };

    // const error = () => {
    //   toast.error("Error sending your message", {
    //     id: "error",
    //     style: {
    //       borderRadius: "10px",
    //       background: "#333",
    //       color: "#fff",
    //     },
    //   });
    // };

    const handleSubmit = (e) => {
      e.preventDefault();

      const { name, email, message } = formData;

      if (name === "" || email === "" || message === "") {
        empty();
        return (mailerResponse.value = "empty");
      }

      isSending.value = true;
      mail({ name, email, message })
        .then((res) => {
          if (res.status === 200) {
            mailerResponse.value = "success";
            emptyForm();
          } else {
            mailerResponse.value = "error";
          }
        })
        .catch((err) => {
          mailerResponse.value = "error";
          console.error(err);
        });
    };

    onMounted(() => {
      setTimeout(() => {
        mailerResponse.value = "not initiated";
      }, 10000);
    });

    onMounted(() => {
      buttonEl.value.addEventListener("click", (e) => {
        if (!buttonEl.value.classList.contains("active")) {
          buttonEl.value.classList.add("active");

          gsap.to(buttonEl.value, {
            keyframes: [
              // (... GSAP animation code ...)
            ],
          });

          gsap.to(buttonEl.value, {
            keyframes: [
              // (... GSAP animation code ...)
            ],
          });
        }
      });
    });

    return {
      formData,
      mailerResponse,
      isSending,
      handleChange,
      handleSubmit,
      buttonEl,
    };
  },
};
</script>

<style scoped>
@import url(./contact.scss);
</style>
