import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { Typography } from '../Typography';

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <Button> <Typography>Click me</Typography> </Button>,
}

export const Loading: Story = {
    render: () => <Button loading> <Typography>Click me</Typography> </Button>,
}
export const Disabled: Story = {
    render: () => <Button disabled> <Typography>Click me</Typography> </Button>,
}