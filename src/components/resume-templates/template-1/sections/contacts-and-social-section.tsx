import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  User2,
} from "lucide-react";
import { useAtom } from "jotai";
import { dataAtom, customStylesAtom } from "@/components/jotai-provider";

export const icons = {
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  portfolio: User2,
  facebook: Facebook,
  instagram: Instagram,
  other: Paperclip,
} as const;

export default function ContactAndSocialSection() {
  // const [customStyles] = useAtom(customStylesAtom);
  const CONTACTS_AND_SOCIALS_GAP = 8;
  const [data] = useAtom(dataAtom);

  return (
    <div
      className="flex flex-col"
      style={{
        gap: CONTACTS_AND_SOCIALS_GAP,
      }}
    >
      <ContactAndSocialText icon="mail" text={data.email} />
      <ContactAndSocialText icon="phone" text={data.phone} />
      <ContactAndSocialText icon="mapPin" text={data.address} />
      <ul
        className="flex flex-col"
        style={{ gap: CONTACTS_AND_SOCIALS_GAP + "pt" }}
      >
        {data.socials.map((social, index) => (
          <li key={index}>
            <ContactAndSocialText icon={social.icon} text={social.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactAndSocialText({ icon, text }: { icon: string; text: string }) {
  const [customStyles] = useAtom(customStylesAtom);

  let Icon: LucideIcon;

  switch (icon) {
    case "mail":
      Icon = icons.mail;
      break;

    case "mapPin":
      Icon = icons.mapPin;
      break;

    case "phone":
      Icon = icons.phone;
      break;

    case "linkedin":
      Icon = icons.linkedin;
      break;

    case "github":
      Icon = icons.github;
      break;

    case "portfolio":
      Icon = icons.portfolio;
      break;

    case "facebook":
      Icon = icons.facebook;
      break;

    case "instagram":
      Icon = icons.instagram;
      break;

    default:
      Icon = icons.other;
      break;
  }

  return (
    <p className="flex flex-col gap-[1.5pt]">
      <span
        style={{
          color: customStyles.ACCENT_COLOR,
        }}
      >
        <Icon className="h-[12pt] w-[12pt]" />
      </span>
      <span className="break-words text-[9pt] leading-snug">{text}</span>
    </p>
  );
}
