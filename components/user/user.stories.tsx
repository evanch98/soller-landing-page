import type { Meta, StoryObj } from "@storybook/react";

import { User } from "./user";

const meta: Meta<typeof User> = {
  title: "Components/User",
  component: User,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "User component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof User>;

export const Default: Story = {
  args: {
    profileSrc: "/assets/profile-pic/profile-1.jpg",
    name: "Rwanda Melfor",
    desc: "zerowaste.com",
  },
};
