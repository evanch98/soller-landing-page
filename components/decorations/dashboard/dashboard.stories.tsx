import type { Meta, StoryObj } from "@storybook/react";

import { Dashboard } from "./dashboard";

const meta: Meta<typeof Dashboard> = {
  title: "Components/Decorations/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Dashboard component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {};
