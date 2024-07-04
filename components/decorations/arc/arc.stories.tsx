import type { Meta, StoryObj } from "@storybook/react";

import { Arc } from "./arc";

const meta: Meta<typeof Arc> = {
  title: "Components/Decorations/Arc",
  component: Arc,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Arc component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Arc>;

export const Default: Story = {};
