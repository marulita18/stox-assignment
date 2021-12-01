import React from "react";
import ImageCaroussel from "../imageCaroussel/ImageCaroussel";
import Accordion from "../accordion/Accordion";

export default function MenuOpenContent() {
  const accordionItem = [
    {
      title: "Daily",
      submenus: [
        {
          article: "Smart socks",
          amount: 25,
        },
        {
          article: "Warm socks",
          amount: 25,
        },
        {
          article: "Comfy socks",
          amount: 25,
        },
      ],
    },
    {
      title: "Sports",
      submenus: [
        {
          article: "Sport socks",
          amount: 25,
        },
        {
          article: "Running socks",
          amount: 25,
        },
        {
          article: "Hockey socks",
          amount: 25,
        },
        {
          article: "Ski socks",
          amount: 25,
        },
        {
          article: "Flight socks",
          amount: 25,
        },
        {
          article: "Hiking socks",
          amount: 25,
        },
        {
          article: "Work socks",
          amount: 25,
        },
      ],
    },
  ];
  return (
    <div>
      <div>
        <ImageCaroussel />
      </div>
      <div>
        {accordionItem.map((item) => (
          <Accordion item={item} />
        ))}
      </div>
    </div>
  );
}
