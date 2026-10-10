import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import T from "@/components/T";

function getCourse(slug: string) {
  if (slug === "academic") {
    return {
      title: ["IELTS Academic Preparation", "تحضير IELTS أكاديمي"],
      intro: [
        "Full preparation for all four sections of the Academic test, for university admission and professional registration.",
        "تحضير كامل للأقسام الأربعة في الاختبار الأكاديمي، للقبول في الجامعات والتسجيل المهني.",
      ],
      level: ["Intermediate and above", "متوسط فما فوق"],
      duration: ["8 weeks", "8 أسابيع"],
      price: ["EGP 000", "000 جنيه"],
      t1: [
        "Academic Reading and Listening strategies",
        "استراتيجيات القراءة والاستماع الأكاديمي",
      ],
      t2: [
        "Writing Task 1 (graphs and diagrams) and Task 2 (essays)",
        "Writing Task 1 (الرسوم البيانية) و Task 2 (المقالات)",
      ],
      t3: [
        "Speaking mock interviews with feedback",
        "مقابلات Speaking تجريبية مع تقييم",
      ],
    };
  }
  if (slug === "general") {
    return {
      title: ["IELTS General Training", "IELTS جنرال"],
      intro: [
        "For migration and work. Focus on letters and everyday reading.",
        "للهجرة والشغل. تركيز على الخطابات والقراءة اليومية.",
      ],
      level: ["Intermediate and above", "متوسط فما فوق"],
      duration: ["8 weeks", "8 أسابيع"],
      price: ["EGP 000", "000 جنيه"],
      t1: [
        "General Reading and Listening strategies",
        "استراتيجيات القراءة والاستماع في الجنرال",
      ],
      t2: [
        "Writing Task 1 (formal and informal letters) and Task 2",
        "Writing Task 1 (خطابات رسمية وغير رسمية) و Task 2",
      ],
      t3: [
        "Speaking practice for daily and work topics",
        "تدريب Speaking على مواضيع الحياة والشغل",
      ],
    };
  }
  if (slug === "speaking") {
    return {
      title: ["Speaking Practice", "تدريب Speaking"],
      intro: [
        "Mock interviews, fluency drills and personal feedback.",
        "مقابلات تجريبية وتمارين طلاقة وتقييم شخصي.",
      ],
      level: ["All levels", "كل المستويات"],
      duration: ["4 weeks", "4 أسابيع"],
      price: ["EGP 000", "000 جنيه"],
      t1: ["Part 1, 2 and 3 question types", "أنواع أسئلة Part 1 و 2 و 3"],
      t2: ["Fluency and pronunciation drills", "تمارين الطلاقة والنطق"],
      t3: [
        "Recorded mock interviews with feedback",
        "مقابلات تجريبية مسجّلة مع تقييم",
      ],
    };
  }
  if (slug === "writing") {
    return {
      title: ["Writing Skills", "مهارات Writing"],
      intro: [
        "Task 1 and Task 2 structure, vocabulary and corrections.",
        "هيكل Task 1 و Task 2 والمفردات والتصحيح.",
      ],
      level: ["Intermediate and above", "متوسط فما فوق"],
      duration: ["4 weeks", "4 أسابيع"],
      price: ["EGP 000", "000 جنيه"],
      t1: [
        "Essay structure and paragraph planning",
        "هيكل المقال وتخطيط الفقرات",
      ],
      t2: [
        "Vocabulary and grammar for higher bands",
        "مفردات وقواعد للدرجات الأعلى",
      ],
      t3: ["Written corrections on every task", "تصحيح مكتوب لكل مهمة"],
    };
  }
  if (slug === "private") {
    return {
      title: ["Private Online Lessons", "حصص خاصة أونلاين"],
      intro: [
        "One-to-one lessons built around your weak areas.",
        "حصص فردية مبنية على نقاط ضعفك.",
      ],
      level: ["All levels", "كل المستويات"],
      duration: ["Flexible, per hour", "مرن، بالساعة"],
      price: ["EGP 000 per hour", "000 جنيه في الساعة"],
      t1: [
        "Level check and personal study plan",
        "تحديد مستوى وخطة مذاكرة شخصية",
      ],
      t2: [
        "Lessons focused on your weakest skill",
        "حصص مركّزة على أضعف مهارة عندك",
      ],
      t3: ["Weekly progress review", "مراجعة تقدم أسبوعية"],
    };
  }
  return null;
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = getCourse(params.slug);
  if (!course) {
    return { title: "Course not found" };
  }
  return { title: course.title[0], description: course.intro[0] };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/courses" className="text-sm text-gold">
            <T en="Back to all courses" ar="الرجوع لكل الكورسات" />
          </Link>
          <h1 className="font-serif text-4xl mt-3">
            <T en={course.title[0]} ar={course.title[1]} />
          </h1>
          <p className="mt-3 max-w-xl">
            <T en={course.intro[0]} ar={course.intro[1]} />
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="font-serif text-2xl">
            <T en="What you will learn" ar="هتتعلم إيه" />
          </h2>
          <ul className="mt-3 list-disc ps-5 space-y-2">
            <li>
              <T en={course.t1[0]} ar={course.t1[1]} />
            </li>
            <li>
              <T en={course.t2[0]} ar={course.t2[1]} />
            </li>
            <li>
              <T en={course.t3[0]} ar={course.t3[1]} />
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 border-t-4 border-gold shadow-sm h-fit">
          <p className="font-serif text-3xl">
            <T en={course.price[0]} ar={course.price[1]} />
          </p>
          <p className="mt-3 text-sm">
            <T en="Duration:" ar="المدة:" />{" "}
            <T en={course.duration[0]} ar={course.duration[1]} />
          </p>
          <p className="text-sm">
            <T en="Level:" ar="المستوى:" />{" "}
            <T en={course.level[0]} ar={course.level[1]} />
          </p>
          <Link
            href="/contact"
            className="block mt-5 bg-navy text-cream text-center py-2 rounded hover:bg-gold hover:text-navy"
          >
            <T en="Book this course" ar="احجز الكورس" />
          </Link>
        </div>
      </div>
    </>
  );
}
