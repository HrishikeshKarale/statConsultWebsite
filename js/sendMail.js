/* eslint-disable @typescript-eslint/no-var-requires */
// require('dotenv').config();
const nodemailer = require('nodemailer')
// const sender = process.env.SENDER_EMAIL;
// const password = process.env.SENDER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: $config.senderID,
    pass: $config.senderPassword
  }
})

const sendMail = async (to, subject, content, cc = null, attachments = null, func = function (error) {
  if (error) {
    console.error('ERROR: ', error)
  }
}) => {
  console.log(sender, password)
  await transporter.sendMail({
    from: sender,
    to: to.length > 1 ? to.join(', ') : to,
    cc,
    attachments,
    subject,
    text: content.type === 'text' ? content.value : '',
    html: content.type === 'html' ? content.value : ''
  }, func)
}

module.exports = sendMail
