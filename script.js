const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
const formURL =
  "https://api.hsforms.com/submissions/v3/integration/submit/6057637/f5f766d1-6bc3-42ac-82c2-c9860321057a";

const clearData = function () {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#phone-num").value = "";
  document.querySelector("#email").value = "";
};

const submitForm = function (e) {
  console.log("hello");
  e.preventDefault();
  const data = {
    fields: [
      {
        objectTypeId: "0-1",
        name: "firstname",
        value: document.querySelector("#first-name").value,
      },
      {
        objectTypeId: "0-1",
        name: "lastname",
        value: document.querySelector("#last-name").value,
      },
      {
        objectTypeId: "0-1",
        name: "phone",
        value: document.querySelector("#phone-num").value,
      },
      {
        objectTypeId: "0-1",
        name: "email",
        value: document.querySelector("#email").value,
      },
    ],
    context: {
      hutk: "46148bc3c9b112dc1471fac8684e80d9", //Found this by going to the console and doing a document.cookie for the hubspotutk value
      pageUri: "https://test.test.com",
      // pageName: "",
    },

    // This section is only required when GDPR is enabled within the Portal
    /* legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Example Company to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: "I agree to receive marketing communications from Example Company.",
          },
        ],
      },
    }, */
  };
  console.log(data.context.hutk);

  axios
    .post(formURL, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  clearData();
};

submitBtn.addEventListener("click", submitForm);
