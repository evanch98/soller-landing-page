import type { Meta, StoryObj } from "@storybook/react";

import { TestimonialCard } from "./testimonial-card";
import { TbCloudBolt } from "react-icons/tb";

const meta: Meta<typeof TestimonialCard> = {
  title: "Components/Cards/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "TestimonialCard component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  args: {
    icon: TbCloudBolt,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profileSrc: "/assets/profile-pic/profile-1.jpg",
    name: "Rwanda Melfor",
    desc: "zerowaste.com",
  },
};
