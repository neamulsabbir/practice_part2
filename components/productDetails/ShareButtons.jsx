"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
const ShareButtons = ({name}) => {
  const url = new URL(window.location.href);
  return (
    <div className="flex gap-3 mt-4">
      <FacebookShareButton title={name} url={url.href}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton title={name} url={url.href}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <WhatsappShareButton title={name} url={url.href}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
      <TelegramShareButton title={name} url={url.href}>
        <TelegramIcon size={40} round />
      </TelegramShareButton>
    </div>
  );
};

export default ShareButtons;
