import React from "react";
import { GithubIcon, HeyGenLogo } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <a
          href="https://app.heygen.com/"
          aria-label="HeyGen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeyGenLogo />
        </a>
        <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text ml-4">
          <p className="text-xl font-semibold text-transparent">
            HeyGen Interactive Avatar SDK NextJS Demo
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://labs.heygen.com/interactive-avatar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground"
        >
          Avatars
        </a>
        <a
          href="https://docs.heygen.com/reference/list-voices-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground"
        >
          Voices
        </a>
        <a
          href="https://docs.heygen.com/reference/new-session-copy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground"
        >
          API Docs
        </a>
        <a
          href="https://help.heygen.com/en/articles/9182113-interactive-avatar-101-your-ultimate-guide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground"
        >
          Guide
        </a>
        <a
          href="https://github.com/HeyGen-Official/StreamingAvatarSDK"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-foreground"
        >
          <GithubIcon className="text-default-500" />
          SDK
        </a>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
