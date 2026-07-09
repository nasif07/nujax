import RequestDemoForm from "../components/shared/RequestDemoForm";
import Container from "../components/Container";

export const metadata = {
  title: "Request a Demo",
  description: "Request a demo — tell us about your needs and we'll schedule a call.",
};

export default function Page() {
  return (
    <Container className="pt-8 pb-16 sm:pt-14 sm:pb-24">
      <RequestDemoForm />
    </Container>
  );
}
