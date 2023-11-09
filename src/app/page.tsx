import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Template1Image from "@/assets/template1.jpg";

const templates = [
  {
    name: "Template 1",
    image: Template1Image,
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold sm:text-3xl">
        Select a Resume Template
      </h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {templates.map((template) => (
          <li
            key={template.name}
            className="rounded-lg border bg-card p-5 text-card-foreground shadow-sm"
          >
            <Link href="/template1/resume-form">
              <Image
                src={template.image}
                alt={template.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <h2 className="mt-3 text-lg font-medium leading-none tracking-tight">
                {template.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
