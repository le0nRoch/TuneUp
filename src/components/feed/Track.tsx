"use client";
import { chakra } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface TrackProps {
  src: string;
}
export function Track({ src }: TrackProps) {
  return (
    // biome-ignore lint/a11y/useMediaCaption: I don't fucking care
    <chakra.audio width={"100%"} controls src={src} />
  );
}
