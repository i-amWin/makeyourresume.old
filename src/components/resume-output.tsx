"use client";
import Link from "next/link";
import EditStyles from "./edit-styles";
import Template1 from "./resume-templates/template-1";
import { Button } from "./ui/button";
import { useReactToPrint } from "react-to-print";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import { useParams } from "next/navigation";

const templates = {
  template1: Template1,
} as const;

export default function ResumeOutput() {
  const componentRef = useRef(null);
  const params = useParams();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
    `,
  });

  let Template: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;

  switch (params.templateId) {
    case "template1":
      Template = templates.template1;
      break;
    default:
      return <h1 className="text-4xl text-destructive">Invalid Template Id</h1>;
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4">
        <EditStyles />
        <Button asChild variant="outline">
          <Link href="/resume-form">Edit Data</Link>
        </Button>
        <Button onClick={handlePrint}>Download Resume</Button>
      </div>
      <Template ref={componentRef} />
    </div>
  );
}
