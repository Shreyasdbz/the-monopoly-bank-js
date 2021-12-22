/** @format */

export const color_palette = [
    {
        id: '001',
        name: 'navy-blue',
        color: '#002848',
    },
    {
        id: '002',
        name: 'sky-blue',
        color: '#0094df',
    },
    {
        id: '003',
        name: 'flat-purple',
        color: '#310972',
    },
    {
        id: '004',
        name: 'vibrant-red',
        color: '#ff356f',
    },
    {
        id: '005',
        name: 'olive-green',
        color: '#2d5f62',
    },
    {
        id: '006',
        name: 'orange',
        color: '#e86c39',
    },
    {
        id: '007',
        name: 'green',
        color: '#127e58',
    },
    {
        id: '008',
        name: 'smooth-pink',
        color: '#ef7191',
    },
    {
        id: '009',
        name: 'flat-pink',
        color: '#e3179d',
    },
    {
        id: '009',
        name: 'flat-brown',
        color: '#7e4a48',
    },
    {
        id: '010',
        name: 'red',
        color: '#de0800',
    },
];

export function getRandomColor() {
    return color_palette[Math.floor(Math.random() * color_palette.length)]
        .color;
}
