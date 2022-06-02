<template>
  <article class="flex flex-col gap-8">
    <header>
        <h1 class="flex flex-row flex-nowrap items-center gap-4 h-32 px-16 font-medium leading-tight text-5xl m-0 text-gray-800 bg-gradient-to-r from-orange-500 to-orange-200">
        <span class="font-bold">Contact</span>Me
      </h1>

      <p class="text-base font-light leading-relaxed mt-0 mb-4 px-16">
        Visit us or simply send us an email anytime you want. If you have any questions, please feel free to contact us.
      </p>
    </header>

    <section class="flex flex-row flex-nowrap  justify-start gap-16 px-16">
      <!-- <modal title="Contact form"> -->
      <form class="flex flex-col gap-4 w-fit">
        <h4 class="font-medium leading-tight text-2xl text-gray-800">
          Please fill out the form to connect with us.
        </h4>

        <div class="flex flex-col gap-8 text-red">
          <!-- sender name -->
          <div class="relative z-0 w-full group">
            <input
              id="floating_first_name"
              v-model="sender"
              type="text"
              name="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            >

            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <!-- email id -->
          <div class="relative z-0 w-full group">
            <input
              v-model="email"
              type="email"
              name="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            >
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <!-- phone -->
          <div class="relative z-0 w-full group">
            <input
              id="floating_phone"
              v-model="phone"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              name="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            >
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <!-- preffered -->
          <div class="relative z-0 w-full group">
            <label
              class="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2"
            >
              Preffered Way to contact
            </label>
            <div class="flex items-center mb-2">
              <input
                id="red-radio"
                v-model="preffered"
                type="radio"
                value="email"
                name="colored-radio"
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label
                for="red-radio"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="green-radio"
                v-model="preffered"
                type="radio"
                value="phone"
                name="colored-radio"
                class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label
                for="green-radio"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone
              </label>
            </div>
          </div>
          <!-- comment -->
          <div class="relative z-0 w-full group">
            <textarea
              id="floating_company"
              v-model="comment"
              name="floating_company"
              rows="2"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Comment
            </label>
          </div>
        </div>
        <p
          id="helper-text-explanation"
          class="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          We’ll never share your details. Read our
          <a
            href="#"
            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="emailSender()"
        >
          Connect
        </button>
      </form>
      <div class="flex flex-col gap-8 justify-start w-fit">
        <div class="">
          <h4 class="font-medium leading-tight text-2xl m-0 text-gray-800">
            Email
            <!-- <vue-clipboard
								id="emailId"
								copy="hrishikesh.karale@gmail.com"
								category="icon"
							/> -->
          </h4>
          <h5>
            <address>
              <a href="mailto:hrishikesh.karale@gmail.com">
                hrishikesh.karale@gmail.com
              </a>
            </address>
          </h5>
          <small>
            * Feel free to send me an email any time of the day and I should be
            able to respond in a reasonable amount of time.
          </small>
        </div>
        <div class="phone">
          <h4 class="font-medium leading-tight text-2xl m-0 text-gray-800">
            Phone Number
            <!-- <vue-clipboard id="phoneNumber" copy="5855207382" category="icon" /> -->
          </h4>
          <h5>
            <address>
              <a href="tel:585-520-7382"> (585) 520-7382 </a>
            </address>
          </h5>
          <p>Hours: 8am - 4pm (EST), everyday.</p>
          <small>
            * Text messages prefered.
            <br>
            * First time caller(s) are screened using virtual assistan to weed out
            spam calls
          </small>
        </div>
        <div class="address">
          <h4 class="font-medium leading-tight text-2xl m-0 text-gray-800">
            Postal Address
            <!-- <vue-clipboard
								id="address"
								copy="44 Crittenden Way,
											Apartment 2,
											Rochester, NY 14623."
								category="icon"
							/> -->
          </h4>
          <address>
            44 Crittenden Way,
            <br>
            Apartment 2,
            <br>
            Rochester, NY 14623.
          </address>
        </div>
      </div>
      <!-- </modal> -->
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
// import Modal from '~/components/modal.vue'
// import sendMail from "~/js/sendMail"
import axios from 'axios'

export default Vue.extend({
  name: 'Contact',

  // components: { Modal },

  layout: 'masterSlave',

  data () {
    const showForm = false
    const sender = ''
    const email = ''
    const phone = null
    const comment = ''
    const options = ['phone', 'email']
    const subject = 'Contact us [UpStat.com]'
    const preffered = options[1]
    const CONFIG = {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
    return {
      showForm,
      sender,
      email,
      phone,
      comment,
      options,
      preffered,
      subject,
      CONFIG
    }
  },

  methods: {
    async emailSender () {
      await axios.post(
        'https://us-central1-portfolio-website-689b4.cloudfunctions.net/router/api/notification/email',
        {
          to: 'hrishirich619@gmail.com',
          name: this.sender,
          subject: 'Kkiokio.com Contact Form',
    				cc: this.email,
          phoneNumber: this.phone,
          preffered: this.preffered,
          content: this.comment
        }
        // this.CONFIG
      )
        .then((response) => {
          console.log('sendMail successful')
          // EMITTER.emit("alert", {
          // 	type: "success",
          // 	message: "Email sent to Kkiokio(Hrishikesh Karale)",
          // 	description:
          // 		"Please wait wait for a couple of days and Kkiokio will get back to you using your prefered method of communication.",
          // 	dismissable: true,
          // 	timeout: 8
          // });
        })
        .catch((error) => {
          console.error('sendMail FAILED', error)
          // EMITTER.emit("alert", {
          // 	type: "warning",
          // 	message: "Error sending email.",
          // 	description: error.response,
          // 	dismissable: true,
          // 	code: "101.1",
          // 	timeout: 8
          // });
        })

      // await sendMail(
      //   [
      //     this.email
      //   ],
      //     this.subject,
      //   {
      //     type: 'html',
      //     value: `<p>Hi,<p>A contact request has been made by ${this.sender} to contact you.<br />The preferred means of contatct is <b>${this.preffered}</b></p><p><span :class='${this.preffered}=="phone"? "fas fa-check": ""' />Phone: ${this.phone}</p><span :class='${this.preffered}=="email"? "fas fa-check": ""' />email ID: ${this.$config.senderID}<p></p></p><p>message: <q>${this.comment}</q></p>`
      //   },
      //   // [
      //   //   this.$config.senderID
      //   // ]
      // )
      // .then(() => {
      //   console.log("email sent");
      // })
      // .catch(exception => {
      //   console.error('ERROR: ', exception);
      //   console.log("email not send");
      // });
    }
  }
})
</script>
