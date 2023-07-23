const nodemailer = require("nodemailer");
const config = require("config");

// const gmail = require("../mailer.json");

const transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		// user: "thehassenyounsi@gmail.com",
		// pass: "minpamalfyozilzp",
		user: config.get("email"),
		pass: config.get("pass"),
	},
});

function sendConfirmationEmail(userEmail, confirmationLink) {
	const mailOptions = {
		from: gmail.email,
		to: userEmail,
		subject: "Account Confirmation",
		html: `<p>Please click the following link to confirm your account:</p><p><a href="${confirmationLink}">${confirmationLink}</a></p>`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error sending confirmation email:", error);
		} else {
			console.log("Confirmation email sent:", info.response);
		}
	});
}

module.exports = { sendConfirmationEmail };
