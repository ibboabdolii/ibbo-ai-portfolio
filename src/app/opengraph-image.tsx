import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';
export const alt = 'Ibbo AI Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '72px',
          fontFamily: 'Arial, sans-serif',
        },
      },
      React.createElement(
        'div',
        { style: { fontSize: 30, color: '#93c5fd', marginBottom: 40 } },
        'Interactive AI Portfolio'
      ),
      React.createElement(
        'div',
        { style: { fontSize: 78, fontWeight: 700, letterSpacing: '-3px' } },
        'Ibbo Abdoli'
      ),
      React.createElement(
        'div',
        { style: { fontSize: 36, marginTop: 24, color: '#dbeafe' } },
        'Service Engineer / Automation Technician'
      ),
      React.createElement(
        'div',
        { style: { fontSize: 28, marginTop: 28, color: '#cbd5e1', maxWidth: 980 } },
        'Industrial automation, PLC troubleshooting, ABB robots and machine vision in Sweden.'
      )
    ),
    size
  );
}
