const nodemailer = require('nodemailer');

const APP_HOST = process.env.APP_HOST || 'http://localhost:3000'

const user = process.env.MAIL_USER
const pass = process.env.MAIL_PASS

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass }
});

module.exports.sendValidateEmail = (targetUser) => {
  transporter.sendMail({
    from: `"PlaceHack" <${user}>`,
    to: targetUser.email,
    subject: 'Welcome to new adventure!',
    html: `
      <h1>Welcome to PlaceHack
        This mail is send in order to confirm that the sign up process was completed it successufully
      </h1>
      <a href='${APP_HOST}/users/${targetUser.validateToken}/validate'>Confirm account</a>
    `
  })
    .then(info => console.log(info))
    .catch(error => console.log(error))
}
