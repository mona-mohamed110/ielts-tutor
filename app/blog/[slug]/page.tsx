import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import T from "@/components/T";

function getPost(slug: string) {
  if (slug === "speaking-part-2") {
    return {
      title: ["How to answer Speaking Part 2", "إزاي تجاوبي Speaking Part 2"],
      category: ["Speaking", "Speaking"],
      p1: [
        "In Part 2 you get a topic card and one minute to prepare. Use the minute to write three or four keywords, not full sentences.",
        "في Part 2 بتاخدي كارت موضوع ودقيقة تحضير. استخدمي الدقيقة تكتبي 3 أو 4 كلمات مفتاحية، مش جمل كاملة.",
      ],
      p2: [
        "Start with a short introduction, then answer each point on the card in order. If you run out of ideas, add a feeling or a reason. Aim to speak for the full two minutes.",
        "ابدأي بمقدمة قصيرة، وبعدين جاوبي كل نقطة في الكارت بالترتيب. لو خلصت أفكار، زوّدي إحساس أو سبب. حاولي تتكلمي دقيقتين كاملين.",
      ],
    };
  }
  if (slug === "writing-task-2") {
    return {
      title: [
        "A simple structure for Writing Task 2",
        "هيكل بسيط لـ Writing Task 2",
      ],
      category: ["Writing", "Writing"],
      p1: [
        "Use four paragraphs: an introduction, two body paragraphs and a conclusion. In the introduction, rewrite the question and state your opinion.",
        "استخدمي أربع فقرات: مقدمة، فقرتين في الموضوع، وخاتمة. في المقدمة أعيدي صياغة السؤال واذكري رأيك.",
      ],
      p2: [
        "Each body paragraph needs one main idea, an explanation and an example. Finish with a short conclusion that repeats your opinion in new words.",
        "كل فقرة محتاجة فكرة رئيسية وشرح ومثال. اختمي بخاتمة قصيرة تكرّر رأيك بكلمات جديدة.",
      ],
    };
  }
  if (slug === "common-mistakes") {
    return {
      title: [
        "5 common IELTS mistakes to avoid",
        "5 أخطاء شائعة في IELTS تجنّبيها",
      ],
      category: ["Tips", "نصايح"],
      p1: [
        "Many students write fewer words than required, repeat the same vocabulary, or forget to answer every part of the question.",
        "طلاب كتير بيكتبوا كلمات أقل من المطلوب، أو بيكرروا نفس المفردات، أو بينسوا يجاوبوا كل جزء من السؤال.",
      ],
      p2: [
        "Others spend too long on one Reading passage or memorize answers for Speaking. Practice with a timer and review your mistakes after every task.",
        "وغيرهم بيقعدوا وقت طويل على نص قراءة واحد، أو بيحفظوا إجابات للـ Speaking. تدرّبي بتايمر وراجعي أخطاءك بعد كل مهمة.",
      ],
    };
  }
  if (slug === "study-plan") {
    return {
      title: [
        "How to plan your IELTS study weeks",
        "إزاي تخططي أسابيع مذاكرة IELTS",
      ],
      category: ["Tips", "نصايح"],
      p1: [
        "Give each week a main focus: for example Listening and Reading early in the week, then Writing, and Speaking at the end.",
        "اديلي كل أسبوع تركيز أساسي: مثلًا Listening و Reading أول الأسبوع، بعدين Writing، و Speaking في الآخر.",
      ],
      p2: [
        "Take a full practice test every two weeks and write down your weakest areas. Use those notes to plan the next block of study.",
        "اعملي اختبار تجريبي كامل كل أسبوعين واكتبي أضعف نقاطك. استخدمي الملاحظات دي في تخطيط المرحلة اللي بعدها.",
      ],
    };
  }
  return null;
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) {
    return { title: "Article not found" };
  }
  return { title: post.title[0], description: post.p1[0] };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-sm text-gold">
            <T en="Back to blog" ar="الرجوع للمدونة" />
          </Link>
          <p className="mt-3 text-sm">
            <T en={post.category[0]} ar={post.category[1]} />
          </p>
          <h1 className="font-serif text-4xl mt-1">
            <T en={post.title[0]} ar={post.title[1]} />
          </h1>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <p>
          <T en={post.p1[0]} ar={post.p1[1]} />
        </p>
        <p className="mt-5">
          <T en={post.p2[0]} ar={post.p2[1]} />
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-navy text-cream px-6 py-3 rounded hover:bg-gold hover:text-navy"
        >
          <T en="Book a consultation" ar="احجز استشارة" />
        </Link>
      </article>
    </>
  );
}
