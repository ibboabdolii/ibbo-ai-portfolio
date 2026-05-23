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
          backgroundColor: '#08111f',
          color: '#ffffff',
          padding: '78px',
          fontFamily: 'Arial, sans-serif',
          border: '1px solid #1e3a5f',
        },
      },
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 44,
          },
        },
        React.createElement(
          'div',
          {
            style: {
              width: 88,
              height: 88,
              borderRadius: 22,
              backgroundColor: '#ffffff',
              color: '#08111f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              fontWeight: 800,
            },
          },
          'IA'
        ),
        React.createElement(
          'div',
          { style: { fontSize: 34, color: '#7dd3fc', fontWeight: 700 } },
          'AI Portfolio'
        )
      ),
      React.createElement(
        'div',
        {
          style: {
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: '-4px',
            lineHeight: 1,
            marginBottom: 30,
          },
        },
        'Ibbo Abdoli'
      ),
      React.createElement(
        'div',
        {
          style: {
            fontSize: 44,
            fontWeight: 700,
            color: '#e0f2fe',
            marginBottom: 34,
          },
        },
        'Service Engineer / Automation Technician'
      ),
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            gap: 18,
            fontSize: 30,
            fontWeight: 700,
            color: '#cbd5e1',
          },
        },
        React.createElement('span', null, 'PLC'),
        React.createElement('span', { style: { color: '#38bdf8' } }, '•'),
        React.createElement('span', null, 'ABB Robots'),
        React.createElement('span', { style: { color: '#38bdf8' } }, '•'),
        React.createElement('span', null, 'Machine Vision')
      )
    ),
    size
  );
}
