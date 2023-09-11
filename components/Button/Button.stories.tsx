import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { TbMail } from 'react-icons/tb';

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <Button> Click me </Button>,
}

export const Loading: Story = {
    render: () => <Button loading> Click me </Button>,
}
export const Disabled: Story = {
    render: () => <Button disabled> Click me </Button>,
}