import type { Meta, StoryObj } from "@storybook/react";

import { Chat } from "./chat";

const meta: Meta<typeof Chat> = {
  title: "Components/Decorations/Chat",
  component: Chat,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Chat component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chat>;

export const Default: Story = {};
