import type { Meta, StoryObj } from "@storybook/react";

import { Mobile } from "./mobile";

const meta: Meta<typeof Mobile> = {
  title: "Components/Decorations/Mobile",
  component: Mobile,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Mobile component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Mobile>;

export const Default: Story = {};
