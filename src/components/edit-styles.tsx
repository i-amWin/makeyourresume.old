"use client";
import { useAtom } from "jotai";
import { customStylesAtom } from "./jotai-provider";
// import { Input } from "./ui/input";
import { HexColorPicker, RgbColorPicker } from "react-colorful";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

export default function EditStyles() {
  const [customStyles, setCustomStyles] = useAtom(customStylesAtom);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit Styles</Button>
      </PopoverTrigger>
      <PopoverContent className="grid gap-4">
        <div className="space-y-2">
          <Label asChild>
            <h3>Accent Color</h3>
          </Label>
          <HexColorPicker
            color={customStyles.ACCENT_COLOR}
            onChange={(val) =>
              setCustomStyles((prev) => ({ ...prev, ACCENT_COLOR: val }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label asChild>
            <h3>Left Column Gap</h3>
          </Label>
          <Slider
            min={0}
            max={100}
            defaultValue={[customStyles.LEFT_COLUMN_GAP]}
            step={1}
            onValueChange={(val) =>
              setCustomStyles((prev) => ({ ...prev, LEFT_COLUMN_GAP: val[0] }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label asChild>
            <h3>Right Column Gap</h3>
          </Label>
          <Slider
            min={0}
            max={100}
            defaultValue={[customStyles.RIGHT_COLUMN_GAP]}
            step={1}
            onValueChange={(val) =>
              setCustomStyles((prev) => ({ ...prev, RIGHT_COLUMN_GAP: val[0] }))
            }
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
