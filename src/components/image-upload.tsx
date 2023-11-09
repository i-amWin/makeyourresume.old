"use client";
import { useAtom } from "jotai";
import Dropzone from "react-dropzone";
import { dataAtom } from "./jotai-provider";
import { cn } from "@/lib/utils";

export default function ImageUpload({ className }: { className?: string }) {
  const [data, setData] = useAtom(dataAtom);
  return (
    <Dropzone
      accept={{
        "image/*": [".jpeg", ".png", ".svg", ".jpg", ".webp"],
      }}
      multiple={false}
      onDrop={(acceptedFiles) => {
        setData((prev) => ({
          ...prev,
          image: URL.createObjectURL(acceptedFiles[0]),
        }));
      }}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <div
          {...getRootProps()}
          className={cn(
            className,
            "cursor-pointer overflow-hidden",
            isDragActive && "bg-primary/10",
          )}
        >
          <input {...getInputProps()} id="profile-image" />
          {data.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={data.image}
              className="h-full w-full object-cover object-center"
              alt=""
            />
          )}

          <div className="flex h-full w-full items-center justify-center px-4">
            {isDragReject && !data.image && (
              <p>Some error occurs. Please try again.</p>
            )}

            {!data.image &&
              (isDragActive && !isDragReject ? (
                <p>Drop the image here ...</p>
              ) : (
                <p>
                  Drag &#39;n&#39; drop image here, or click to select image.
                </p>
              ))}
          </div>
        </div>
      )}
    </Dropzone>
  );
}
