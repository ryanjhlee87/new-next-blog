import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: 'Email send failed' }));
  }

  const { from, subject, message } = body;

  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: 'Email sent successfully' }), {
          status: 200,
        })
    )
    .catch(error => {
      console.log(error);
      return new Response(JSON.stringify({ message: 'Email send failed' }), {
        status: 500,
      });
    });
}
