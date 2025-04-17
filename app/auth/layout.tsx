import { Box } from '@mui/material';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box className='flex h-screen items-center justify-center'>{children}</Box>
  );
}
