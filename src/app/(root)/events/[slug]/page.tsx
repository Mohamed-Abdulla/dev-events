import { FC } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  return <main>{slug}</main>;
};

export default Page;
