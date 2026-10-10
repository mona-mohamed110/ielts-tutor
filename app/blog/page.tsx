import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "IELTS tips for Speaking and Writing, common mistakes and study plans.",
};

export default function Blog() {
  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl">
            <T en="Blog" ar="المدونة" />
          </h1>
          <p className="mt-3">
            <T
              en="Tips and guides to help you prepare for IELTS. Sample articles for the demo."
              ar="نصايح وإرشادات تساعدك تحضّري للـ IELTS. مقالات تجريبية للعرض."
            />
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <BlogList />
      </div>
    </>
  );
}
