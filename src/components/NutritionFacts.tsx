
import React from 'react';
import { Typography } from '@mui/material';

interface Props {
    data: string | undefined;
}

const NutritionFacts: React.FC<Props> = ({ data }) => {
    if (typeof data !== 'string') {
        return null;
    }

    const splitData = data.split(/\n\n|\n/);

    return (
        <>
            <h3> 🍎 Here's the nutrition facts for your recipe:</h3>
            {splitData.map((item, index) => (
                <Typography key={index} variant="body1">
                    {item}
                </Typography>
            ))}
        </>
    );
};

export default NutritionFacts;
