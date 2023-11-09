import { useAtom } from "jotai";
import { customStylesAtom, dataAtom } from "@/components/jotai-provider";

export default function ImageSection() {
  const [customStyles] = useAtom(customStylesAtom);
  const [{ image }] = useAtom(dataAtom);
  return (
    <div
      className="flex aspect-square w-full items-center justify-center overflow-hidden rounded"
      style={{ border: `2px solid ${customStyles.ACCENT_COLOR}` }}
    >
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} className="object-cover object-center" alt="" />
      }
    </div>
  );
}
