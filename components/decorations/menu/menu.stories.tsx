import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Decorations/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Menu Component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
