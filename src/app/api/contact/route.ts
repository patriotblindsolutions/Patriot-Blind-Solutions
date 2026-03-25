import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY || "missing_key");
    try {
        const body = await req.json();
        const { firstName, lastName, company, email, projectName, plantLocation, dates } = body;

        if (!firstName || !lastName || !email || !projectName || !plantLocation) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: "Patriot Blind Solutions <noreply@patriotblindsolutions.com>",
            to: ["chris@patriotblindsolutions.com"],
            replyTo: email,
            subject: `New Request: ${projectName} - ${firstName} ${lastName} (${company})`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
                    <h2 style="color: #b91c1c; border-bottom: 2px solid #b91c1c; padding-bottom: 10px;">New Industrial Request</h2>
                    <p style="font-size: 16px;">You have received a new website request from <strong>${firstName} ${lastName}</strong>.</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tbody>
                            <tr><td style="padding: 10px; border-bottom: 1px solid #eaeaea; width: 35%;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${firstName} ${lastName}</td></tr>
                            <tr><td style="padding: 10px; border-bottom: 1px solid #eaeaea;"><strong>Company:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${company || "N/A"}</td></tr>
                            <tr><td style="padding: 10px; border-bottom: 1px solid #eaeaea;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eaeaea;"><a href="mailto:${email}">${email}</a></td></tr>
                            <tr><td style="padding: 10px; border-bottom: 1px solid #eaeaea;"><strong>Project Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${projectName}</td></tr>
                            <tr><td style="padding: 10px; border-bottom: 1px solid #eaeaea;"><strong>Plant Location:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${plantLocation}</td></tr>
                            <tr><td style="padding: 10px; border-bottom: 1px solid #eaeaea;"><strong>Dates Needed:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${dates || "Not specified"}</td></tr>
                        </tbody>
                    </table>
                    <p style="margin-top: 30px; font-size: 14px; color: #666; text-align: center;">This message was automatically generated from patriotblindsolutions.com</p>
                </div>
            `,
        });

        if (data.error) {
            console.error("Resend API Error:", data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data.data?.id });
    } catch (error: any) {
        console.error("Server Route Error:", error);
        return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
    }
}
