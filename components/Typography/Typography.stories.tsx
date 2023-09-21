import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta: Meta<typeof Typography> = {
    title: "Typography",
    component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    render: () => <Typography>Lorem ipsum dolor sit amet</Typography>,
}

export const PrimaryColored: Story = {
    render: () => <Typography variant='body-m' color="primary">Lorem ipsum dolor sit amet</Typography>,
}

export const HeadingLarge: Story = {
    render: () => <Typography variant='heading-l'>Lorem ipsum dolor sit amet</Typography>,
}

export const HeadingMedium: Story = {
    render: () => <Typography variant='heading-m'>Lorem ipsum dolor sit amet</Typography>,
}

export const HeadingSmall: Story = {
    render: () => <Typography variant='heading-s'>Lorem ipsum dolor sit amet</Typography>,
}

export const HeadingXSmall: Story = {
    render: () => <Typography variant='heading-xs'>Lorem ipsum dolor sit amet</Typography>,
}

export const BodyMedium: Story = {
    render: () => <Typography variant='body-m'>Lorem ipsum dolor sit amet</Typography>,
}

export const BodySmall: Story = {
    render: () => <Typography variant='body-s'>Lorem ipsum dolor sit amet</Typography>,
}
