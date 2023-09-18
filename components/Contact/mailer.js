import emailjs from "emailjs-com";

const sendMail = ({ name, email, message }) => {
  return emailjs
    .send(
      process.env.NUXT_ENV_EMAIL_SERVICE_ID,
      process.env.NUXT_ENV_EMAIL_TEMPLATE_ID,
      { name, email, message },
      process.env.NUXT_ENV_EMAIL_USER_ID
    )
    .then((response) => {
      // Handle the response here if needed
      return response;
    })
    .catch((error) => {
      // Handle errors here if needed
      console.error("Error sending email:", error);
      throw error;
    });
};

export default sendMail;
