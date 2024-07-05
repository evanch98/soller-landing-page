import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Header component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Pick the Sun",
    subtitle: "No more waste",
    desc: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.",
  },
};

export const Left: Story = {
  args: {
    title: "Personalized services",
    subtitle: "Services",
    desc: "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.",
    center: false,
  },
};
