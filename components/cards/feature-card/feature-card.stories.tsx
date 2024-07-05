import type { Meta, StoryObj } from "@storybook/react";

import { FeatureCard } from "./feature-card";
import { LiaTruckSolid } from "react-icons/lia";

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "FeatureCard component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    icon: LiaTruckSolid,
    title: "Et mauris",
    desc: "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
  },
};
