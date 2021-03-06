
import nodemailer from 'nodemailer'

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: 'leones.tcc@gmail.com', 
    pass: 'tccleones',
  },
});


async function enviarEmail(para, assunto, mensagem) {
  const response = await sender.sendMail({
    from: '"Empresa Leones" <mailing.tcc.info@acaonsfatima.org.br>',
    to: para, 
    subject: assunto,
    html: mensagem
  })
  return response;
}


export default enviarEmail;