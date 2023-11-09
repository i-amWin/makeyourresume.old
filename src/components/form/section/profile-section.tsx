// IMPORTS FROM PACKAGES
import { Control } from "react-hook-form";

// IMPORTS FROM FILES
import { TFormSchema } from "@/components/jotai-provider";
import { Input } from "@/components/ui/input";

// IMPORTS FROM UI LIBRARY COMPONENTS
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";
import ImageUpload from "@/components/image-upload";

interface ProfileSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function ProfileSection({
  control,
  goNext,
}: ProfileSectionProps) {
  return (
    <>
      <Heading>Profile</Heading>

      {/* PROFILE IMAGE */}
      {/* <div className="space-y-6"> */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* LABEL: IMAGE */}
        <div className="space-y-2">
          <Label htmlFor="profile-image">Upload your profile picture</Label>
          <ImageUpload className="h-36 w-36 rounded border-2 border-dashed border-primary/70 text-center text-sm" />
        </div>

        {/* LABEL: NAME */}
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-auto">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LABEL: TITLE */}
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your profession title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LABEL: EMAIL */}
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LABEL: PHONE */}
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LABEL: ADDRESS */}
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LABEL: ABOUT */}
        <FormField
          control={control}
          name="about"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>About Me</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Write a brief about yourself"
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="sm:col-span-2" />

        <div className="flex sm:col-span-2">
          <Button className="ml-auto" onClick={goNext}>
            Next (Socials)
          </Button>
        </div>
      </div>
    </>
  );
}
