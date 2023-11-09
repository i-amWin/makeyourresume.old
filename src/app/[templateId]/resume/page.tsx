import ResumeOutput from "@/components/resume-output";

export default function Resume() {
  return (
    <div className="mx-auto max-w-[1300px] space-y-6 px-4">
      <h1 className="text-3xl font-bold sm:text-3xl">Your Resume</h1>

      <ResumeOutput />
    </div>
  );
}
