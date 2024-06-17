import { title } from "@/components/primitives";
import { Snippet } from "@nextui-org/snippet";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <p className="text-large text-justify">FakeAlert is a fake news detection app leveraging advanced machine learning (ML) models and natural language processing (NLP) to evaluate the credibility of news articles. Utilizing a seamless and responsive user interface built with Next.js, TypeScript, and Framer Motion, FakeAlert provides an intuitive and engaging experience. The robust backend is powered by Django REST API to ensure secure and efficient data handling.</p>
      </section>
      <div className="mt-8 mb-7">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span className="text-base">
            Verify before you trust. Happy fact-checking!
          </span>
        </Snippet>
      </div>
    </div>

  );
}
