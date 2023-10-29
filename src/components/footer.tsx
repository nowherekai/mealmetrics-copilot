import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ position: 'fixed', bottom: 0, width: '100%', bgcolor: 'background.paper' }}>
            <Typography variant="body2" align="center">
                Made with ❤️ by LadyKerr &amp;{' '}
                <Link href="https://copilot.github.com/" target="_blank" rel="noopener">
                    GitHub Copilot
                </Link>
            </Typography>
            <Typography variant="body2" align="center">
                Powered by{' '}
                <Link href="https://openai.com/" target="_blank" rel="noopener">
                    OpenAI
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
