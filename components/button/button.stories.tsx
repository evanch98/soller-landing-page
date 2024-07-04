import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { RiArrowRightLine, RiHeadphoneLine, RiMenuFill } from "react-icons/ri";
import { Roboto } from "next/font/google";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Button component",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: ["default", "phone", "ghost", "link"],
    },
    padding: {
      control: "select",
      description: "Button paddings",
      options: ["default", "phone", "ghost", "link", "icon"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: [
      "Button",
      <RiArrowRightLine
        key={2}
        className="h-6 w-6"
      />,
    ],
    disabled: false,
    onClick: action("default click"),
    className: font.className,
  },
};

export const Phone: Story = {
  args: {
    children: [
      <RiHeadphoneLine
        key={2}
        className="h-6 w-6"
      />,
      "555 818 282",
    ],
    variant: "phone",
    padding: "phone",
    disabled: false,
    onClick: action("default click"),
    className: font.className,
  },
};

export const Ghost: Story = {
  args: {
    children: [
      "Button",
      <RiArrowRightLine
        key={2}
        className="h-6 w-6"
      />,
    ],
    variant: "ghost",
    padding: "ghost",
    disabled: false,
    onClick: action("default click"),
    className: font.className,
  },
};

export const Icon: Story = {
  args: {
    children: <RiMenuFill className="h-6 w-6" />,
    variant: "default",
    padding: "icon",
    disabled: false,
    onClick: action("default click"),
    className: font.className,
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
    padding: "link",
    disabled: false,
    onClick: action("default click"),
    className: font.className,
  },
};
