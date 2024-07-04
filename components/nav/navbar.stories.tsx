import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Navbar component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
