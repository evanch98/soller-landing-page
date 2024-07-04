import type { Meta, StoryObj } from "@storybook/react";

import { Circle } from "./circle";

const meta: Meta<typeof Circle> = {
  title: "Components/Decorations/Circle",
  component: Circle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Circle component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Circle>;

export const Default: Story = {};

export const Purple: Story = {
  args: {
    size: 150,
    colorClass: "bg-purple-500",
  },
};

export const Blue: Story = {
  args: {
    size: 50,
    colorClass: "bg-blue-500",
  },
};
