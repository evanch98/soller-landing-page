import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Avatar component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imgSrc: "/assets/profile-pic/profile-1.jpg",
  },
};
