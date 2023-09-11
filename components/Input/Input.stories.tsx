import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';
import { TbMail } from 'react-icons/tb';

const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: () => <Input />,
}

export const Placeholder: Story = {
    render: () => <Input placeholder="Email address" />,
}

export const Error: Story = {
    render: () => <Input error="Can't be empty" />,
}

export const Icon: Story = {
    render: () => <Input icon={<TbMail />} />,
}

export const Mixed: Story = {
    render: () => <Input icon={<TbMail />} error="Can't be empty" placeholder="Email" />,
}