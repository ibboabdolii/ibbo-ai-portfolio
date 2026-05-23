import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#08111f',
          color: '#ffffff',
          padding: 78,
          fontFamily: 'Arial, sans-serif',
        },
      },
      React.createElement('div', { style: { fontSize: 34, color: '#7dd3fc', fontWeight: 700, marginBottom: 44 } }, 'AI Portfolio'),
      React.createElement('div', { style: { fontSize: 96, fontWeight: 800, marginBottom: 30 } }, 'Ibbo Abdoli'),
      React.createElement('div', { style: { fontSize: 44, fontWeight: 700, color: '#e0f2fe', marginBottom: 34 } }, 'Service Engineer / Automation Technician'),
      React.createElement('div', { style: { fontSize: 30, fontWeight: 700, color: '#cbd5e1' } }, 'PLC • ABB Robots • Machine Vision')
    ),
    { width: 1200, height: 630 }
  );
}
