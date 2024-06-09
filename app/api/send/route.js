import { Resend } from "resend";

export async function GET(req) {
  try {
    const info = await req.json();
    console.log(info);
    const resend = new Resend("re_cg7oddd4_M9V5HDPKZrRRrNAPTWx5jH3g");

    try {
      const { data: resendRes } = await resend.emails.send({
        from: "miremon5222@gmail.com",
        to: "dmekbal143@gmail.com",
        subject: "Your order has been placed successfully",
        html: "<p>Congrats on placing your order successfully</p>",
      });

      console.log(resendRes, "dmekbal143@gmail.com");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    return Response.json({ hello: "Hello world" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
