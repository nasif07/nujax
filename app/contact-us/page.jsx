import { redirect } from "next/navigation";

export default function Page() {
  redirect(process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/30min");
}
