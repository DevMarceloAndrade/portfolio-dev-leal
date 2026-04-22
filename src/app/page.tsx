import HomeBody from "@/components/pages/home";

type HomeProps = {
  searchParams: Promise<{ sent?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const contactStatus = params.sent === "success" ? "success" : params.sent === "error" ? "error" : null;

  return <HomeBody contactStatus={contactStatus} />;
}
